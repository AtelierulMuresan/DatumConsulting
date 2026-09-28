@echo off
cd /d "%~dp0"
echo.
echo Datum Consulting - local preview server
echo ----------------------------------------
echo On this PC:    http://localhost:8000
echo On your phone: http://YOUR-PC-IP:8000  (use the IPv4 address below)
echo.
ipconfig | findstr /C:"IPv4"
echo.
echo Press Ctrl+C to stop.
echo.
python -m http.server 8000 --bind 0.0.0.0 || py -m http.server 8000 --bind 0.0.0.0
pause
