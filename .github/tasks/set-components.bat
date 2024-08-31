@echo off
echo.

::Files to catch changes
git add .\\src\\lib\\components\\* 
git add .\\src\\lib\\jsons\\* 

git status -s 

echo .
SET /p confirm= ^> Realizar commit(Y/N):

if "%confirm%"=="Y" goto commit
if "%confirm%"=="N" goto cancel


:commit
    set /p commit=^>Nombre del commit:
    echo.

    echo Realizar trailer(N para terminar):
    goto: trailer

:trailer
    set /p trailer= ^> 
    echo %trailer%
    if "%trailer%"=="N" goto push
    if "%trailer%" NEQ "N" goto trailer
    set trailerList = %trailerList% --trailer "%trailer%"
    git commit -m "%commit%" %trailerList%

:valpush
    SET /p push= ^> Realizar push(Y/N):

    if "%push%"=="Y" goto push
    if "%push%"=="N" goto cancel

:push
    git push origin HEAD

:cancel
