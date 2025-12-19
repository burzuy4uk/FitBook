# Лабораторна робота №2 — Структура застосунку FitBook

## 1) Декомпозиція на модулі (компоненти) та взаємодія

### 1.1. Загальна архітектура
FitBook реалізований як монорепозиторій, що складається з:
- `apps/web` — Frontend (Next.js + TypeScript)
- `apps/api` — Backend (NestJS + TypeScript)
- `packages/shared` — спільні типи/DTO/валідації, що використовуються web та api

### 1.2. Модулі Frontend (apps/web)
- **Pages/UI**: сторінки розкладу, деталей заняття, улюблених та “мої бронювання”.
- **Client State + Fetching**: отримання даних з API, кешування/оновлення UI стану.
- **Auth client (планово)**: збереження токена/сесії, передача заголовків авторизації (для ЛР4+).

### 1.3. Модулі Backend (apps/api)
- **Auth Module**: реєстрація/логін, ролі USER/ADMIN (планово).
- **Sessions Module**: робота з розкладом занять (читання для всіх, CRUD для ADMIN).
- **Bookings Module**: створення бронювання, список “мої бронювання”.
- **Favorites Module**: додавання/видалення улюблених занять, список “улюблені”.
- **Users Module**: дані користувача та зв’язки з бронюваннями/улюбленими.
- **Database layer**: доступ до даних через ORM/репозиторії (ЛР4).

### 1.4. Діаграма компонентів (Mermaid)
```mermaid
flowchart LR
  subgraph WEB[apps/web - Next.js]
    UI[UI Pages]
    FEData[Client State / Data Fetching]
  end

  subgraph API[apps/api - NestJS]
    Auth[Auth Module]
    Sessions[Sessions Module]
    Bookings[Bookings Module]
    Fav[Favorites Module]
    Users[Users Module]
    DB[(Database)]
  end

  subgraph SHARED[packages/shared]
    DTO[Shared Types/DTO]
  end

  UI --> FEData
  FEData -->|HTTP/JSON| Sessions
  FEData -->|HTTP/JSON| Bookings
  FEData -->|HTTP/JSON| Fav
  FEData -->|HTTP/JSON| Auth

  Auth --> Users
  Sessions --> DB
  Bookings --> DB
  Fav --> DB
  Users --> DB

  UI --- DTO
  FEData --- DTO
  Sessions --- DTO
  Bookings --- DTO
  Fav --- DTO
  Auth --- DTO
