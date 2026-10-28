# Практическая №2 — маршрутизация и файловая структура Next.js 16

**Campus College** — полноценный демонстрационный портал колледжа с публичной частью, личным кабинетом и динамическими страницами курсов. Реализован на TypeScript + Next.js App Router. Стили — обычный CSS, внешние UI-библиотеки не нужны.

## Запуск

Требуется Node.js >= 20.9 (рекомендуется Node.js 22 или новее).

```bash
npm install
npm run dev
```

Откройте http://localhost:3000. Проверка сборки и качества кода:

```bash
npm run build
npm run lint
npm run typecheck
```

## Соответствие заданию

| Условие | Выполнено |
|---|---|
| Папки `(public)` и `(portal)` | Да: `src/app/(public)` и `src/app/(portal)` |
| Публичные `/`, `/about`, `/courses` | Да |
| Кабинет `/portal/dashboard`, `/portal/grades`, `/portal/schedule` | Да |
| Разные layouts | Публичный header + «Войти»; кабинет с боковой навигацией без «Войти» |
| Данные трёх курсов | `src/data/courses.ts`: id, title, type (`lecture`/`practice`), дополнительные поля |
| Динамический `/courses/[id]` | Асинхронная страница с `await params` (Next.js 16) |
| `generateStaticParams()` | Возвращает ровно `{id:'1'}`, `{id:'2'}`, `{id:'3'}` |
| Отсутствующий курс | `notFound()` + `src/app/(public)/courses/[id]/not-found.tsx` |

Пункт «Войти» открывает `/login` — это **демонстрационная страница**, не настоящая авторизация. Личный кабинет содержит демонстрационные данные студентов, оценок и расписания.

## Структура

```text
college-portal/
├── src/
│   ├── data/courses.ts
│   └── app/
│       ├── layout.tsx                # только html, body и общие стили
│       ├── globals.css
│       ├── (public)/
│       │   ├── layout.tsx           # публичная шапка, «Войти»
│       │   ├── page.tsx             # /
│       │   ├── about/page.tsx       # /about
│       │   ├── login/page.tsx       # /login (демо)
│       │   └── courses/
│       │       ├── page.tsx         # /courses
│       │       └── [id]/
│       │           ├── page.tsx     # /courses/1, /2, /3
│       │           └── not-found.tsx
│       └── (portal)/
│           ├── layout.tsx          # сайдбар кабинета
│           └── portal/
│               ├── dashboard/page.tsx
│               ├── grades/page.tsx
│               └── schedule/page.tsx
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

## Проверка вручную

1. Откройте `/about`: видна шапка, нет бокового меню.
2. Откройте `/portal/grades`: видна навигация «Обзор / Оценки / Расписание», нет кнопки «Войти».
3. Откройте `/courses/1`, `/courses/2`, `/courses/3`: страницы содержат данные соответствующих курсов.
4. Откройте `/courses/999`: получите HTTP 404 и текст «Такого курса не существует».
5. Выполните `npm run build`: все три страницы курса должны быть предварительно сгенерированы.

В коде нет API-ключей, базы данных и необходимости конфигурировать `.env`.
