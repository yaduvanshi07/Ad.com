@echo off
echo ========================================
echo    Ad.com Project Setup Script
echo ========================================
echo.

echo Installing root dependencies...
npm install

echo.
echo Installing backend dependencies...
cd backend
npm install
cd ..

echo.
echo Installing frontend dependencies...
cd frontend
npm install
cd ..

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo To run the project:
echo 1. Start backend: npm run backend
echo 2. Start frontend: npm run frontend
echo 3. Or run both: npm run dev
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
pause
