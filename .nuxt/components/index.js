export const HistoryList = () => import('../..\\components\\HistoryList.vue' /* webpackChunkName: "components/history-list" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const WeatherForm = () => import('../..\\components\\WeatherForm.vue' /* webpackChunkName: "components/weather-form" */).then(c => wrapFunctional(c.default || c))
export const WeatherInfo = () => import('../..\\components\\WeatherInfo.vue' /* webpackChunkName: "components/weather-info" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
