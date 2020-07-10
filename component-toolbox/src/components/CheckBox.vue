<template>
  <v-card>
    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
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