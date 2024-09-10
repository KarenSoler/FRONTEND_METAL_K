@echo off
echo.

SET /p component= ^> Nombre del componente:

git switch -q u/logic
git branch -q c/%component%
git switch -q c/%component%
git merge -q --no-commit u/styles
git add .
git commit -m "Create %component%"