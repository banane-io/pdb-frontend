<template>
  <div>
    <h1>Grid system</h1>
    <div class="wrapper">
      <table class="grid">
        <tr v-for="(lines, index) in grid" :key="index">
          <td v-for="(zone) in lines" :key="zone.id" :class="zone.terrain">
            <input type="radio" :id="zone.id" :value="zone.id"
               name="grid" class="grid_point" :checked="zone.id == currentZone.id"/>
          </td>
        </tr>
      </table>
      <div class="hero">
        <Hero/>
        <div>
            <button @click="movePlayer(neighbors.NORTH)" v-if="neighbors.NORTH">UP</button>
        </div>
        <div>
            <button @click="movePlayer(neighbors.WEST)" v-if="neighbors.WEST">LEFT</button>
            <button @click="movePlayer(neighbors.EAST)" v-if="neighbors.EAST">RIGHT</button>
        </div>
        <div>
            <button @click="movePlayer(neighbors.SOUTH)" v-if="neighbors.SOUTH">DOWN</button>
        </div>

        <div class="currentZone">
          <h2>Current Zone:</h2>
          <label for="x">X</label>
          {{currentZone.x}}
          <label for="y">Y</label>
          {{currentZone.y}}
          <label for="description">Description</label>
          {{currentZone.zone}}
          <label for="actions">Actions</label>
          <button v-for="(action, index) in currentZoneActions"
            :key="index" @click="doAction(action)">
            {{action}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import ROUTES from '../constant/Routes';

console.log(ROUTES);

export default {
  name: 'Grid',
  components: { Hero },
  created() {
    console.log(`Fetching data for hero, grid, neighbors and the zone with zoneId : ${this.$store.state.hero?.currentZone}`);
    this.fetchGridData(this.$store.state.hero?.currentZone);
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
    currentZoneActions() {
      return this.$store.state.zoneActions || [];
    },
  },
  methods: {
    fetchGridData(zoneId) {
      console.log(`Fetching data for hero, grid, neighbors and the zone with zoneId : ${zoneId}`);
      this.$store.dispatch('getHero');
      this.$store.dispatch('getGrid', zoneId);
      this.$store.dispatch('getNeighbors', zoneId);
      this.$store.dispatch('getZone', zoneId);
      this.$store.dispatch('getZoneActions', zoneId);
    },
    movePlayer(zone) {
      console.log(`Moving hero to the new zone with id : ${zone.id}`);
      this.$http.post(`/api/hero/movePlayer/${zone.id}`)
        .then((response) => {
          console.log(response);
          console.log('Refreshing data for the grid');
          this.fetchGridData(zone.id);
        })
        .catch(console.error);
    },
    doAction(action) {
      console.log(`Executing action with name : ${action}`);
      if (action === 'VISIT_BASE') {
        console.log(`Executing special action with name : ${action}`);
        this.$router.push(ROUTES.GRID.PATH);
      } else {
        this.$http.post(`/api/mapPoint/${this.currentZone.id}/action`, { action })
          .then((response) => {
            console.log(response);
            console.log('Action executed on server-side');
            this.fetchGridData(this.$store.state.hero.currentZone);
          })
          .catch(console.error);
      }
    },
  },
};
</script>

<style scoped>
.PLAIN {
  background-color: green;
}
.FOREST {
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
