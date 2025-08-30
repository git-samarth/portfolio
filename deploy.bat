@echo off
echo Building Samarth Tiwari Portfolio for Production...

REM Install dependencies
echo Installing dependencies...
call npm install

REM Build for production
echo Building for production...
call npm run build:prod

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completed successfully!
    echo.
    echo 📁 Build output is in: dist/samarth-portfolio/
    echo.
    echo 🚀 Ready for Cloudflare Pages deployment!
    echo.
    echo Next steps:
    echo 1. Connect your Git repository to Cloudflare Pages
    echo 2. Set build command: npm run build:prod
    echo 3. Set build output directory: dist/samarth-portfolio
    echo 4. Deploy!
    echo.
) else (
    echo.
    echo ❌ Build failed! Please check the errors above.
    echo.
)

pause