<template>
  <div>
    <the-header></the-header>
    <section class="main">
      <weather-info></weather-info>
      <weather-form></weather-form>
    </section>
  </div>
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
}

body {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("@/assets/p1.jpg");
}

.main {
  margin-top: 20%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>
