@echo off
echo.

:syncstyles
    git checkout  --quiet u/styles
    git stash push
    git merge  --quiet u/config
    git commit -m "Sync config"

:synccomponents
    git checkout  --quiet u/components
    git stash push
    git merge u/config
    git add .
    git commit  --quiet -m "Sync config"
    git checkout u/config
    