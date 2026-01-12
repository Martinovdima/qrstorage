# QR Storage Platform

Веб-приложение для загрузки файлов, управления ими через личный кабинет и предоставления доступа по QR-коду с правами только на чтение.

## 🚀 Возможности (MVP)
- Регистрация и авторизация пользователей
- Личный кабинет
- Загрузка файлов (документы, изображения, видео, аудио)
- Просмотр файлов внутри платформы
- Генерация QR-кода для публичного read-only доступа
- Защита пользовательских данных

## 🛠️ Технологии
### Backend:
- Python
- FastAPI
- PostgreSQL (планируется)
- SQLAlchemy (планируется)

### Frontend:
- React (Vite)
- Axios
- Bootstrap

## 📦 Архитектура проекта

Frontend и backend разделены и взаимодействуют через REST API.

## ⚙️ Запуск проекта локально

### Backend:
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload

cd frontend
npm install
npm run dev
