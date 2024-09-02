@echo off
echo.

for /f %%i in ('git branch --show-current') do set lastBranch=%%i

if "%lastBranch%"=="u/config" goto general

SET /p confirm= ^> Sincronizar actual?(Y/N):

if "%confirm%"=="Y" goto current
if "%confirm%"=="N" goto general

:current
git stash push
git merge -m "Sync config" --quiet %lastBranch%

:general
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
echo .
echo Recuerda bajar los cambios del stash en cada rama 
pause
cls
    