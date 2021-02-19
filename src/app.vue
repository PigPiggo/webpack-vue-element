<template>
  <div>
    <aa />
    <bb />
  </div>
</template>
<script>
  import bb from './components/bb.vue'; 
  import aa from './components/aa.vue'
  export default {
    components: {
      bb, aa
    }, 
  }
</script>
<style lang="scss" scoped>
.text {
  background-color: blue;
}
</style>
