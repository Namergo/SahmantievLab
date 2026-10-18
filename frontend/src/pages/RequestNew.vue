<template>
  <section>
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
</template>

<style scoped>
label { display: block; margin-top: 10px; }
input, textarea { display: block; margin-top: 5px; }
</style>