import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'А-101', title: 'Анализ баннерной рекламы', campaignId: 2, status: 'New' },
  { id: 2, number: 'А-102', title: 'Анализ контекстной рекламы', campaignId: 1, status: 'InProgress' }
])