@echo off
git log --oneline -n5  

SET /p num= ^> A cual o cuantas(max 5) commit va a regresar:
if "%num%"== "1" goto backnum 
if "%num%"== "2" goto backnum 
if "%num%"== "3" goto backnum 
if "%num%"== "4" goto backnum 
if "%num%"== "5" goto backnum 
git reset --mixed %num%
goto push

:backnum
    git reset --mixed HEAD~%num%
    goto push

:push
    echo Enter para pushear
    pause
    git push origin HEAD --force

:cancel
    cls
