<template>
  <div class="pr-1 pl-1 pb-2" :class="showEdit ? 'activeComponent' : ''">
    <div class="mb-1" v-if="!showEdit">button</div>
    <div style="text-align: right">
      <slot></slot>
      <EditIcon v-if="showEdit" v-on:edit="dialog = true"/>
    </div>
    <v-btn small dark :color="color">{{label}}</v-btn>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-color-picker v-model="color"></v-color-picker>
      <v-card class="pa-5">
        <v-text-field v-model="label" outlined
                      @keyup.enter="dialog = false"
                      hide-details="auto"
                      label="Digite a label do Botão"></v-text-field>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import EditIcon from "@/components/EditIcon.vue";
  @Component({
      components: {EditIcon}
  })
  export default class Button extends Vue {
    dialog = false;
    label = 'Button';
    color = 'gray';
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