<template>
  <div class="search-bar">
    <input
      type="text"
      id="check-weather"
      name="weather"
      v-model="city"
      @keypress.enter="fetchData"
    />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label for="weather">Enter the city</label>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  transition: 'page',

  computed: {
    city: {
      get() {
        return this.$store.getters.city;
      },
      set(value) {
        this.$store.commit("updateCity", value);
      },
    },
  },

  methods: {
    fetchData(event) {
      this.$store.dispatch("fetchWeather");
      event.target.value = "";
      this.$store.commit("clearInput");
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-top: 10%;
  position: relative;
}

#check-weather {
  padding: 10px 30px;
  border: none;
  border-bottom: 1px solid rgb(255, 255, 255);
  outline: none;
  display: block;
  padding: 10px;
  background: transparent;
}

label {
  position: absolute;
  top: 20px;
  left: 15px;
  pointer-events: none;
  font-size: 20px;
  transition: 0.2s ease all;
  font-weight: bold;
  color: white;
}
input:focus ~ label {
  top: -20px;
  left: 10px;
  font-size: 18px;
  color: #030303;
  font-weight: 300;
}

.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 3px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #050505;
  transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
</style>
