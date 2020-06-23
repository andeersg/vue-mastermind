<template>
  <div :class="['row']">
    <div>
      <button :class="['button', {'button--enabled': buttonEnabled}]" :disabled="!buttonEnabled" v-on:click="finished">Check</button>
    </div>
    <div class="slots">
      <button :class="['slot', {'slot--current': currentSlot == 0}]" v-on:click="currentSlot = 0" v-bind:style="{ backgroundColor: getColor(0) }" />
      <button :class="['slot', {'slot--current': currentSlot == 1}]" v-on:click="currentSlot = 1" v-bind:style="{ backgroundColor: getColor(1) }" />
      <button :class="['slot', {'slot--current': currentSlot == 2}]" v-on:click="currentSlot = 2" v-bind:style="{ backgroundColor: getColor(2) }" />
      <button :class="['slot', {'slot--current': currentSlot == 3}]" v-on:click="currentSlot = 3" v-bind:style="{ backgroundColor: getColor(3) }" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Row',
  props: {
    input: Object,
    currentSlot: Number,
    colors: Array,
    checkRow: Function,
  },
  computed: {
    buttonEnabled: function() {
      return Object.values(this.input).length == 4;
    },
  },
  methods: {
    finished: function() {
      this.checkRow();
    },
    getColor: function(slot) {
      const selected = this.input[slot] || false;
      if (!selected) {
        return 'transparent';
      }
      const el = this.colors.find(i => i.id == selected);
      return el.color;
    },
  }
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 100px 1fr;
  border: 1px solid #ddd;
}
.row--active {
  border-width: 2px;
}
.row + .row {
  margin-top: 20px;
}
.slots {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.slot {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #333;
}
.slot--current {
  box-shadow: 0 0 4px 4px yellowgreen;
}
.indicators {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: gray;
  padding: 10px;
  gap: 10px;
}
.indicator {
  width: 1em;
  height: 1em;
  background-color: #3e3e3e;
  border: 1px solid #2e2e2e;
  border-radius: 50%;
}
.indicator--placed {
  background-color: green;
}
.indicator--correct {
  background-color: indianred;
}


.button {
  background-color: lightblue;
  border-radius: 4px;
  color: #444;
  border: none;
  padding: 10px;
  cursor: not-allowed;
}
.button--enabled {
  cursor: pointer;
}
</style>