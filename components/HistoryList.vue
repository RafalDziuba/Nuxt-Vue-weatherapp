<template>
  <section>
    <ul>
      <li v-for="item in historyList" :key="item.history" @click="printItem">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    historyList() {
      return this.$store.getters.history;
    },
  },
  methods: {
    printItem(event) {
      this.$store.dispatch("fetchHistoryWeather", event.target.innerText);
    },
  },
};
</script>
