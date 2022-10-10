
FROM jlesage/baseimage:alpine-3.15-glibc  as base
EXPOSE 8085
RUN gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev' | grep -v '\-lang' | grep -v '\-doc') \
    add-pkg pkgconf &&\
    ln -sf pkgconf /usr/bin/pkg-config 

RUN add-pkg  $gvfs_pkgs gnome apk-gtk3 gcc gjs gtksourceview graphene libepoxy pango libsoup cairo gcompat webkit2gtk g++ \
    gobject-introspection git wget vim dconf libx11-dev libxkbfile-dev \
    yajl dub dmd \
    make py-pip python3 nodejs npm &&\
    npm i -g yarn

ENV GDK_BACKEND broadway  
ENV BROADWAY_DISPLAY :5


FROM base as node-gtk
COPY node-gtk/bin/startapp.sh /startapp.sh
COPY node-gtk /config/




FROM base as gjs
COPY gjs/bin/startapp.sh /startapp.sh
COPY gjs /config/

FROM gjs as gjs-dev
RUN add-pkg zsh socat terminator &&\
    chmod +x /config/bin/omy.sh &&\
    /config/bin/omy.sh