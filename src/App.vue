<template>
  <div id="app">
    <router-view/>
    <div class="main-nav" v-show="tabsStatus">
      <router-link to="/home" class="link-item link-main">Home</router-link>
      <router-link to="/test" class="link-item link-tool">Setting</router-link>
      <router-link to="/about" class="link-item link-my">My</router-link>
    </div>
    <div v-show='loadingToast' class="main-loading">
      <van-loading color="white"></van-loading>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabsStatus: true,
      loadingToast: false
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
.main-loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-loading {
    background: rgba(0, 0, 0, .5);
    width:  1.2rem;
    height: 1.2rem;
    border-radius: 0.1rem;
  }
}
.main-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  background: #ffffff;
  z-index: 999;
  border-top: halvePx(1) solid rgb(153, 153, 153);
  display: flex;
  justify-content: space-around;
  font-size: 0.24rem;
  width: 100%;
  .link-item {
    background-size: 0.36rem 0.36rem;
    background-position: center 0.15rem;
    background-repeat: no-repeat;
    padding-top: 0.62rem;
    color: rgb(204, 204, 204);
    &.link-main {
      background-image: url("./assets/imgs/student.png");
    }

    &.link-tool {
      background-image: url("./assets/imgs/set.png");
    }

    &.link-my {
      background-image: url("./assets/imgs/my.png");
    }
    &.router-link-active {
      color: rgb(27, 136, 238);
      &.link-main {
        background-image: url("./assets/imgs/studenting.png");
      }

      &.link-tool {
        background-image: url("./assets/imgs/seting.png");
      }

      &.link-my {
        background-image: url("./assets/imgs/mying.png");
      }
    }
  }
}
</style>
