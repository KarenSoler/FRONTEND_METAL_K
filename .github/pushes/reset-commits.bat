@echo off
git log --oneline -n5  

SET /p num= ^> A cual commit va a regresar:
git reset --mixed %num%

SET /p push= ^> Eliminar de origen(Y/N):

if "%push%"=="Y" goto push
if "%push%"=="N" goto cancel

:push
git push origin HEAD --force

:cancel
