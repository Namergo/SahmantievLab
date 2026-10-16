# Матрица требований. Тема: Заявки на анализ рекламной кампании

| Требование ЛР1 | Поле или сущность | Запрос | Критерий |
| :--- | :--- | :--- | :--- |
| Маркетолог создаёт заявку | AnalysisRequest, title, campaignId, description | POST /api/analysis-requests | 1 |
| Руководитель назначает аналитика | assigneeUserId | PATCH /api/analysis-requests/{id}/assignee | 2 |
| Аналитик переводит в работу | status | PATCH /api/analysis-requests/{id}/status | 3 |