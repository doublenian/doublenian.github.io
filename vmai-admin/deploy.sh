#!/bin/bash

npm run build

rsync -avzP -e 'ssh -p 2000' --delete dist/* root@148.70.75.19:/home/vcan-web/vmai-admin/
