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
      return this.$store.getters.history.slice().reverse();
    },
  },
  methods: {
    printItem(event) {
      this.$store.dispatch("fetchHistoryWeather", event.target.innerText);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li {
  padding: 20px 120px;
  font-size: 28px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: rgb(19, 17, 15);
  cursor: pointer;
  margin-bottom: 20px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
}

li:hover {
  background-color: rgba(240, 248, 255, 0.452);
  border-color: rgba(240, 248, 255, 0.452);
}
</style>
