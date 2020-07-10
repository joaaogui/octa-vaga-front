<template>
  <div>
    <p>button</p>
    <v-icon v-if="showEdit" @click.stop="dialog = true">mdi-pencil</v-icon>
    <v-btn small dark color="black">{{label}}</v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-text-field v-model="label"></v-text-field>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import {Component, Vue} from "vue-property-decorator";

  @Component()
  export default class Button extends Vue {
    dialog = false;
    label = 'Chama';
    showEdit = false;

    mounted() {
      if (this.$parent.$el) {
        console.log(this.$parent.$el.id)
        if(this.$parent.$el.id === 'drop'){
          this.showEdit = true
        }
      }
    }
  }
</script>

<style scoped>

</style>