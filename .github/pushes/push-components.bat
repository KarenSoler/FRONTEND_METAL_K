@echo off
echo.
git add .\\src\\lib\\components\\* 
git status -s 
echo .
color F
SET /p confirm= ^> Realizar commit(Y/N):

if "%confirm%"=="Y" goto commit
if "%confirm%"=="N" goto cancel


:commit
set /p commit=^>Nombre del commit 
echo.
git commit -m "%commit%"
SET /p push= ^> Realizar commit(Y/N):

if "%push%"=="Y" goto push
if "%push%"=="N" goto cancel

:push
git push origin HEAD

:cancel
