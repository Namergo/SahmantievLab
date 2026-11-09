import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'А-101', title: 'Анализ баннерной рекламы', campaignId: 2, description: 'Проверить CTR за сентябрь', status: 'New' },
  { id: 2, number: 'А-102', title: 'Анализ контекстной рекламы', campaignId: 1, description: 'Оценить конверсию', status: 'InProgress' }
])

export const nextId = ref(3)

export function addItem({ title, campaignId, description }) {
  const id = nextId.value++
  items.value.push({
    id,
    number: `TMP-${id}`,
    title,
    campaignId,
    description,
    status: 'New'
  })
}