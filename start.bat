@echo off
echo Starting Samarth Tiwari Portfolio Development Server...

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Start development server
echo Starting development server...
echo.
echo 🚀 Portfolio will open at: http://localhost:4200
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start