#!/bin/bash

# Step 0. get the files
git clone https://github.com/kris-classes/restart.git
cd restart
shopt -s extglob # revisit this for Window OS
rm -r !(react_day_6)

# Step 1. npm install
cd react_day_6
npm install
npm install

# Step 2. npm build
npm run build

# Step 3. move folder to where you want

# Step 4. install serve package to deploy React locally
npm install -g serve

# Step 5. install Python packages with Pip
cd backend
pip install -r requirements.txt

# Step 5. start both Uvicorn and Npm Serve
cd ../../..
chmod u+x frontend.sh
chmod u+x backend.sh
./frontend.sh & ./backend.sh && fg