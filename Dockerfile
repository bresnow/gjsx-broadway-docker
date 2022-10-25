
ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base
EXPOSE 8085
WORKDIR /tmp
# Copy helpers.
COPY helpers/* /usr/bin/
ENV GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5
RUN  \
    gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev') \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories &&\
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories &&\
    add-pkg $gvfs_pkgs pkgconf &&\
    ln -sf pkgconf /usr/bin/pkg-config 
# dependencies
RUN add-pkg  \
    apk-gtk3 \
    gtk4.0 \
    bash \
    bash-completion \
    ca-certificates \
    cmake \
    cairo \
    clutter-gst \
    clutter-gtk \
    curl \
    dconf \
    g++ \
    gcc \
    gcompat \
    git \
    gjs \
    glib \
    gnome \
    gobject-introspection \
    graphene \
    gst-plugins-good-gtk \
    gstreamer \
    gtksourceview \
    libadwaita \
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
    rsync \
    socat \
    sudo \
    tar \
    webkit2gtk-5.0 \
    wget \
    vim 

RUN \
    git clone https://github.com/daniruiz/flat-remix \
    && mkdir -p /usr/share/icons/ \
    && rsync -av --progress flat-remix/Flat-Remix-Green-Dark /usr/share/icons/ \
    && gtk-update-icon-cache /usr/share/icons/Flat-Remix-Green-Dark/ \
    # Cleanup.
    && rm -rf /tmp/* /tmp/.[!.]*

# Install PRO Dark XFCE theme
RUN \
    git clone https://github.com/paullinuxthemer/PRO-Dark-XFCE-Edition.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'PRO-Dark-XFCE-Edition/PRO-dark-XFCE-edition II' /usr/share/themes/ \
    # Cleanup.
    && rm -rf /tmp/* /tmp/.[!.]*

# Mc-OS transparent theme
RUN \
    git clone https://github.com/paullinuxthemer/Mc-OS-themes.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'Mc-OS-themes/Mc-OS-Transparent' /usr/share/themes/ \
    # Cleanup.
    && rm -rf /tmp/* /tmp/.[!.]*
    

FROM base as broadway-proxy
COPY ./startapp.sh /startapp.sh
COPY ./src /home/app/src
COPY ./package.json /home/app/package.json 
COPY ./tsconfig.json /home/app/tsconfig.json
COPY ./esbuild.mjs /home/app/esbuild.mjs
WORKDIR /home/app
RUN  \ 
    npm i -g yarn \
    typescript &&\
    chmod +x /startapp.sh &&\
    add-pkg gtk4.0-demo
CMD [ "/startapp.sh" ]
