<template>
  <section>
    <section v-if="weather.main">
      <h1>{{ weather.name }}</h1>
      <div class="weather-status">{{ weather.weather[0].description }}</div>
      <div class="temperature">
        <p>{{ Math.round(weather.main.temp) }}°</p>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  transition: 'page',
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
  transition: 0.2s;
}

h1 {
  font-size: 48px;
  letter-spacing: 3px;
  max-width: 300px;
  max-height: 60px;
  overflow: hidden;
}

.weather-status {
  margin-top: -50%;
  font-style: italic;
  font-size: 24px;
}

.temperature p {
  font-size: 62px;
  font-weight: bold;
}

@media (max-width: 420px) {
  .weather-status {
    margin-top: -75px;
  }
}
</style>
