# CRM System

CRM System - это современное веб-приложение, разработанное с использованием Nuxt.js, Tailwind CSS и Appwrite. Оно предназначено для эффективного управления взаимоотношениями с клиентами и заказами.

## Описание

Эта CRM-система предоставляет удобный интерфейс для управления сделками, клиентами и задачами. Она включает в себя канбан-доску для визуализации воронки продаж, инструменты управления клиентами и аутентификацию пользователей для безопасного доступа.

## Основные возможности

1. **Канбан-доска:** Визуализируйте и управляйте сделками на разных этапах с помощью канбан-доски с возможностью перетаскивания.
2. **Управление клиентами:** Храните и управляйте информацией о клиентах, включая контактные данные и источники.
3. **Управление сделками:** Создавайте, обновляйте и отслеживайте сделки с такими данными, как название, цена и статус.
4. **Аутентификация пользователей:** Защищенные учетные записи пользователей с функциями входа и регистрации.
5. **Интеграция Vue Query:** Эффективная загрузка и кэширование данных с использованием Vue Query.
6. **Стилизация Tailwind CSS:** Современный и адаптивный дизайн с Tailwind CSS.
7. **Appwrite Backend:** Использование Appwrite для работы с БД, аутентификации и хранения данных.
8. **Обновления в реальном времени:** Vue Query обеспечивает автоматическое обновление данных в реальном времени.

## Используемые технологии

- Nuxt.js
- Vue.js
- Pinia
- Vue Query
- Appwrite
- Shadcn-vue
- Tailwind CSS

## Структура проекта

```bash
├── .nuxt/                # Сгенерированные Nuxt.js файлы
├── .output/public/       # Скомпилированные статические файлы для деплоя
├── .vscode/              # Конфигурация VS Code
│   └── settings.json     # Настройки редактора для Tailwind CSS
├── assets/               # Статические ресурсы (CSS)
│   └── css/
│       └── tailwind.css  # Базовые стили Tailwind CSS
├── components/           # Vue компоненты
│   ├── kanban/           # Компоненты канбан-доски
│   │   ├── slideover/    # Компоненты для slideover-а с деталями сделки
│   │   │   ├── Comments.vue       # Компонент для отображения и добавления комментариев
│   │   │   ├── Header.vue         # Компонент заголовка slideover-а
│   │   │   ├── Label.vue          # Компонент для отображения меток (label)
│   │   │   ├── Slideover.vue      # Компонент slideover-а
│   │   │   ├── useCommentsByDeal.ts # Composition API для получения комментариев по сделке
│   │   │   └── useCreateComment.ts  # Composition API для создания комментария
│   │   ├── CreateDeal.vue       # Компонент для создания новой сделки
│   │   ├── generate-gradient.ts # Функция для генерации градиента для колонок канбана
│   │   ├── kanban.data.ts       # Данные для канбан-доски (начальные колонки)
│   │   ├── kanban.types.ts      # TypeScript типы для канбан-доски
│   │   └── useKanbanQuery.ts    # Composition API для запроса данных канбан-доски
│   ├── layout/            # Компоненты для структуры страницы
│   │   ├── Loader.vue         # Компонент загрузчика
│   │   ├── menu.data.ts       # Данные для меню
│   │   ├── Menu.vue           # Компонент меню
│   │   └── Sidebar.vue        # Компонент боковой панели
│   └── ui/                # UI компоненты (shadcn-vue)
│       ├── badge/           # Компоненты бейджей
│       ├── button/          # Компоненты кнопок
│       ├── card/            # Компоненты карточек
│       ├── input/           # Компоненты инпутов
│       ├── skeleton/        # Компоненты скелетонов
│       └── table/           # Компоненты таблиц
├── layouts/               # Шаблоны страниц
│   └── default.vue        # Основной шаблон страницы
├── node_modules/          # Зависимости проекта
├── pages/                 # Страницы приложения
│   ├── customers/         # Страницы управления клиентами
│   │   ├── edit/          # Страница редактирования клиента
│   │   │   └── [id].vue   # Страница редактирования клиента по ID
│   │   └── index.vue      # Страница списка клиентов
│   ├── feedback.vue       # Страница обратной связи
│   ├── help.vue           # Страница помощи
│   ├── index.vue          # Главная страница (канбан-доска)
│   ├── login.vue          # Страница входа
│   ├── orders.vue         # Страница заказов
│   ├── payments.vue       # Страница платежей
│   ├── products.vue       # Страница продуктов
│   └── settings.vue       # Страница настроек
├── plugins/               # Плагины Nuxt.js
│   └── vue-query.ts       # Плагин для интеграции Vue Query
├── public/                # Статические файлы
│   ├── favicon.ico        # Favicon
│   ├── loader.svg         # Изображение загрузчика
│   ├── logo.svg           # Логотип
│   └── robots.txt         # Файл robots.txt
├── server/                # Backend-логика (возможно)
│   └── tsconfig.json      # Конфигурация TypeScript для backend-части
├── store/                 # Состояние приложения (Pinia)
│   ├── auth.store.ts      # Хранилище для управления аутентификацией
│   └── deal-slide.store.ts # Хранилище для управления состоянием slideover-а сделки
├── types/                 # TypeScript типы
│   └── deals.types.ts     # TypeScript типы для работы со сделками
├── utils/                 # Вспомогательные функции
│   ├── appwrite.ts        # Инициализация и экспорт Appwrite SDK
│   ├── convertCurrency.ts # Функция для форматирования валюты
│   └── index.ts           # Вспомогательные функции общего назначения
├── .gitignore             # Файл .gitignore
├── app.constants.ts       # Константы приложения (ID Appwrite, коллекций и т.д.)
├── app.vue                # Главный компонент приложения
├── components.json        # Конфигурация Shadcn Vue
├── nuxt.config.ts         # Основной файл конфигурации Nuxt.js
├── package.json           # Файл с информацией о проекте и зависимостях
├── README.md              # Файл с описанием проекта
├── tailwind.config.js     # Конфигурация Tailwind CSS
└── tsconfig.json          # Конфигурация TypeScript
```

## Настройка

1.  Клонируйте репозиторий:

```bash
git clone <URL_репозитория>
```

2.  Установите зависимости:

```bash
npm install  # или pnpm install или yarn install или bun install
```

3.  Настройте Appwrite:

1) Создайте проект Appwrite и базу данных.
2) Обновите файл `app.constants.ts`, указав свой ID проекта Appwrite, ID базы данных, ID коллекций и ID хранилища:

```typescript
export const APP_WRITE_ID = "ВАШ_APPWRITE_PROJECT_ID";
export const DB_ID = "ВАШ_APPWRITE_DATABASE_ID";
export const COLLECTION_DEALS = "ВАШ_APPWRITE_DEALS_COLLECTION_ID";
export const COLLECTION_CUSTOMERS = "ВАШ_APPWRITE_CUSTOMERS_COLLECTION_ID";
export const COLLECTION_COMMENTS = "ВАШ_APPWRITE_COMMENTS_COLLECTION_ID";
export const STORAGE_ID = "ВАШ_APPWRITE_STORAGE_ID";
```

4.  Запуск приложения

- Запустите сервер разработки:

```bash
npm run dev  # или yarn dev
```

- Откройте приложение в браузере по адресу `http://localhost:3000`.

## Production

Чтобы собрать приложение для production:

```bash
npm run build # или yarn build
```

## Автор

Ivan Kalugin
Телеграмм: https://t.me/Ivan_Anatolievich_Kalugin

## Лицензия

**MIT License**
Этот проект лицензирован в соответствии с условиями лицензии MIT. Смотрите файл [LICENSE](LICENSE) для получения подробной информации.
