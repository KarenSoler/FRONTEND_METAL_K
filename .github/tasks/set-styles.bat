@echo off
echo.
::Files to catch changes
git add .\src\app.sass
git add .\src\lib\styles\*
git add .\src\lib\fonts\* 

git status -s

SET "trailerList= "

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
    set "trailerList=%trailerList% --trailer ^"%trailer%^""
    echo %trailerList%
    if "%trailer%" NEQ "X" goto trailer

:valpush
    git commit -q -m "%commit%" %trailerList%

    SET /p push= ^> Realizar push(Y/N):

    if "%push%"=="Y" goto push
    if "%push%"=="N" goto cancel

:push
    git push -q origin HEAD

:cancel
    cls