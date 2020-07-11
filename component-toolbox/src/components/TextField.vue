<template>
  <div class="pr-1 pl-1 pb-2" :class="showEdit ? 'activeComponent' : ''">
    <div style="text-align: right">
      <slot></slot>
      <EditIcon v-if="showEdit" v-on:edit="dialog = true"/>
    </div>

    <v-text-field outlined :value="placeholder" style="cursor: pointer"
                  disabled
                  hide-details="auto"
                  :label="label"></v-text-field>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card class="pa-5">
        <v-text-field v-model="label" outlined
                      @keyup.enter="dialog = false"
                      hide-details="auto"
                      label="Digite a label do text field"></v-text-field>
      </v-card>
      <v-card class="pa-5">
        <v-text-field v-model="placeholder" outlined
                      @keyup.enter="dialog = false"
                      hide-details="auto"
                      label="Digite o texto do placeholder"></v-text-field>
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
    export default class TextField extends Vue {
        showEdit = false
        dialog = false
        label = 'input text'
        placeholder = 'placeholder'

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