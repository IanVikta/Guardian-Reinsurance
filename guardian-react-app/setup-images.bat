@echo off
echo ========================================
echo Guardian Re - Image Setup Script
echo ========================================
echo.

:: Create images directory
if not exist "public\images" (
    mkdir "public\images"
    echo Created public\images directory
) else (
    echo public\images directory already exists
)
echo.

:: Copy images
echo Copying images from Website folder...
echo.

copy "..\Website\new-year-reinsurance-1.png" "public\images\hero-1.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] hero-1.jpg) else (echo [FAILED] hero-1.jpg)

copy "..\Website\StockCake-Global hologram sphere_1749902749.jpg" "public\images\hero-2.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] hero-2.jpg) else (echo [FAILED] hero-2.jpg)

copy "..\Website\REinsurance-image--3.png" "public\images\hero-3.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] hero-3.jpg) else (echo [FAILED] hero-3.jpg)

copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_44379677.jpg" "public\images\analytics.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] analytics.jpg) else (echo [FAILED] analytics.jpg)

copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.42_766f72c2.jpg" "public\images\expertise.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] expertise.jpg) else (echo [FAILED] expertise.jpg)

copy "..\Website\guardian-feb-1.1.png" "public\images\treaty.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] treaty.jpg) else (echo [FAILED] treaty.jpg)

copy "..\Website\guardian-sm-work-.png" "public\images\facultative.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] facultative.jpg) else (echo [FAILED] facultative.jpg)

copy "..\Website\WhatsApp Image 2025-06-14 at 15.34.38_ba536711.jpg" "public\images\consultant.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] consultant.jpg) else (echo [FAILED] consultant.jpg)

copy "..\Website\IMG-20250614-WA0015.jpg" "public\images\treaty-discussion.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] treaty-discussion.jpg) else (echo [FAILED] treaty-discussion.jpg)

copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_0465ed25.jpg" "public\images\strategic-analysis.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] strategic-analysis.jpg) else (echo [FAILED] strategic-analysis.jpg)

copy "..\Website\WhatsApp Image 2025-06-14 at 16.59.43_30c2cfd7.jpg" "public\images\skyline.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] skyline.jpg) else (echo [FAILED] skyline.jpg)

copy "..\Website\New-year-reinsurance-2.png" "public\images\global-connectivity.jpg" >nul 2>&1
if %errorlevel% equ 0 (echo [OK] global-connectivity.jpg) else (echo [FAILED] global-connectivity.jpg)

echo.
echo ========================================
echo Image setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm install
echo 2. Run: npm start
echo.
pause
