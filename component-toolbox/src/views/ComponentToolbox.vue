<template>
  <v-row no-gutters class="fill-height">
    <v-col class="draggableCol pa-8" cols="12" xs="12" sm="5" md="4" lg="3">
      <DraggableArea/>
    </v-col>
    <v-col cols="12" xs="12" class="droppableCol" sm="7" md="8" lg="9">
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