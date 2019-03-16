<template>
  <div>
    <h1>Grid system</h1>
    <div class="wrapper">
      <table class="grid">
        <tr v-for="(lines, index) in grid" :key="index">
          <td v-for="(zone) in lines" :key="zone.id" :class="zone.terrain">
            <input type="radio" :id="zone.id" :value="zone.id" name="grid" class="grid_point" :checked="zone.id == currentZone.id">
          </td>
        </tr>
      </table>
      <div class="hero">
        <Hero/>
        <div>
            <a v-if="neighbors.NORTH" href='#' class='btn'>UP</a>
        </div>
        <div>
            <a v-if="neighbors.WEST" href='#' class='btn'>LEFT</a>
            <a v-if="neighbors.EAST" href='#' class='btn'>RIGHT</a>
        </div>
        <div>
            <a v-if="neighbors.SOUTH" href='#'
                class='btn'>DOWN</a>
        </div>

        <div class="currentZone">
          <h2>Current Zone:</h2>
          <label for="x">X</label>
          {{currentZone.x}}
          <label for="y">Y</label>
          {{currentZone.y}}
          <label for="description">Description</label>
          {{currentZone.zone}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: 'Grid',
  components: { Hero },
  created() {
    const zoneId = this.$store.state.hero.currentZone;
    this.$store.dispatch('getGrid', zoneId);
    this.$store.dispatch('getNeighbors', zoneId);
    this.$store.dispatch('getZone', zoneId);
  },
  computed: {
    grid() {
      return this.$store.state.grid || [];
    },
    neighbors() {
      return this.$store.state.neighbors || {};
    },
    currentZone() {
      return this.$store.state.currentZone || {};
    },
  },
};
</script>

<style scoped>
.PLAIN {
  background-color: green;
}
.SWAMP {
  background-color: DarkGreen;
}
.BEACH {
  background-color: yellow;
}
.MOUNTAIN {
  background-color: gray;
}
.WATER {
  background-color: blue;
}
.BRIDGE {
  background-color: SaddleBrown;
}

.wrapper{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-left:40px;
  margin-right: 40px;
  height: 600px;
}
.grid{
  grid-column-start: 1;
  grid-column: span 3;
}
.hero {
  grid-column-end: 5;
}
</style>
