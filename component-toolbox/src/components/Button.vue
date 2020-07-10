<template>
  <div>
    <p>button</p>
    <v-btn small dark color="black">OK</v-btn>
  </div>
</template>
<script>
  import {Component, Vue} from "vue-property-decorator";

  @Component()
  export default class Button extends Vue {
  }
</script>

<style scoped>

</style>