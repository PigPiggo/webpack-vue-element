<template>
  <div id="text">
    <div>
      {{ text }}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'hello world'
      }
    }
  }
</script>
<style lang="scss" scoped>
#text {
  div {
    background-color: red;
  }
}
</style>
