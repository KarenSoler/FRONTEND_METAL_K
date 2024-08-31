@echo off
echo.

:syncstyles
    git checkout u/styles  --quiet
    git stash push
    git merge u/config -m "Sync config"   --quiet

:synccomponents
    git checkout u/components --quiet 
    git stash push
    git merge u/config -m "Sync config"  --quiet
    git checkout u/config
    