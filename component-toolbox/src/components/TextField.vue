<template>
  <div>
  <v-icon v-if="showEdit" @click.stop="dialog = true" >mdi-pencil</v-icon>
  <v-text-field outlined value=" " style="cursor: pointer"
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