@echo off

set /p branch= ^> Ir a:
set lastBranch = ""
if "%branch%"=="X" exit
if "%branch%" NEQ "X" goto go

:go
    for /f %%i in ('git branch --show-current') do set lastBranch=%%i
    git add .
    git stash push -q
    git checkout --quiet %branch%
    git merge --quiet --no-commit %lastBranch%
    git stash pop

