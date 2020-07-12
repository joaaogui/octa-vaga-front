<template>
  <v-row no-gutters class="fill-height">
    <v-col v-if='!borders' class="draggableCol pa-8" cols="12" xs="12" sm="5" md="4" lg="3">
      <DraggableArea/>
    </v-col>
    <v-col cols="12" xs="12" class="droppableCol" :sm="!borders ? 7 : 12" :md="!borders ? 8 : 12" :lg="!borders ? 9 : 12">
      <v-row no-gutters class="text-right">
        <v-col cols="12">
          <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs"
                      v-on="on" :color="borders ? '#c76d6d' : ''" class="mr-1 mt-1" @click="toggleNoBorder"> mdi-eye</v-icon>
            </template>
            <span v-if="borders">With Borders Visualization</span>
            <span v-else>No Borders Visualization</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <DroppableArea/>
    </v-col>
  </v-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import DraggableArea from "@/views/DraggableArea.vue";
    import DroppableArea from "@/views/DroppableArea.vue";

    @Component({
        components: {
            DraggableArea,
            DroppableArea
        }
    })
    export default class ComponentToolbox extends Vue {
        get borders() {
            return this.$store.state.borders;
        }

        toggleNoBorder = () => this.$store.commit("toggleborders")
    }
</script>

<style scoped>
  .droppableCol {
    min-height: 50vh;
    max-width: 100%;
    background-color: #ededed;
    z-index: 1;
  }

  .draggableCol {
    background: #ededed;
  }
</style>