# API. Тема: Заявки на анализ рекламной кампании

Базовый адрес: `http://localhost:5000`

## Таблица запросов

| Метод и путь | Тело | Успех | Ошибка |
| :--- | :--- | :--- | :--- |
| `GET /api/analysis-requests` | — | 200, массив или [] | — |
| `GET /api/analysis-requests/{id}` | — | 200, объект | 404 |
| `POST /api/analysis-requests` | title, campaignId, description | 201, id, number, status: New | 400 |
| `PATCH /api/analysis-requests/{id}/assignee` | assigneeUserId | 200 | 404 |
| `PATCH /api/analysis-requests/{id}/status` | status | 200 | 404, 409 |

## Пример создания заявки

Запрос:
```
{
  "title": "Анализ эффективности баннерной рекламы",
  "campaignId": 2,
  "description": "Проверить CTR и конверсию за сентябрь 2026"
}
```

Ответ 201:
```
{
  "id": 17,
  "number": "А-104",
  "status": "New"
}
```
Клиент не присылает id, number, status и assigneeUserId. Их определяет сервер.

## Статусы

Только четыре кода: New, InProgress, Closed, Cancelled. Отмена — это статус Cancelled, не удаление строки.