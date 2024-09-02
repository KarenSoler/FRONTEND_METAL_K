@echo off
echo.

::Files to cat
git add .\.github\*
git add .\package.json
git add .\svelte.config.js
git add .\.env
git add .\.vscode

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
    set trailerList = " "
    goto trailer

:trailer
    set /p trailer= ^> 
    set cosa = cosa^ 
    set otraCosa = %cosa%%trailer%
    echo %otraCosa%
    @REM set trailerS = --trailer ^" 
    @REM set trailerE = ^" 
    @REM if "%trailer%"=="X" goto valpush
    @REM set trailerList = !%trailerS%%trailer%%trailerE%!
    @REM echo "%trailerList%"
    @REM ::echo "%trailerList% --trailer ^"%trailer%^""
    @REM if "%trailer%" NEQ "X" goto trailer

:valpush
    git commit -q -m "%commit%" %trailerList%
    SET /p push= ^> Realizar push(Y/N):

    if "%push%"=="Y" goto push
    if "%push%"=="N" goto cancel

:push
    git push -q origin HEAD

:cancel
    cls
