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

# Install themes
RUN \
    git clone https://github.com/paullinuxthemer/Mc-OS-themes.git; \
    mkdir -p /usr/share/themes/; \
    rsync -av --progress 'Mc-OS-themes/McOS-CTLina-Mint-Dark' /usr/share/themes/; \
    rm -rf /tmp/* /tmp/.[!.]* ; \
    delpkg rsync

FROM gtk_deps as gjsx-gtk4

WORKDIR /home/app
COPY ./gi_modules/_compiled _compiled
COPY ./_docker/supervisord.conf /etc/
RUN \
    mkdir -p /var/log/gjsx; export $(dbus-launch);
ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisord.conf"]

FROM base as front-proxy
WORKDIR /home/proxy
COPY ./broadway-proxy .
# nodejs environment
RUN \
    addpkg nodejs npm;\
    npm i -g yarn nodemon; \
    yarn; yarn build;


CMD ["nodemon", "server/index.js" ,"--watch" ,"server/index.js"]

FROM front-proxy as remix-watch
COPY --from=front-proxy /home/proxy /home/proxy
CMD ["npm", "run", "watch"]



