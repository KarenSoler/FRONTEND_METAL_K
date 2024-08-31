@echo off


echo Realizar trailer(N para terminar):


:trailer
    set /p trailer= ^> 
    echo %trailer%
    if "%trailer%"=="N" goto cancel
    if "%trailer%" NEQ "N" goto trailer
    set trailerList = "%trailerList% --trailer \"%trailer%\" "
    echo %trailerList%

:cancel
    echo :v
    echo %trailerList%