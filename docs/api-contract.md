# API. Тема: Бронирование аудиторий

Базовый адрес: `http://localhost:5000`

## Таблица запросов

| Метод и путь | Тело | Успех | Ошибка |
| :--- | :--- | :--- | :--- |
| `GET /api/bookings` | — | 200, массив или [] | — |
| `GET /api/bookings/{id}` | — | 200, объект | 404 |
| `POST /api/bookings` | title, auditoriumId, description | 201, id, number, status: New | 400 |
| `PATCH /api/bookings/{id}/assignee` | assigneeUserId | 200 | 404 |
| `PATCH /api/bookings/{id}/status` | status | 200 | 404, 409 |

## Пример создания брони

Запрос:
```json
{
  "title": "Лекция по математике",
  "auditoriumId": 2,
  "description": "Поток ТРИС-2-23, 45 человек, нужен проектор"
}

Ответ 201:
{
  "id": 17,
  "number": "Б-104",
  "status": "New"
}
Клиент не присылает id, number, status и assigneeUserId. Их определяет сервер.

## Статусы

Только четыре кода: New, InProgress, Closed, Cancelled. Отмена — это статус Cancelled, не удаление строки.

