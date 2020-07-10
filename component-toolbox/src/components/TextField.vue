<template>
  <div class="pr-1 pl-1 pb-2" :class="showEdit ? 'activeComponent' : ''">
    <div style="text-align: right">
      <slot></slot>
      <v-icon small v-if="showEdit" @click.stop="dialog = true">mdi-pencil</v-icon>
    </div>
    <v-text-field outlined value=" " style="cursor: pointer"
                  disabled
                  hide-details="auto"
                  label="input text"></v-text-field>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class TextField extends Vue {
        showEdit = false

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