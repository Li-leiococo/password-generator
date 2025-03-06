#!/bin/bash

# Create project structure
echo "Creating project structure..."

mkdir -p backend/app
mkdir -p frontend/web/public
mkdir -p frontend/web/src/components
mkdir -p mobile/android
mkdir -p mobile/ios
mkdir -p desktop/electron/renderer
mkdir -p docs/design

# Create placeholder files to ensure Git tracks directories
touch backend/app/.gitkeep
touch frontend/web/public/.gitkeep
touch frontend/web/src/components/.gitkeep
touch mobile/android/.gitkeep
touch mobile/ios/.gitkeep
touch desktop/electron/renderer/.gitkeep
touch docs/design/.gitkeep

# Create common setup files
touch backend/requirements.txt
touch frontend/package.json
touch desktop/electron/package.json
touch README.md
touch LICENSE
touch docker-compose.yml
touch .gitignore

# Done
echo "Project structure created successfully."

# Reminder to initialize Git
echo "Run the following to commit your structure:"
echo "git add ."
echo "git commit -m 'Add full cross-platform project structure'"
echo "git push origin main"
