<template>
  <div class="search-bar">
    <input
      type="text"
      id="check-weather"
      name="weather"
      placeholder="Enter the city"
      v-model="city"
      @keypress.enter="fetchData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    city: {
      get() {
        return this.$store.getters.city;
      },
      set(value) {
        this.$store.commit("updateCity", value);
        // this.$store.commit("updateHistory", value);
      },
    },
  },

  methods: {
    fetchData() {
      this.$store.dispatch("fetchWeather");
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-top: 30%;
}

#check-weather {
  padding: 10px 30px;
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
