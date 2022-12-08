ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base-dependencies
WORKDIR /tmp
# Copy helpers.
COPY ./system/bin /usr/bin/
COPY ./_compiled /stash/_compiled
COPY ./assets /stash/assets
COPY ./proxyserver /stash/proxyserver
COPY ./package.json /stash/package.json 
RUN  \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories; \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories; \
    chmod +x -R /usr/bin/ ;


RUN addpkg  \
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
    gcompat \
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
    linux-headers \
    pango \
    make \
    mc \
    mesa \
    mesa-demos \
    meson \
    ninja \
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
    udev \
    vim \
    vlc \
    vte3 \
    xorg-server \
    xf86-input-libinput \
    xinit \
    xz
# nodejs environment
RUN \
    cd /stash; addpkg nodejs npm;\
    npm i -g yarn zx; \
    yarn; 

RUN \
    addpkg \
    supervisor \
    desktop-file-utils  \
    gtk4.0-demo \
    gnome-apps-extra 


# Install themes
ENV HOME=/home/app \
    GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5 \
    XDG_RUNTIME_DIR=/home \
    NVIDIA_VERSION=390.77 \
    GLIBC_VERSION=3.5
# https://us.download.nvidia.com/XFree86/Linux-x86_64/390.157/NVIDIA-Linux-x86_64-390.157.run
# NEWEST PRODUCTION https://us.download.nvidia.com/XFree86/Linux-x86_64/525.60.11/NVIDIA-Linux-x86_64-525.60.11.run
RUN \
    install-glibc; \
    wget https://us.download.nvidia.com/XFree86/Linux-x86_64/${NVIDIA_VERSION}/NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run; \
    bash NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run --extract-only; \
    mv NVIDIA-Linux-x86_64-${NVIDIA_VERSION}/nvidia-installer /stash/; 
RUN \
    git clone https://github.com/paullinuxthemer/Mc-OS-themes.git; \
    mkdir -p /usr/share/themes/; \
    rsync -av --progress 'Mc-OS-themes/McOS-CTLina-Mint-Dark' /usr/share/themes/; \
    rm -rf /tmp/* /tmp/.[!.]* ; \
    delpkg rsync

FROM base-dependencies as broadway-app

WORKDIR /home/app


COPY --from=base-dependencies /stash/_compiled _compiled
COPY --from=base-dependencies /stash/assets assets
COPY --from=base-dependencies /stash/proxyserver proxyserver
COPY --from=base-dependencies /stash/node_modules node_modules
COPY --from=base-dependencies /stash/package.json package.json 
COPY --from=base-dependencies /stash/nvidia-installer nvidia-installer 
COPY ./system/supervisord.conf /etc/
RUN \
    mkdir -p /var/log/gjsx;\
    export $(dbus-launch); \
    chmod +x nvidia-installer; 

ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]
