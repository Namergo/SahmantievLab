# Матрица требований. Тема: Бронирование аудиторий

| Требование ЛР1 | Поле или сущность | Запрос | Критерий |
| :--- | :--- | :--- | :--- |
| Преподаватель создаёт бронь | Booking, title, auditoriumId, description | POST /api/bookings | 1 |
| Диспетчер назначает ответственного | assigneeUserId | PATCH /api/bookings/{id}/assignee | 2 |
| Ответственный переводит в работу | status | PATCH /api/bookings/{id}/status | 3 |