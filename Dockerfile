ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base-dependencies
WORKDIR /tmp
# Copy helpers.
COPY ./docker/helpers /usr/bin/

RUN  \
    gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev') \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories &&\
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories &&\
    add-pkg $gvfs_pkgs pkgconf &&\
    ln -sf pkgconf /usr/bin/pkg-config 

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
    gtk+2.0 \
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
    meson \
    ninja \
    nodejs \
    npm \
    python3 \
    py3-opengl \
    py3-pip \
    py3-qt5 \
    qt5-qtbase \
    qt5-qtsvg \
    rsync \
    socat \
    sudo \
    tar \
    webkit2gtk-5.0 \
    wget \
    wxgtk \
    vim \
    vlc 


FROM base-dependencies as broadway-app

WORKDIR /home/app
COPY ./_compiled _compiled
COPY ./assets assets
COPY ./proxyserver proxyserver
COPY ./package.json package.json 
COPY ./docker/supervisord.conf /etc/
RUN \
    add-pkg \
    supervisor \
    gedit \
    desktop-file-utils  \
    gtk4.0-demo \
    && npm i -g yarn \
    && yarn

ENV HOME=/home/app \
    XDG_RUNTIME_DIR=$HOME \
    GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5

# RUN \
#     git clone https://github.com/Xpra-org/xpra; cd xpra &&\
#     python3 ./setup.py install 

# Install PRO Dark XFCE theme
RUN \
    git clone https://github.com/paullinuxthemer/PRO-Dark-XFCE-Edition.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'PRO-Dark-XFCE-Edition/PRO-dark-XFCE-edition II' /usr/share/themes/ \
    && rm -rf /tmp/* /tmp/.[!.]*

ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]
# Mc-OS transparent theme
# RUN \
#     git clone https://github.com/paullinuxthemer/Mc-OS-themes.git \
#     && mkdir -p /usr/share/themes/ \
#     && rsync -av --progress 'Mc-OS-themes/Mc-OS-Transparent' /usr/share/themes/ \
#     && rm -rf /tmp/* /tmp/.[!.]*