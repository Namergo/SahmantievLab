<script setup>
import { items } from '../requestsStore.js'
import RequestTable from '../components/RequestTable.vue'
</script>

<template>
  <section>
    <h2>Список заявок на анализ</h2>
    <RequestTable :items="items" />
  </section>
</template>