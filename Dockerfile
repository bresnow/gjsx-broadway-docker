ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base-dependencies
WORKDIR /tmp
# Copy helpers.
COPY ./docker/helpers /usr/bin/
ENV GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5 
RUN  \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories &&\
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories 
# gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev') \
# add-pkg $gvfs_pkgs pkgconf &&\
# ln -sf pkgconf /usr/bin/pkg-config 

# dependencies
RUN add-pkg  \
    apk-gtk3 \
    bash \
    ca-certificates \
    cmake \
    cairo \
    clutter-gst \
    clutter-gtk \
    curl \
    dconf \
    dbus \
    dbus-x11 \
    fluxbox \
    g++ \
    gcompat \
    git \
    gjs \
    glib \
    gnome \
    gnunet-gtk \
    gobject-introspection \
    graphene \
    gst-plugins-good-gtk \
    gstreamer \
    gthumb \
    gtk4.0 \
    gtk-vnc \
    gtksourceview \
    libadwaita \
    libcamera-gstreamer \
    libepoxy \
    libgcc \
    libmediainfo \
    libstdc++ \
    libsoup \
    libx11 \
    pango \
    make \
    mc \
    mesa \
    mesa-demos \
    meson \
    ninja \
    nodejs \
    npm \
    python3 \
    py3-opengl \
    py3-pip \
    rsync \
    socat \
    sudo \
    tar \
    webkit2gtk-5.0 \
    wget \
    wxgtk \
    vim \
    vlc \
    xorg-server xf86-input-libinput xinit udev

RUN \
    add-pkg \
    supervisor \
    # gedit \
    desktop-file-utils  \
    gtk4.0-demo \
    gnome-apps-extra \
    tmux 
# Install themes
RUN \
    git clone https://github.com/paullinuxthemer/PRO-Dark-XFCE-Edition.git  \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'PRO-Dark-XFCE-Edition/PRO-dark-XFCE-edition II' /usr/share/themes/ \
    && git clone https://github.com/paullinuxthemer/Mc-OS-themes.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'Mc-OS-themes/Mc-OS-Transparent' /usr/share/themes/ \
    && rm -rf /tmp/* /tmp/.[!.]* \
    && del-pkg rsync

FROM base-dependencies as broadway-app

WORKDIR /home/app

COPY ./_compiled _compiled
COPY ./assets assets
COPY ./proxyserver proxyserver
COPY ./package.json package.json 
COPY ./docker/supervisord.conf /etc/
RUN \
    npm i -g yarn \
    && yarn

RUN export $(dbus-launch) \
    && cd /tmp && wget https://github.com/tsl0922/ttyd/releases/download/1.7.1/ttyd.x86_64 \
    && mv ttyd.x86_64 /usr/bin/ttyd \
    && rm -rf /tmp/* /tmp/.[!.]*

ENV HOME=/home/app \
    XDG_RUNTIME_DIR=$HOME \
    XDG_CURRENT_DESKTOP=GNOME \
    XDG_MENU_PREFIX="gnome-" \
    DEBUG=true
# DBUS_SESSION_BUS_ADDRESS="dbus-daemon --session --print-address --fork" 




ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]
