<template>
  <v-tooltip right>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs"
              v-on="on" small @click.stop="edit">mdi-pencil</v-icon>
    </template>
    <span>Edit</span>
  </v-tooltip>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component
    export default class EditIcon extends Vue {
        edit(event: any){
            console.log(this.$parent)
            if (this.$parent.$el) {
                if (this.$parent.$el.id === 'button') {
                    console.log("BUTAO")
                } else if (this.$parent.$el.id === 'checkbox') {
                    console.log("Check")
                } else if (this.$parent.$el.id === 'textfield') {
                    console.log("Text")
                }
            }
        }
    }
</script>
<style scoped>
</style>