ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base-dependencies
WORKDIR /tmp
# Copy helpers.
COPY ./system/bin /usr/bin/
ENV GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5 
RUN  \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories &&\
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories 

COPY ./_compiled _compiled
COPY ./assets assets
COPY ./proxyserver proxyserver
COPY ./package.json package.json 

RUN \
    npm i -g yarn \
    && yarn

RUN add-pkg  \
    bash \
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
    git \
    gjs \
    glib \
    gnome \
    gnunet \
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
    qemu-ui-opengl \
    rsync \
    socat \
    sudo \
    tar \
    webkit2gtk-5.0 \
    wget \
    wxgtk \
    vim \
    vlc \
    vte3 \
    xorg-server \
    xf86-input-libinput \
    xinit udev

RUN \
    add-pkg \
    supervisor \
    desktop-file-utils  \
    gtk4.0-demo \
    gnome-apps-extra 
# Install themes
ENV HOME=/home/app \
    XDG_RUNTIME_DIR=$HOME \
    XDG_CURRENT_DESKTOP=GNOME \
    XDG_MENU_PREFIX="gnome-" \
    MC_OS_THEME=McOS-MJV-Dark-v2.0 \
    DEBUG=true
RUN \
    git clone https://github.com/paullinuxthemer/Mc-OS-themes.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'Mc-OS-themes/${MC_OS_THEME}' /usr/share/themes/ \
    && rm -rf /tmp/* /tmp/.[!.]* \
    && del-pkg rsync

FROM base-dependencies as broadway-app

WORKDIR /home/app

COPY --from=base-dependencies /tmp/_compiled _compiled
COPY --from=base-dependencies /tmp/assets assets
COPY --from=base-dependencies /tmp/proxyserver proxyserver
COPY --from=base-dependencies /tmp/node_modules proxyserver
COPY --from=base-dependencies /tmp/package.json package.json 
COPY ./system/supervisord.conf /etc/
RUN \
    mkdir -p /var/log/gjsx &&\
    export $(dbus-launch) 



ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]
