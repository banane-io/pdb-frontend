<template>
  <div>
    <h1>Grid system</h1>
    <div class="row">
      <div class="float">
        <table class="table-bordered inline centered">
          <tr v-for="(lines, index) in grid" :key="index">
            <td v-for="(zone) in lines" :key="zone.id" :class="zone.terrain">
              <input type="radio" :id="zone.id" :value="zone.id" name="grid" class="grid_point">
            </td>
          </tr>
        </table>
        <Hero/>
        <div class='float inline square border'>
            <div class='row centered'>
                <a v-if="neighbors.NORTH" href='#' class='btn'>UP</a>
            </div>
            <div class='row'>
                <a v-if="neighbors.WEST" href='#' class='btn'>LEFT</a>
                <a v-if="neighbors.EAST" href='#' class='btn'>RIGHT</a>
            </div>
            <div class='row centered'>
                <a v-if="neighbors.SOUTH" href='#'
                    class='btn'>DOWN</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: 'Grid',
  components: [Hero],
  created() {
    this.$store.dispatch('getGrid', 1);
    this.$store.dispatch('getNeighbors', 1);
  },
  computed: {
    grid() {
      return this.$store.state.grid || [];
    },
    neighbors() {
      return this.$store.state.neighbors || {};
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
</style>
