export default {
  updateCity(state, payload) {
    state.city = payload;
  },

  setWeather(state, weather) {
    state.weather = weather;
  },

  updateHistory(state, payload) {
    state.history = state.history.concat(payload);
  },

  clearInput(state, payload) {
    state.city = "";
  },
};
