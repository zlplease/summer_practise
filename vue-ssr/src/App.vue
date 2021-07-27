<template>
  <div id="app">
      <div class="demo" @click="onClick">
          hello SSR
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            console.log('clicked!')
        }
    }
}

</script>
<style scoped>
.demo {
    color: white;
    width: 160px;
    height: 90px;
    border-radius: 12px;
    background-image: linear-gradient(to right, #6E56DD, #4279C7);
}
</style>