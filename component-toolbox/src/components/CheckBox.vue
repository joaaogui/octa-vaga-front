<template>
  <div class="pr-1 pl-3" :class="showEdit && !borders ? 'activeComponent' : ''">
    <v-row class="text-left mt-1" no-gutters>
      <v-col cols="6">
        <div>{{title}}</div>
      </v-col>
      <v-col cols="6" class="text-right">
        <slot></slot>
        <EditIcon v-if="showEdit" v-on:edit="dialog = true"/>
      </v-col>
    </v-row>

    <v-checkbox class="mt-0" v-for="(option, index) in optionList" :key="index" v-model="selected" :label="option"
                :value="option"
                hide-details="auto"
                readonly/>
    <div v-if="showEdit" class="mt-1 addText" @click="addOption"><u>add</u></div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card class="pa-5">
        <v-text-field v-model="title" outlined
                      @keyup.enter="dialog = false"
                      hide-details="auto"
                      counter
                      maxlength="20"
                      label="Enter the title of the checkbox"></v-text-field>
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
    export default class CheckBox extends Vue {
        optionList = ["Option 1", "Option 2",]
        selected = [];
        title = 'checkbox'
        showEdit = false;
        dialog = false;
        get borders() {
            return this.$store.state.borders;
        }
        addOption() {
            this.optionList.push("Option " + (this.optionList.length + 1))
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