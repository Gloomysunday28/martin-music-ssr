import Toast from './ToastHint'

export default {
  install(Vue) {
    if (typeof document !== 'undefined') {
      const toastContain = new (Vue.extend(Toast))({
        el: document.createElement('div')
      })
      
      const showToast = (message, opt) => {
        toastContain.show(message, opt)
        document.body.appendChild(toastContain.$el)
      }
  
      Vue.prototype.$toast = showToast
    }
  }
}
