@echo off
echo.

::Files to catch changes
git fetch -a

echo .
SET /p branch= ^> Nombre de rama objetivo?:

SET /p confirm= ^> Actualizar components?(Y/N):

if "%confirm%"=="Y" goto pull
if "%confirm%"=="N" goto cancel

:pull
    git fetch -a
    git checkout u/config -q
    git pull origin u/config -q
    git checkout u/styles -q
    git pull origin u/styles -q
    git checkout u/components -q
    git pull origin u/components -q
    git checkout %branch% -q
    git merge u/styles
    git merge u/components

:cancel
