<template>
  <Page>
    <div class="home">
      <h1>Vue3 + antd@next</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </Page>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Page from '@/components/admin/page'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Page
  }
}
</script>
<style scoped>
.home {
  text-align: center;
}
</style>
