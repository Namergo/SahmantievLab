<script setup>
import { ref } from 'vue'

const screen = ref('list')

const items = [
  { id: 1, number: 'А-101', title: 'Анализ баннерной рекламы', campaignId: 2, status: 'New' },
  { id: 2, number: 'А-102', title: 'Анализ контекстной рекламы', campaignId: 1, status: 'InProgress' }
]
</script>

<template>
  <main>
    <nav>
      <button type="button" @click="screen = 'list'">Список</button>
      <button type="button" @click="screen = 'new'">Создать</button>
      <button type="button" @click="screen = 'login'">Вход</button>
    </nav>

    <section v-if="screen === 'list'">
      <h2>Список заявок на анализ</h2>
      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Тема</th>
            <th>Кампания</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.number }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.campaignId }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="screen === 'new'">
      <h2>Создать заявку на анализ</h2>
      <form @submit.prevent>
        <label for="title">Тема, 5–80 символов</label>
        <input id="title" name="title" autofocus>

        <label for="campaignId">ID кампании</label>
        <input id="campaignId" name="campaignId" type="number">

        <label for="description">Описание, 10–500 символов</label>
        <textarea id="description" name="description"></textarea>

        <button type="submit">Создать</button>
      </form>
    </section>

    <section v-else-if="screen === 'login'">
      <h2>Вход</h2>
      <form @submit.prevent>
        <label for="login">Логин</label>
        <input id="login" name="login">

        <label for="password">Пароль</label>
        <input id="password" name="password" type="password">

        <button type="submit">Войти</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
nav { margin-bottom: 20px; }
button { margin-right: 10px; }
label { display: block; margin-top: 10px; }
input, textarea { display: block; margin-top: 5px; }
table { border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 8px; }
</style>