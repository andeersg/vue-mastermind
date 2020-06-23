<template>
  <div id="app" class="game">
    <h1>Mastermind</h1>
    <div></div>
    <Welcome v-if="screen == 'welcome'" :play="startGame" />
    <Game v-if="screen == 'game'" :code="code" :colors="colors" :key="code.join('')" :reset="reset" :lost="lost" :won="won" />
    <Winner v-if="screen == 'won'" :reset="reset" />
    <Lost v-if="screen == 'lost'" />
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Game from './components/Game';
import Winner from './components/screens/Winner';
import Lost from './components/screens/Lost';
import { generateCode } from './utils/game';

export default {
  name: 'App',
  components: {
    Welcome,
    Game,
    Winner,
    Lost,
  },
  methods: {
    startGame: function(e) {
      e.preventDefault();

      this.isPlaying = true;
      this.code = generateCode();
      this.screen = 'game';
    },
    reset: function() {
      this.code = generateCode();
      this.isPlaying = true;
      this.screen = 'game';
    },
    lost: function() {
      this.isPlaying = false;
      this.screen = 'lost';
    },
    won: function() {
      this.screen = 'won';
    },
  },
  data: function() {return {
    isPlaying: false,
    screen: 'welcome',
    code: null,
    colors: [
      {
        id: 1,
        color: 'white',
      },
      {
        id: 2,
        color: 'pink',
      },
      {
        id: 3,
        color: 'yellow',
      },
      {
        id: 4,
        color: 'green',
      },
      {
        id: 5,
        color: 'red',
      },
      {
        id: 6,
        color: 'blue',
      }
    ],
  }},
}
</script>

<style>
body {
  background-color: rgb(71, 71, 193);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.game {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(174, 70, 41);
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
