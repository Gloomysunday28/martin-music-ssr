import Loading from './index.vue'

export default {
  install(Vue) {
    if (typeof document !== 'undefined') {
      const loadingContain = new (Vue.extend(Loading))({
        el: document.createElement('div')
      })
      
      const showLoading = (bool) => {
        loadingContain.show(bool)
        document.body.appendChild(loadingContain.$el)
      }
      
      Vue.prototype.$loading = showLoading
    }
  }
}
