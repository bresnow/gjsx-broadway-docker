#!/bin/sh
set -e

THEME=powerlevel10k/powerlevel10k
PLUGINS=""
ZSHRC_APPEND=""

while getopts ":t:p:a:" opt; do
    case ${opt} in
        t)  THEME=$OPTARG
            ;;
        p)  PLUGINS="${PLUGINS}$OPTARG "
            ;;
        a)  ZSHRC_APPEND="$ZSHRC_APPEND\n$OPTARG"
            ;;
        \?)
            echo "Invalid option: $OPTARG" 1>&2
            ;;
        :)
            echo "Invalid option: $OPTARG requires an argument" 1>&2
            ;;
    esac
done
shift $((OPTIND -1))

echo
echo "Installing Oh-My-Zsh with:"
echo "  THEME   = $THEME"
echo "  PLUGINS = $PLUGINS"
echo

check_dist() {
    (
        . /etc/os-release
        echo $ID
    )
}

check_version() {
    (
        . /etc/os-release
        echo $VERSION_ID
    )
}

install_dependencies() {
    DIST=`check_dist`
    VERSION=`check_version`
    echo "###### Installing dependencies for $DIST"

    if [ "`id -u`" = "0" ]; then
        Sudo=''
    elif which sudo; then
        Sudo='sudo'
    else
        echo "WARNING: 'sudo' command not found. Skipping the installation of dependencies. "
        echo "If this fails, you need to do one of these options:"
        echo "   1) Install 'sudo' before calling this script"
        echo "OR"
        echo "   2) Install the required dependencies: git curl zsh"
        return
    fi

    case $DIST in
        alpine)
            $Sudo apk add --update --no-cache git curl zsh
        ;;
        centos | amzn)
            $Sudo yum update -y
            $Sudo yum install -y git curl
            $Sudo yum install -y ncurses-compat-libs # this is required for AMZN Linux (ref: https://github.com/emqx/emqx/issues/2503) 
            $Sudo curl http://mirror.ghettoforge.org/distributions/gf/el/7/plus/x86_64/zsh-5.1-1.gf.el7.x86_64.rpm > zsh-5.1-1.gf.el7.x86_64.rpm
            $Sudo rpm -i zsh-5.1-1.gf.el7.x86_64.rpm
            $Sudo rm zsh-5.1-1.gf.el7.x86_64.rpm
        ;;
        *)
            $Sudo apt-get update
            $Sudo apt-get -y install git curl zsh locales
            if [ "$VERSION" != "14.04" ]; then
                $Sudo apt-get -y install locales-all
            fi
            $Sudo locale-gen en_US.UTF-8
    esac
}

zshrc_template() {
    _HOME=$1; 
    _THEME=$2; shift; shift
    _PLUGINS=$*;

    cat <<EOM
export LANG='en_US.UTF-8'
export LANGUAGE='en_US:en'
export LC_ALL='en_US.UTF-8'
export TERM=xterm
##### Zsh/Oh-my-Zsh Configuration
export ZSH="$_HOME/.oh-my-zsh"
ZSH_THEME="${_THEME}"
plugins=($_PLUGINS)
EOM
    printf "$ZSHRC_APPEND"
    printf "\nsource \$ZSH/oh-my-zsh.sh\n"
}

powerline10k_config() {
    cat <<EOM
POWERLEVEL9K_SHORTEN_STRATEGY="truncate_to_last"
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(user dir vcs status)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=()
POWERLEVEL9K_STATUS_OK=false
POWERLEVEL9K_STATUS_CROSS=true
EOM
}

install_dependencies

cd /tmp

# Install On-My-Zsh
if [ ! -d $HOME/.oh-my-zsh ]; then
    sh -c "$(curl https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" --unattended
fi

# Generate plugin list
plugin_list=""
for plugin in $PLUGINS; do
    if [ "`echo $plugin | grep -E '^http.*'`" != "" ]; then
        plugin_name=`basename $plugin`
        git clone $plugin $HOME/.oh-my-zsh/custom/plugins/$plugin_name
    else
        plugin_name=$plugin
    fi
    plugin_list="${plugin_list}$plugin_name "
done

# Handle themes
if [ "`echo $THEME | grep -E '^http.*'`" != "" ]; then
    theme_repo=`basename $THEME`
    THEME_DIR="$HOME/.oh-my-zsh/custom/themes/$theme_repo"
    git clone $THEME $THEME_DIR
    theme_name=`cd $THEME_DIR; ls *.zsh-theme | head -1` 
    theme_name="${theme_name%.zsh-theme}"
    THEME="$theme_repo/$theme_name"
fi

# Generate .zshrc
zshrc_template "$HOME" "$THEME" "$plugin_list" > $HOME/.zshrc

# Install powerlevel10k if no other theme was specified
if [ "$THEME" = "powerlevel10k/powerlevel10k" ]; then
    git clone https://github.com/romkatv/powerlevel10k $HOME/.oh-my-zsh/custom/themes/powerlevel10k
    powerline10k_config >> $HOME/.zshrc
fi
if [ ! -n "$OH_MY_VIM" ]; then
  OH_MY_VIM=~/.oh-my-vim
fi

if [ -d "$OH_MY_VIM" ]; then
  echo "\033[0;33mYou already have Oh My Vim installed.\033[0m You'll need to remove $OH_MY_VIM if you want to install"
  exit
fi

echo "\033[0;34mCloning Oh My Vim...\033[0m"
hash git >/dev/null 2>&1 && /usr/bin/env git clone https://github.com/liangxianzhe/oh-my-vim.git $OH_MY_VIM || {
  echo "git not installed"
  exit
}

echo "\033[0;34mLooking for an existing vim config...\033[0m"
if [ -f ~/.vimrc ] || [ -h ~/.vimrc ]; then
  echo "\033[0;33mFound ~/.vimrc.\033[0m \033[0;32mBacking up to ~/.vimrc.pre-oh-my-vim\033[0m";
  mv ~/.vimrc ~/.vimrc.pre-oh-my-vim;
fi

echo "\033[0;34mUsing the Oh My Vim template file and adding it to ~/.vimrc\033[0m"
cp $OH_MY_VIM/templates/vimrc-template ~/.vimrc
sed -i -e "/OH_MY_VIM=/ c\\
let \$OH_MY_VIM=\"$OH_MY_VIM\"
" ~/.vimrc

if [ ! -d "bundle" ]; then
    echo "\033[0;34mCreating a bundle directory...\033[0m"
    mkdir $OH_MY_VIM/bundle
fi

# Copy the font if using mac
if [[ `uname` == 'Darwin' ]]; then
    echo "\033[0;34mInstalling font...\033[0m"
    cp $OH_MY_VIM"/font/DroidSansMono/Droid Sans Mono for Powerline.otf" ~/Library/fonts/
fi

echo "\033[0;32m"'  ____  __     __  _____  __  _   ________  ___  '"\033[0m"
echo "\033[0;32m"' / __ \/ /    /  |/  /\ \/ / | | / /  _/  |/  /  '"\033[0m"
echo "\033[0;32m"'/ /_/ / _ \  / /|_/ /  \  /  | |/ // // /|_/ /   '"\033[0m"
echo "\033[0;32m"'\____/_//_/ /_/  /_/   /_/   |___/___/_/  /_/    '"\033[0m"
                                                  
echo "\n\n \033[0;32mPlease look over the ~/.vimrc file to select plugins, themes, and options.\033[0m"
echo "\n\n \033[0;32mThen open you vim and it will install plugins for you.\033[0m"
echo "\n\n \033[0;32mEnjoy!.\033[0m"