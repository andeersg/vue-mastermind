<template>
  <div>
    <h1>You lost!</h1>
    <button v-on:click="reset">Restart</button>
  </div>
</template>

<script>
export default {
  name: 'lost',
  props: {
    reset: Function,
  },
};
</script>

<style lang="scss">

</style>