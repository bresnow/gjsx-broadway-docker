
FROM jlesage/baseimage:alpine-3.15-glibc as base
ARG ALPINE_VERSION=3.15
EXPOSE 8085

ENV GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5

RUN echo "http://dl-cdn.alpinelinux.org/alpine/v${ALPINE_VERSION}/main" > /etc/apk/repositories && \
    echo "http://dl-cdn.alpinelinux.org/alpine/v${ALPINE_VERSION}/community" >> /etc/apk/repositories

#gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev') \
RUN  \
    add-pkg pkgconf &&\
    ln -sf pkgconf /usr/bin/pkg-config 
# dependencies
RUN add-pkg bash \
    bash-completion \
    bash-doc \
    ca-certificates \
    cairo \
    curl \
    dconf \
    eudev \
    ffmpeg \
    ffmpeg-libs \
    fuse \
    g++ \
    gcc \
    gcompat \
    git \
    gjs \
    gnome \
    gobject-introspection \
    graphene \
    gtksourceview \
    libepoxy \
    libmediainfo \
    libstdc++ \
    libsoup \
    libxkbfile-dev \
    libx11-dev \
    pango \
    make \
    # mc \
    # mesa-dri-swrast \
    # mediainfo \
    nodejs \
    npm \
    python3 \
    py3-pip \
    rsync \
    # rtmpdump \
    # sassc \
    # screen \
    # sudo \
    # tar \
    # tar-doc \
    # tmux \
    # unzip \
    # util-linux \
    webkit2gtk \
    wget \
    vim 


# Install PRO Dark XFCE theme


RUN \
    git clone https://github.com/paullinuxthemer/PRO-Dark-XFCE-Edition.git \
    && mkdir -p /usr/share/themes/ \
    && rsync -av --progress 'PRO-Dark-XFCE-Edition/PRO-dark-XFCE-edition II' /usr/share/themes/ \
    # Cleanup.
    && rm -rf /tmp/* /tmp/.[!.]*

FROM base as broadway-proxy
COPY ./startapp.sh /startapp.sh
COPY ./src /config/app/src
COPY ./package.json /config/app/package.json 
COPY ./tsconfig.json /config/app/tsconfig.json
RUN  \ 
    npm i -g yarn typescript 

