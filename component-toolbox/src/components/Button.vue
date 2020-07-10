<template>
  <div class="pr-1 pl-1 pb-2" :class="showEdit ? 'activeComponent' : ''">
    <div class="mb-1" v-if="!showEdit">button</div>
    <div style="text-align: right">
      <slot></slot>
      <v-icon small v-if="showEdit" @click.stop="dialog = true">mdi-pencil</v-icon>
    </div>
    <v-btn small dark color="black">{{label}}</v-btn>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card class="pa-5">
        <v-text-field v-model="label" outlined
                      hide-details="auto"
                      label="Digite a label do Botão"></v-text-field>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import {Component, Vue} from "vue-property-decorator";

  @Component()
  export default class Button extends Vue {
    dialog = false;
    label = 'Button';
    showEdit = false;

    mounted() {
      if (this.$parent.$el) {
        if (this.$parent.$el.id === 'drop') {
          this.showEdit = true
        }
      }
    }
  }
</script>

<style scoped>
  .activeComponent {
    border: 1px gray dashed;
  }
</style>