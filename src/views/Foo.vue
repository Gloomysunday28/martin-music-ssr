<!-- Item.vue -->
<template>
  <div>333</div>
</template>

<script>
export default {
  name: 'Foo',
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchFoo', 'banners')
  },
  mounted() {
    console.log('martin', window)/* 2019年11月15日 14时33分01秒 */
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.foo.banners
    }
  }
}
</script>