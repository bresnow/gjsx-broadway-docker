#!/usr/bin/env bash

if [ -z "${PASSWORD}" ] || [ -z "${HASHED_PASSWORD}" ]; then
    AUTH="none"
    echo "starting with no password"
else
    AUTH="password"
fi

if [ -z ${PROXY_DOMAIN+x} ]; then
    PROXY_DOMAIN_ARG=""
else
    PROXY_DOMAIN_ARG="--proxy-domain=${PROXY_DOMAIN}"
fi

export SHELL=/bin/zsh

code-server \
    --bind-addr 0.0.0.0:${CODESERVER_PORT} \
    --user-data-dir /opt/vscode/data \
    --extensions-dir /opt/vscode/extensions \
    --disable-telemetry \
    --auth ${AUTH} \
    "${PROXY_DOMAIN_ARG}" \
    /home/app
