<template>
  <v-card class="pa-4">
    <p>checkbox</p>
    <v-checkbox v-model="selected" label="John" value="John" hide-details="auto"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob" hide-details="auto"></v-checkbox>
  </v-card>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class CheckBox extends Vue {
    selected= ["Jacob"];
  }
</script>

<style scoped>

</style>