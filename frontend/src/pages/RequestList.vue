<script setup>
import { ref, onMounted } from 'vue'
import { getRequests } from '../api/requests.js'
import RequestTable from '../components/RequestTable.vue'

const screen = ref('loading')
const items = ref([])
const errorText = ref('')

async function load() {
  screen.value = 'loading'
  errorText.value = ''
  try {
    const data = await getRequests()
    items.value = data
    screen.value = data.length === 0 ? 'empty' : 'data'
  } catch (e) {
    errorText.value = e.message || 'Не удалось загрузить список'
    screen.value = 'error'
  }
}

onMounted(load)
</script>

<template>
  <section>
    <h2>Список заявок на анализ</h2>

    <p v-if="screen === 'loading'">Загрузка…</p>
    <p v-else-if="screen === 'empty'">Записей пока нет</p>
    <p v-else-if="screen === 'error'" class="error">{{ errorText }}</p>
    <RequestTable v-else :items="items" />
  </section>
</template>

<style scoped>
.error { color: red; }
</style>