<template>
  <section>
    <section v-if="weather.main">
      <h1>{{ weather.name }}</h1>
      <div class="weather-status">{{ weather.weather[0].description }}</div>
      <div class="temperature">
        <p>{{ weather.main.temp }}</p>
      </div>
    </section>
    <div v-else><p>temperature</p></div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      weather: "weather",
    }),
  },
};
</script>

<style scoped>
section {
  min-height: 40vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
