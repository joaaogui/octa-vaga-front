<template>
  <v-text-field outlined value=" " style="cursor: pointer"
                hide-details="auto"
                label="input text"></v-text-field>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class TextField extends Vue {
    }
</script>

<style scoped>

</style>