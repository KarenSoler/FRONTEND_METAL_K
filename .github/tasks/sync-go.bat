@echo off

set /p branch =^> Ir a:
set lastBranch = ""
if "%branch%"=="X" exit
if "%branch%" NEQ "X" goto go

:go
    for /f %%i in ('git branch --show-current') do set lastBranch=%%i
    echo %lastBranch%
    git add .
    git stash push
    git checkout --quiet %branch%
    git merge --quiet %lastBranch% -m "Come from %lastBranch%"
    git stash pop --index 0

