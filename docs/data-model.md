# Модель данных. Тема: Заявки на анализ рекламной кампании

## Словарь проекта

| Термин курса | Термин моей темы |
| :--- | :--- |
| Ticket | Заявка на анализ (AnalysisRequest) |
| Site | Рекламная кампания (Campaign) |
| User | Пользователь (User) |

## Сущности

### AnalysisRequest (заявка на анализ) — главный объект

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| number | string | человеческий номер заявки |
| title | string | заголовок (5–80 символов) |
| description | string | описание (10–500 символов) |
| status | string | New, InProgress, Closed, Cancelled |
| campaignId | int, FK → Campaign.id | ссылка на кампанию |
| createdByUserId | int, FK → User.id | кто создал |
| assigneeUserId | int, FK → User.id, nullable | кто назначенный аналитик |

### Campaign (рекламная кампания) — справочник

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| name | string | название кампании |

### User (пользователь)

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| fullName | string | ФИО или логин |
| role | string | Marketer, AnalyticsLead, Analyst |

## ER-диаграмма

```
[User] 1 ───< [AnalysisRequest] >─── 1 [Campaign]

[User] 1 ───< [AnalysisRequest] (createdByUserId)
[User] 1 ───< [AnalysisRequest] (assigneeUserId, nullable)
[Campaign] 1 ───< [AnalysisRequest] (campaignId)
```

Связи словами:
- одна кампания — много заявок на анализ;
- один пользователь создаёт много заявок;
- один пользователь может быть назначен на много заявок;
- у новой заявки исполнитель может отсутствовать (assigneeUserId = null).

## Проверка 3НФ

Название кампании хранится в сущности Campaign один раз. AnalysisRequest содержит только внешний ключ campaignId. При переименовании кампании меняется одна строка в справочнике, поэтому текст названия не дублируется в заявках.