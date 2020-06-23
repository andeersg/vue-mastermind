<template>
  <div>
    <p>Press play to start</p>
    <button v-on:click="play">Play</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    play: Function,
  },
};
</script>

<style lang="scss" scoped>

</style>