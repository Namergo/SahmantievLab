<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '../requestsStore.js'

const router = useRouter()

const form = ref({
  title: '',
  campaignId: 0,
  description: ''
})

const errors = ref({
  title: '',
  campaignId: '',
  description: ''
})

function onCreate() {
  errors.value = { title: '', campaignId: '', description: '' }

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

  addItem({ title, campaignId, description })

  form.value = { title: '', campaignId: 0, description: '' }
  router.push('/')
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

      <button type="submit">Создать</button>
    </form>
  </section>
</template>

<style scoped>
label { display: block; margin-top: 10px; }
input, textarea { display: block; margin-top: 5px; }
.error { color: red; margin: 4px 0 0; }
</style>