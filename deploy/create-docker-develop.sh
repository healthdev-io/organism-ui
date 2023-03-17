#!/bin/bash
docker rm -f organism-ui
docker rmi -f s4s/organism-ui

docker build -t s4s/organism-ui .
docker run --name organism-ui -d -p 4213:80 s4s/organism-ui
