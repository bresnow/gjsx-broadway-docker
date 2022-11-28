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
    vim 


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
    desktop-file-utils  \
    && npm i -g yarn \
    && yarn

# # Gwebgl GObject-introspection bindings
# RUN \
#     git clone https://github.com/realh/gwebgl.git /tmp/gwebgl\
#     && cd /tmp/gwebgl \
#     && meson setup build . \
#     && meson compile -C build \
#     && meson install -C build 

ENV HOME=/home/app \
    XDG_RUNTIME_DIR=$HOME \
    GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5

ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]





# RUN \
#     git clone https://github.com/daniruiz/flat-remix \
#     && mkdir -p /usr/share/icons/ \
#     && rsync -av --progress flat-remix/Flat-Remix-Green-Dark /usr/share/icons/ \
#     && gtk-update-icon-cache /usr/share/icons/Flat-Remix-Green-Dark/ \
#     && rm -rf /tmp/* /tmp/.[!.]*

# # Install PRO Dark XFCE theme
# RUN \
#     git clone https://github.com/paullinuxthemer/PRO-Dark-XFCE-Edition.git \
#     && mkdir -p /usr/share/themes/ \
#     && rsync -av --progress 'PRO-Dark-XFCE-Edition/PRO-dark-XFCE-edition II' /usr/share/themes/ \
#     && rm -rf /tmp/* /tmp/.[!.]*

# Mc-OS transparent theme
# RUN \
#     git clone https://github.com/paullinuxthemer/Mc-OS-themes.git \
#     && mkdir -p /usr/share/themes/ \
#     && rsync -av --progress 'Mc-OS-themes/Mc-OS-Transparent' /usr/share/themes/ \
#     && rm -rf /tmp/* /tmp/.[!.]*