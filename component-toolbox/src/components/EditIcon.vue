<template>
  <v-tooltip right>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs"
              v-on="on" small @click.stop="$emit('edit')">mdi-pencil</v-icon>
    </template>
    <span>Edit</span>
  </v-tooltip>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component
    export default class EditIcon extends Vue {
    }
</script>
<style scoped>
</style>