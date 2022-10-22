
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
    curl \
    dconf \
    #ffmpeg \
    #ffmpeg-libs \
    #fuse \
    g++ \
    gcc \
    #gcompat \
    git \
    gjs \
    glib \
    gnome \
    gobject-introspection \
    graphene \
    clutter-gtk \
    gtksourceview \
    libepoxy \
    libmediainfo \
    libstdc++ \
    libsoup \
    libxkbfile-dev \
    libx11-dev \
    pango \
    make \
    mc \
    # mesa-dri-swrast \
    # mediainfo \
    meson \
    ninja \
    nodejs \
    npm \
    python3 \
    py3-pip \
    rsync \
    # rtmpdump \
    # sassc \
    # screen \
    socat \
    #sudo \
    tar \
    # tmux \
    # unzip \
    # util-linux \
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

FROM base as broadway-proxy
COPY ./startapp.sh /startapp.sh
COPY ./src /home/app/src
COPY ./package.json /home/app/package.json 
COPY ./tsconfig.json /home/app/tsconfig.json
COPY ./esbuild.mjs /home/app/esbuild.mjs
RUN  \ 
    npm i -g yarn \
    typescript &&\
    chmod +x /startapp.sh
CMD [ "/startapp.sh" ]
