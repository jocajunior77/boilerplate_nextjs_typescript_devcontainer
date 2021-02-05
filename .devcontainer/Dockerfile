FROM node:15.8.0-alpine3.10

RUN apk add git util-linux
USER node

ENV PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w:\[\033[00m\]\$(git branch 2>/dev/null | grep '^*' | colrm 1 2)\n\$ "
