<template>
  <Page class="about" style='text-align: center'>
      <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
  </Page>
</template>
<script>
import Page from '@/components/admin/page'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {Page, HelloWorld},
  created() {
    // console.log(this.$route)
  }

}
</script>
