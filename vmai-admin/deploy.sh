#!/bin/bash

npm run build

rsync -avzP -e 'ssh -p 2000' --delete dist/* root@47.101.168.67:/home/vcan-web/vmai-admin/
