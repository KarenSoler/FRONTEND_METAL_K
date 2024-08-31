@echo off
echo.


SET "trailerList= "
set "trailerS=--trailer ^""
set "trailerE=^" "


::Files to cat
git add .\.github\*
git add .\package.json
git add .\svelte.config.js
git add .\.env

git status -s

:askcommit
    SET /p confirm= ^> Realizar commit(Y/N):

    if "%confirm%"=="Y" goto commit
    if "%confirm%"=="N" goto cancel
    if "%confirm%" NEQ "N" if "%confirm%" NEQ "N" echo "Opcion inesperada" && goto askcommit


:commit
    set /p commit=^>Nombre del commit:
    echo.
    echo Realizar trailer(X para terminar):
    goto trailer

:trailer
    set /p trailer= ^> 
    if "%trailer%"=="X" goto valpush
    set trailerList=%trailerList%%trailerS%%trailer%%trailerE%
    echo %trailerList%
    if "%trailer%" NEQ "X" goto trailer

:valpush
    git commit -m "%commit%" %trailerList%

    SET /p push= ^> Realizar push(Y/N):

    if "%push%"=="Y" goto push
    if "%push%"=="N" goto cancel

:push
    git push -q origin HEAD

:cancel
