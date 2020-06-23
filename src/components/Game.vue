<template>
  <div class="game2">
    <Attempt :colors="colors" :code="code" v-for="n in remaining" :key="'next' + n" />
    
    <!-- Fresh attempts -->

    <Row :current="currentAttempt" :currentSlot="slot" :colors="colors" :checkRow="checkRow" :input="attempt" />

    <!-- Done attempts -->
    <Attempt v-for="(item, index) in flippedAttempts" :key="'done-' + index" :colors="colors" :input="item" :code="code" />

    <Buttons :colors="colors" :buttonClicked="buttonClicked" />
  </div>
</template>

<script>
import { checkSolution } from '../utils/game';
import Row from './Row';
import Attempt from './Attempt';
import Buttons from './Buttons';

export default {
  name: 'App',
  components: {
    Row,
    Buttons,
    Attempt,
  },
  props: {
    code: Array,
    colors: Array,
    reset: Function,
    lost: Function,
    won: Function,
  },
  computed: {
    remaining: function() {
      return this.maxAttempts - this.attempts.length - 1;
    },
    flippedAttempts: function() {
      return [...this.attempts].reverse();
    },
  },
  methods: {
    reverseKeys(n) {
      return [...Array(n).keys()].slice().reverse()
    },
    checkRow: function() {
      const res = checkSolution(this.code, Object.values(this.attempt));

      if (res.correct_place === 4) {
        // Winner!
        this.won();
        return;
      }

      this.attempts.push(Object.values(this.attempt));
      this.slot = 0;
      this.attempt = {};
      this.currentAttempt += 1;

      if (this.currentAttempt > this.maxAttempts) {
        this.lost();
        return;
      }
    },
    buttonClicked: function(n) {
      const tmp = Object.assign({}, this.attempt);

      tmp[this.slot] = parseInt(n, 10);

      this.attempt = tmp;
      this.slot += 1; // TODO Improve this.
    }
  },
  data: function() {return {
    currentAttempt: 1,
    maxAttempts: 8,
    attempts: [],
    attempt: {},
    slot: 0,
  }},
  mounted() {
    console.log('The current code is:', this.code);
  }
}
</script>

<style>
</style>
