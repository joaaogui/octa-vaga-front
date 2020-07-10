<template>
  <div class="pr-1 pl-3" :class="showEdit ? 'activeComponent' : ''">
    <v-row class="text-left mt-1" no-gutters>
      <v-col cols="6">
        <div>{{title}}</div>
      </v-col>
      <v-col cols="6" class="text-right">
        <slot></slot>
        <v-tooltip v-if="showEdit" right>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs"
                    v-on="on" small @click.stop="dialog = true">mdi-pencil
            </v-icon>
          </template>
          <span>Edit</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-checkbox class="mt-0" v-for="(option, index) in optionList" :key="index" v-model="selected" :label="option"
                :value="option"
                hide-details="auto"
                readonly/>
    <div v-if="showEdit" class="mt-1 addText" @click="addOption"><u>adicionar</u></div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card class="pa-5">
        <v-text-field v-model="title" outlined
                      @keyup.enter="dialog = false"
                      hide-details="auto"
                      label="Digite a título do checkbox"></v-text-field>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class CheckBox extends Vue {
        optionList = ["opção 1", "opção 2",]
        selected = [];
        title = 'checkbox'
        showEdit = false;
        dialog = false;

        addOption() {
            this.optionList.push("opção " + (this.optionList.length + 1))
        }

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

  .addText {
    cursor: pointer;
  }
</style>