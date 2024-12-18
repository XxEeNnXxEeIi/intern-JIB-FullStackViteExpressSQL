@echo off

:: Get the current directory where the batch file is located
set CURRENT_DIR=%~dp0

:: Start XAMPP MySQL Service (if it's not running already)
echo Starting MySQL service...
start "" "C:\xampp\xampp-control.exe" --start MySQL
timeout /t 5 /nobreak

:: Run MySQL commands to create the database and run dbInit.sql
:: ตำแหน่งติดตั้ง xampp ดั้งเดิมไม่แนะนำให้ติดตั้งไดร์ฟ C 
echo Running MySQL setup...
"D:\xampp\mysql\bin\mysql.exe" -u root -p -e "CREATE DATABASE IF NOT EXISTS tanachod_school; USE tanachod_school; source '%CURRENT_DIR%dbInit.sql';"

pause
