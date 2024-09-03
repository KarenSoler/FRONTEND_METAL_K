@echo off
echo.

for /f %%i in ('git branch --show-current') do set lastBranch=%%i

if "%lastBranch%"=="u/config" goto general

:current
git stash push
git merge -m "Sync config" --quiet u/config

:general
::u/styles
git switch --quiet u/styles
git stash push
git merge -m "Sync config" --quiet u/config 

::u/components
git switch --quiet u/logic
git stash push
git merge -m "Sync config" --quiet u/config 

::u/master
git switch --quiet master
git stash push
git merge -m "Sync config" --quiet u/config 

::return
git switch %lastBranch%

echo .
echo Recuerda bajar los cambios del stash en cada rama 
pause
cls
    