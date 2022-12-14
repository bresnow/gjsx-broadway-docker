ARG ALPINE_VERSION=3.16

FROM alpine:${ALPINE_VERSION} as base
ENV HOME=/home/app \
    GDK_BACKEND=broadway \  
    BROADWAY_DISPLAY=:5 \
    XDG_RUNTIME_DIR=/home \
    GLIBC_VERSION=3.5

COPY ./_docker/bin /usr/bin/
RUN  \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/main" > /etc/apk/repositories; \
    echo "https://dl-cdn.alpinelinux.org/alpine/v3.16/community" >> /etc/apk/repositories; \
    chmod +x -R /usr/bin/;

FROM base as gtk_deps
WORKDIR /tmp
# Copy helpers.
COPY ./_compiled /stash/_compiled
COPY ./assets /stash/assets

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
    gnome-apps-extra; 
    # install-glibc;

FROM gtk_deps as gjsx-gtk4

WORKDIR /home/app

COPY --from=gtk_deps /stash/_compiled _compiled
COPY --from=gtk_deps /stash/assets assets

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



FROM base as build
COPY ./broadway-proxy /app
WORKDIR /app
# nodejs environment
RUN \
    addpkg nodejs npm;\
    npm i -g yarn; \
    yarn; yarn build;

FROM build as proxy-server
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/
COPY --from=build /app/server/index.js /app/index.js
ENV NODE_ENV=production
CMD ["node", "/app/index.js"]

FROM proxy-server as dev-proxy-server
COPY --from=build /app /app

ENV NODE_ENV=development

RUN npm i -g nodemon

CMD ["nodemon", "/app/server/index.js", "--watch", "/app/server/index.js"]

FROM build as watch-dev
COPY --from=build /app /app

WORKDIR /app

CMD ["npm", "run", "watch"]


# https://us.download.nvidia.com/XFree86/Linux-x86_64/390.157/NVIDIA-Linux-x86_64-390.157.run
# NEWEST PRODUCTION https://us.download.nvidia.com/XFree86/Linux-x86_64/525.60.11/NVIDIA-Linux-x86_64-525.60.11.run
# RUN \
#     wget https://us.download.nvidia.com/XFree86/Linux-x86_64/${NVIDIA_VERSION}/NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run; \
#     bash NVIDIA-Linux-x86_64-${NVIDIA_VERSION}.run --extract-only; \
#     mv NVIDIA-Linux-x86_64-${NVIDIA_VERSION}/nvidia-installer /stash/; 


