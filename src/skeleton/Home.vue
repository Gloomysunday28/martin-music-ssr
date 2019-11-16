<template>
  <div class="g-layout">
    <div class="c-home__contain">
      <div class="c-home__search">
        <i class="iconfont">&#xe621;</i>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper c-skull__elecron">
          <div class="swiper-slide">
            <div class="swpier-img"></div>
          </div>
        </div >
      </div>
      <!-- 推荐菜单 -->
      <div class="c-music__menu">
        <div class="c-music__item">
          <div class="c-menu__img__contain c-skull__elecron">
            <div class="c-menu__img"></div>
          </div>
          <div class="c-menu__img__contain c-skull__elecron">
            <div class="c-menu__img"></div>
          </div>
        </div>
        <div class="c-music__item">
          <div class="c-menu__img__contain c-skull__elecron">
            <div class="c-menu__img"></div>
          </div>
          <div class="c-menu__img__contain c-skull__elecron">
            <div class="c-menu__img"></div>
          </div>
        </div>
      </div>
      <!-- 推荐歌单 -->
      <div class="c-music__recommend">
        <div class="c-recommend__label">推荐歌单</div>
        <div class="c-recommend">
          <div class="c-music__item" v-for="rem in recommends" :key="rem.id" :to="{name: 'MusicPlayList', query: {coverUrl: rem.picUrl, title: rem.name, id: rem.id}}">
            <div class="c-menu__img__contain c-menu__recommend__recommend c-skull__elecron">
              <div class="c-menu__img"></div>
            </div>
            <div class="c-menu__img__contain c-skull__elecron">
              <p class="c-menu__name"></p>
              <p class="c-menu__remark">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSkeleton',
    data() {
      return {
        recommends: [{
          skeletid: 1
        }, {
          skeletid: 2
        }, {
          skeletid: 3
        }]
      }
    }
  }
</script>

<style scoped lang="less">
 .swiper-container {
   height: 250px; 
   margin-top: 20px;
 }
  .g-layout {
    display: flex;
    flex-direction: column;
  }
  .c-home__header {
    flex: none;
    padding: 10px 20px 0;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .c-music__title {
    color: #fff;
    font-weight: 600;
    font-size: 42px;
  }
  .c-person__header {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .swpier-img {
    width: 100%;
  }
  .c-home__contain {
    margin-top: 10px;
    padding: 0 20px;
    flex: 1;
    // touch-action: none;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .c-music__menu {
    margin-top: 50px;
  }
  .c-music__item {
    margin-bottom: 40px;
    display: flex;
    .c-menu__img__contain {
      position: relative;
      flex: 1;
      height: 220px;
      margin: 0 10px;
      &.c-menu__recommend__recommend {
        height: 250px;
      }
      .c-menu__name {
        color: #fff;
        font-size: 32px;
        margin-bottom: 10px;
      }
      .c-menu__title {
        position: absolute;
        font-size: 38px;
        font-weight: bold;
        color: #ff4a69;
        left: 20px;
        top: 20px;
      }
      .c-menu__text {
        color: #fff;
        font-size: 50px;
      }
      .c-menu__mark {
        background: rgb(252, 23, 23);
        font-size: 38px;
        font-style: italic;
        font-weight: 600;
        color: #000;
      }
      .c-menu__remark {
        color: #444;
      }
    }
    .c-menu__img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .c-recommend {
    margin-top: 40px;
  }
  .c-music__recommend {
    .c-recommend__label {
      color: #444;
      font-size: 40px;
    }
  }
</style>