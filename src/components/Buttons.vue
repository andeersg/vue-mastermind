<template>
  <div class="buttons">
    <button v-for="col in colors" :key="col.id" :class="['button', `button--${col.color}`]" :data-id="col.id" v-on:click="buttonClick"></button>
  </div>
</template>
<script>
export default {
  name: 'Buttons',
  props: {
    colors: Array,
    buttonClicked: Function,
  },
  methods: {
    buttonClick: function(e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      this.buttonClicked(id);
    }
  },
};
</script>

<style scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.button--white {
  background-color: #FFF;
}
.button--pink {
  background-color: pink;
}
.button--yellow {
  background-color: yellow;
}
.button--green {
  background-color: green;
}
.button--red {
  background-color: red;
}
.button--blue {
  background-color: blue;
}
</style>