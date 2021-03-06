#!/bin/bash

cd dist
git init
git config user.name "Simonbaumann"
git config user.email "simonbaumann20@gmail.com"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages > /dev/null 2>&1