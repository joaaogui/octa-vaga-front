<template>
  <div class="pr-1 pl-3" :class="showEdit ? 'activeComponent' : ''">
    <v-row class="text-left mt-1" no-gutters>
      <v-col cols="6">
        <div>checkbox</div>
      </v-col>
      <v-col cols="6" class="text-right">
        <slot></slot>
        <v-icon small v-if="showEdit" @click.stop="dialog = true">mdi-pencil</v-icon>
      </v-col>
    </v-row>

    <v-checkbox class="mt-0" v-for="(option, index) in optionList" :key="index" v-model="selected" :label="option"
                :value="option"
                hide-details="auto"
                readonly/>
    <div v-if="showEdit" class="mt-1 addText" @click="addOption"><u>adicionar</u></div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class CheckBox extends Vue {
        optionList = ["opção 1", "opção 2",]
        selected = [];
        showEdit = false;

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

  .addtext {
    cursor: pointer;
  }
</style>