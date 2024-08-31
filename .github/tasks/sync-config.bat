@echo off
echo.

::u/styles
git checkout --quiet u/styles
git stash push
git merge -m "Sync config" --quiet u/config 

::u/components
git checkout --quiet u/components
git stash push
git merge -m "Sync config" --quiet u/config 

::u/master
git checkout --quiet master
git stash push
git merge -m "Sync config" --quiet u/config 

::return
git checkout u/config
pause
cls
    