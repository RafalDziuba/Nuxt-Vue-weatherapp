import axios from "axios";
export default {
  fetchWeather({ commit, getters }) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${getters.city}&appid=0d05dbed3cecaa1053cb80974ae0e343&units=metric`
      )
      .then((response) => {
        commit("setWeather", response.data);
        commit("updateHistory", response.data.name);
      });
  },

  fetchHistoryWeather({ commit }, payload) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=0d05dbed3cecaa1053cb80974ae0e343&units=metric`
      )
      .then((response) => {
        commit("setWeather", response.data);
        console.log(response.data);
        this.$router.push("/");
      });
  },
};
