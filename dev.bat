@echo off
:: ============================================================
:: dev.bat — Local Development Launcher
:: Double-click this file to start the Vite dev server and
:: open the portfolio in your default browser.
:: ============================================================

:: Navigate to the folder where this .bat lives (project root)
cd /d "%~dp0"

:: Check that Node is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Check that dependencies are installed
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Running npm install first...
    npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
)

:: Open browser after a short delay (Vite needs a moment to start)
echo [INFO] Starting Vite dev server...
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5173"

:: Start Vite (blocks until Ctrl+C)
npm run dev

pause
