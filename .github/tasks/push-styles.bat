@echo off
echo.
::Files to catch changes
git add .\src\app.sass
git add .\src\lib\styles\*
git add .\src\lib\fonts\* 

git status -s 

echo .
SET /p confirm= ^> Realizar commit(Y/N):

if "%confirm%"=="Y" goto commit
if "%confirm%"=="N" goto cancel

:commit
    set /p commit=^>Nombre del commit:
    echo.
    git commit -m "%commit%"
    SET /p push= ^> Realizar push(Y/N):

    if "%push%"=="Y" goto push
    if "%push%"=="N" goto cancel

:push
    git push origin HEAD

:cancel
