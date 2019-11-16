<template>
  <header class="header">
    <div class="bar">
      <div class="c-home__header">
        <div class="c-music__title c-skull__elecron"></div>
        <div class="c-person__header c-skull__elecron"></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderSkelete'
  }
</script>

<style scoped lang="less">
.header {
  width: 100vw;
  box-sizing: border-box;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #0d0d0d;
  color: #444;
  height: 120px;
  padding-top: 30px;
  .bar {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 88px;
  }
   .c-home__header {
    width: 100%;
    flex: none;
    padding: 10px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .c-music__title {
      width: 200px;
      height: 48px;
      color: #fff;
      font-weight: 600;
      font-size: 42px;
    }
  }
}
</style>