<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello :msg="msg"></hello>
  </div>
</template>

<script>
// @ is an alias to /src
import hello from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: { hello },
  data () {
    return {
      msg: 'msg'
    }
  }
}
</script>
