@echo off
echo.

::Files to catch changes
git pull origin u/components
git pull origin u/styles


echo .
SET /p confirm= ^> Realizar pull(Y/N):

if "%confirm%"=="Y" goto pull
if "%confirm%"=="N" goto cancel


:pull
    git pull origin u/components
    git pull origin u/styles

:cancel
