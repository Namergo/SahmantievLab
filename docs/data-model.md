# Модель данных. Тема: Бронирование аудиторий

## Словарь проекта

| Термин курса | Термин моей темы |
| :--- | :--- |
| Ticket | Бронь (Booking) |
| Site | Аудитория (Auditorium) |
| User | Пользователь (User) |

## Сущности

### Booking (бронь аудитории) — главный объект

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| number | string | человеческий номер брони |
| title | string | заголовок (5–80 символов) |
| description | string | описание (10–500 символов) |
| status | string | New, InProgress, Closed, Cancelled |
| auditoriumId | int, FK → Auditorium.id | ссылка на аудиторию |
| createdByUserId | int, FK → User.id | кто создал |
| assigneeUserId | int, FK → User.id, nullable | кто ответственный |

### Auditorium (аудитория) — справочник

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| name | string | номер аудитории (например, «А-101») |

### User (пользователь)

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| id | int, PK | машинный ключ |
| fullName | string | ФИО или логин |
| role | string | Teacher, Dispatcher, Responsible |

## ER-диаграмма

```
[User] 1 ───< [Booking] >─── 1 [Auditorium]

[User] 1 ───< [Booking] (createdByUserId)
[User] 1 ───< [Booking] (assigneeUserId, nullable)
[Auditorium] 1 ───< [Booking] (auditoriumId)
```


Связи словами:
- одна аудитория — много броней;
- один пользователь создаёт много броней;
- один пользователь может быть назначен на много броней;
- у новой брони исполнитель может отсутствовать (assigneeUserId = null).

## Проверка 3НФ

Название аудитории хранится в сущности Auditorium один раз. Booking содержит только внешний ключ auditoriumId. При переименовании аудитории меняется одна строка в справочнике, поэтому текст названия не дублируется в бронях.