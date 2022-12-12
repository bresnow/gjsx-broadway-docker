ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base
ENV HOME=/home/app \
    GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5 \
    XDG_RUNTIME_DIR=/home \
    GLIBC_VERSION=3.5

FROM base as gtk_deps
WORKDIR /tmp
# Copy helpers.
COPY ./_docker/bin /usr/bin/
COPY ./_compiled /stash/_compiled
COPY ./assets /stash/assets
RUN  \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories; \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories; \
    chmod +x -R /usr/bin/ ;

# Gnome libs
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

# extras gtk
RUN \
    addpkg \
    supervisor \
    desktop-file-utils  \
    gtk4.0-demo \
    gnome-apps-extra; \
    install-glibc;

FROM gtk_deps as gjsx-app

WORKDIR /home/app

COPY --from=base-dependencies /stash/_compiled _compiled
COPY --from=base-dependencies /stash/assets assets

# COPY --from=base-dependencies /stash/nvidia-installer nvidia-installer 
# Install themes
RUN \
    git clone https://github.com/paullinuxthemer/Mc-OS-themes.git; \
    mkdir -p /usr/share/themes/; \
    rsync -av --progress 'Mc-OS-themes/McOS-CTLina-Mint-Dark' /usr/share/themes/; \
    rm -rf /tmp/* /tmp/.[!.]* ; \
    delpkg rsync

COPY ./_docker/supervisord.conf /etc/
RUN \
    mkdir -p /var/log/gjsx;\
    export $(dbus-launch); 

ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]



FROM base as node_deps
COPY broadway-proxy/_compiled /stash/_compiled
COPY broadway-proxy/server/index.js /stash/index.js
COPY broadway-proxy/package.json /stash/package.json
# nodejs environment
RUN \
    cd /stash; addpkg nodejs npm;\
    npm i -g yarn; \
    yarn; 

FROM node_deps as proxy-server
COPY --from=node_deps /stash/_compiled /app/_compiled
COPY --from=node_deps /stash/node_modules /app/node_modules
COPY --from=node_deps /stash/package.json /app/package.json
COPY --from=node_deps /stash/index.js /app/index.js
ENV NODE_ENV=production
CMD ["node", "/app/index.js"]

FROM proxy-server as dev-proxy-server

ENV PORT=8081
ENV NODE_ENV=development

RUN npm i -g nodemon

CMD ["nodemon", "/app/index.js", "--watch", "/app/index.js"]




# https://us.download.nvidia.com/XFree86/Linux-x86_64/390.157/NVIDIA-Linux-x86_64-390.157.run
# NEWEST PRODUCTION https://us.download.nvidia.com/XFree86/Linux-x86_64/525.60.11/NVIDIA-Linux-x86_64-525.60.11.run
# RUN \
#     wget https://us.download.nvidia.com/XFree86/Linux-x86_64/${NVIDIA_VERSION}/NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run; \
#     bash NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run --extract-only; \
#     mv NVIDIA-Linux-x86_64-${NVIDIA_VERSION}/nvidia-installer /stash/; 


