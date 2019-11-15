import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router/createRouter'
import {createStore} from './store/createStore'
import { sync } from 'vuex-router-sync'
import {mapState} from 'vuex'
import Bus from '@/utils/Bus'
import Toast from '@/components/App/Toast'
import Loading from '@/components/App/Loading'
import Dialog from '@/components/App/Dialog'
import HTTP from '@/api/http'
import Api from '@/api/api'
import MusicInput from '@/components/App/Form/Input'
import MusicTextArea from '@/components/App/Form/TextArea'
import isApp from '@/utils/isApp'
import VueLazyload from 'vue-lazyload'
import log from '@/utils/log'
import '@/assets/css/common.less'
import 'swiper/dist/css/swiper.css'
import '@/assets/font/iconfont.css'

if (typeof window !== "undefined") {
  const Fastclick = require('fastclick')
  Fastclick.attach(document.body)
}

const components = [MusicInput, MusicTextArea]

components.forEach(comp => {
  Vue.component(comp.name, comp)
})

// Vue.use(Toast)
// Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Bus)
Vue.use(HTTP)
Vue.use(Api)
Vue.use(log)

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      isApp
    }
  },
  computed: mapState({
    personal: state => state.baseInfo.personal,
  })
})

// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   '@/components',
//   // 是否查询其子目录
//   true,
//   // 匹配基础组件文件名的正则表达式
//   /Header[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   console.log(requireComponent(fileName))
// })

if (typeof window !== 'undefined') {
  Vue.use(VueLazyload, { // 图片懒加载
    preLoad: 1.3,
    loading: require('@/assets/img/loading-ps.jpg'),
    attempt: 1,
    listenEvents: [ 'scroll' ]
  })
}


export function createApp() {
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })

  return {
    app,
    store,
    router
  }
}
