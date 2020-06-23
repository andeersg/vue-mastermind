<template>
  <div :class="['row']">
    <div class="indicators">
      <span class="indicator indicator--placed" v-for="n in res.correct_place" v-bind:key="n + '-placed'" />
      <span class="indicator indicator--correct" v-for="n in res.correct_color" v-bind:key="n + '-corrects'" />
      <span class="indicator indicator--wrong" v-for="n in res.wrong" v-bind:key="n + '-wrong'" />
    </div>
    <div class="slots" v-if="input.length > 0">
      <span :class="['slot']" v-for="(inp, index) of input" :key="index" v-bind:style="{ backgroundColor: getColor(inp) }" />´
    </div>
    <div class="slots" v-if="input.length === 0">
      <span :class="['slot', 'slot--blank']" v-for="i in 4" v-bind:key="i" />
    </div>
  </div>
</template>
<script>
import { checkSolution } from '../utils/game';

export default {
  name: 'Attempt',
  props: {
    input: {type: Array, default: () => []}, // The colors provided.
    colors: Array, // The color data.
    code: {type: Array, default: () => []},
  },
  methods: {
    getColor: function(id) {
      const el = this.colors.find(i => i.id == id);
      return el.color;
    }
  },
  computed: {
    res: function() {
      const res = checkSolution(this.code, this.input);
      return {
        wrong: 4 - res.correct_place - res.correct_color,
        correct_place: res.correct_place,
        correct_color: res.correct_color,
      };
    },
    wrong: function() {
      const res = checkSolution(this.code, this.input);
      return 4 - res.correct_place - res.correct_color;
    },
    correct_place: function() {
      const res = checkSolution(this.code, this.input);
      return res.correct_place;
    },
    correct_color: function() {
      const res = checkSolution(this.code, this.input);
      return res.correct_color;
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
  justify-content: center;
  align-items: center;
}
.slot {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: block;
  background-color: #333;
  border: 1px solid #444;
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
</style>