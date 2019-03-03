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
        <div class='float inline square border'>
            <div class='row centered'>
                <a v-if="neighbors.NORTH" href='#' class='btn glyphicon glyphicon-arrow-up'>UP</a>
            </div>
            <div class='row'>
                <a v-if="neighbors.WEST" href='#' class='btn glyphicon glyphicon-arrow-left'>LEFT</a>
                <a v-if="neighbors.EAST" href='#' class='btn glyphicon glyphicon-arrow-right'>RIGHT</a>
            </div>
            <div class='row centered'>
                <a v-if="neighbors.SOUTH" href='#'
                    class='btn glyphicon glyphicon-arrow-down centered'>DOWN</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  created() {
    this.$store.dispatch('getGrid');
    this.$store.dispatch('getNeighbors');
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
