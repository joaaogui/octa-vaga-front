<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs"
              v-on="on" small>mdi-delete</v-icon>
    </template>
    <span>Delete</span>
  </v-tooltip>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component
    export default class DeleteIcon extends Vue {
    }
</script>
<style scoped>
</style>