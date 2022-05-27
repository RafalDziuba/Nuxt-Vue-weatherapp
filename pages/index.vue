<template>
  <section class="main">
    <the-header></the-header>
    <weather-info></weather-info>
    <weather-form></weather-form>
  </section>
</template>

<script>
import Header from "../components/TheHeader.vue";
export default {
  components: { Header },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  background-color: rgb(144, 168, 57);
}

body {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.main {
  margin-top: 20%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>
