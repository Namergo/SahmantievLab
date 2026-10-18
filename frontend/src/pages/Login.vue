<template>
  <section>
    <h2>Вход</h2>
    <form @submit.prevent>
      <label for="login">Логин</label>
      <input id="login" name="login">

      <label for="password">Пароль</label>
      <input id="password" name="password" type="password">

      <button type="submit">Войти</button>
    </form>
  </section>
</template>

<style scoped>
label { display: block; margin-top: 10px; }
input { display: block; margin-top: 5px; }
</style>