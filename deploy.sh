#!/bin/bash

export AWS_ACCESS_KEY_ID="AKIA4732MNBQGCUUWE53"
export AWS_SECRET_ACCESS_KEY="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"
export AWS_BUCKET_NAME="medizona-testing-nuxt"
export AWS_CLOUDFRONT="E347TRPSZS22G"
export AWS_DEFAULT_REGION="us-east-2"
# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
