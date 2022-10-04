
FROM jlesage/baseimage:alpine-3.15-glibc as build

COPY bin/startapp.sh /startapp.sh
RUN gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev' | grep -v '\-lang' | grep -v '\-doc') \
    add-pkg $gvfs_pkgs gnome apk-gtk3 gcc gjs libsoup webkit2gtk \
    gobject-introspection git wget vim dconf dub  \
    g++ make cairo gcompat py-pip python3 nodejs npm &&\
    npm i -g yarn

ENV GDK_BACKEND broadway
ENV BROADWAY_DISPLAY :5

COPY . /app
WORKDIR /app



FROM build as dev
WORKDIR /app
COPY --from=build /app /app
COPY bin/startapp.sh /startapp.sh
RUN add-pkg zsh \
    nautilus\
    midori \
    wget\
    terminator \
    vim \
    gedit &&\
    chmod +x ./bin/omy.sh &&\
    ./bin/omy.sh &&\
    echo "**** cleanup ****" && \
    rm -rf \
    /tmp/*


