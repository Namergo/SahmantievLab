<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
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
</template>

<style scoped>
table { border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 8px; }
</style>