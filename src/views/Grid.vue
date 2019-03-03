<template>
    <div>
        <h1>Grid system</h1>
        <div class='row'>
            <div class='centered'>
                <table class='table-bordered float inline'>
                    <tr v-for="(lines, index) in grid" :key="index">
                        <td v-for="(zone) in lines" :key="zone.id" :class="zone.terrain">
                            <input type="radio" :id="zone.id" :value="zone.id" name="grid"  class="grid_point"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Grid',
  created() {
    this.$store.dispatch('getGrid');
  },
  computed: {
    grid() {
      return this.$store.state.grid || [];
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
