<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createRequest } from '../api/requests.js'

const router = useRouter()

const form = ref({
  title: '',
  campaignId: 0,
  description: ''
})

const errors = ref({ title: '', campaignId: '', description: '' })
const serverError = ref('')
const isSubmitting = ref(false)

async function onCreate() {
  if (isSubmitting.value) return

  errors.value = { title: '', campaignId: '', description: '' }
  serverError.value = ''

  const title = form.value.title.trim()
  const description = form.value.description.trim()
  const campaignId = form.value.campaignId

  let hasError = false
  if (title.length < 5 || title.length > 80) {
    errors.value.title = 'Тема: от 5 до 80 символов'
    hasError = true
  }
  if (!Number.isInteger(campaignId) || campaignId <= 0) {
    errors.value.campaignId = 'ID кампании: целое число больше 0'
    hasError = true
  }
  if (description.length < 10 || description.length > 500) {
    errors.value.description = 'Описание: от 10 до 500 символов'
    hasError = true
  }
  if (hasError) return

  isSubmitting.value = true
  try {
    await createRequest({ title, campaignId, description })
    form.value = { title: '', campaignId: 0, description: '' }
    router.push('/')
  } catch (e) {
    if (e.status === 400) serverError.value = 'Проверьте поля'
    else if (e.status === 500) serverError.value = 'Сервер не смог обработать запрос'
    else serverError.value = 'Нет связи с сервером'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section>
    <h2>Создать заявку на анализ</h2>
    <form @submit.prevent="onCreate">
      <label for="title">Тема, 5–80 символов</label>
      <input id="title" v-model="form.title" autofocus>
      <p v-if="errors.title" class="error">{{ errors.title }}</p>

      <label for="campaignId">ID кампании</label>
      <input id="campaignId" type="number" v-model.number="form.campaignId">
      <p v-if="errors.campaignId" class="error">{{ errors.campaignId }}</p>

      <label for="description">Описание, 10–500 символов</label>
      <textarea id="description" v-model="form.description"></textarea>
      <p v-if="errors.description" class="error">{{ errors.description }}</p>

      <p v-if="serverError" class="error">{{ serverError }}</p>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Создаём…' : 'Создать' }}
      </button>
    </form>
  </section>
</template>

<style scoped>
label { display: block; margin-top: 10px; }
input, textarea { display: block; margin-top: 5px; }
.error { color: red; margin: 4px 0 0; }
</style>