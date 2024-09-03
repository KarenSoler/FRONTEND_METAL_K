@echo off
echo.

for /f %%i in ('git branch --show-current') do set lastBranch=%%i

if "%lastBranch%"=="u/styles" goto general

:current
git stash push
git merge -m "Sync styles" --quiet u/styles

:general
::u/master
git switch --quiet master
git stash push
git merge -m "Sync styles" --quiet u/styles

::return
git switch %lastBranch%
echo.
echo Recuerda bajar los cambios del stash en cada rama 
pause
cls
    