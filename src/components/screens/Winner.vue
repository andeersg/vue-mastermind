<template>
  <div>
    <h1>You won!</h1>
    <button v-on:click="reset">Restart</button>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: {
    reset: Function,
  },
};
</script>

<style lang="scss">

</style>