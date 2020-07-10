<template>
  <v-card class="pa-4">
    <p>checkbox</p>
    <v-checkbox v-for="(option, index) in optionList" :key="index" v-model="selected" :label="option" :value="option"
                hide-details="auto"></v-checkbox>
    <p v-if="showEdit" @click="addOption">adicionar</p>
  </v-card>
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