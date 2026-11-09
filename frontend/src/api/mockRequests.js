const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let nextId = 3

let mockItems = [
  { id: 1, number: 'А-101', title: 'Анализ баннерной рекламы', campaignId: 2, description: 'Проверить CTR за сентябрь', status: 'New' },
  { id: 2, number: 'А-102', title: 'Анализ контекстной рекламы', campaignId: 1, description: 'Оценить конверсию', status: 'InProgress' }
]

export async function mockGetRequests() {
  await delay(500)
  return { ok: true, status: 200, data: mockItems }
}

export async function mockCreateRequest(body) {
  await delay(500)

  const title = (body.title || '').trim()
  if (title.length < 5 || title.length > 80) {
    return { ok: false, status: 400, data: { message: 'Тема: от 5 до 80 символов' } }
  }

  if (body.force500) {
    return { ok: false, status: 500, data: { message: 'Сервер не смог обработать запрос' } }
  }

  const id = nextId++
  const created = {
    id,
    number: `REQ-${id}`,
    title,
    campaignId: body.campaignId,
    description: body.description,
    status: 'New'
  }
  mockItems.push(created)
  return { ok: true, status: 201, data: created }
}