<template>
  <v-row no-gutters class="fill-height">
    <v-col class="ComponentDrawer pa-5" cols="4">
      <h1>Toolbox</h1>
      <drag v-for="element in baseComponents" :key="element.type" :data="element" class="mt-4">
        <TextField v-if="element.type === 'TextField'"/>
        <CheckBox v-if="element.type === 'CheckBox'"/>
        <Button v-if="element.type === 'Button'"/>
      </drag>
    </v-col>
    <v-col cols="8">
      <drop @drop="onDrop" style="height:100%" three-line class="my-list">
        <vue-draggable-resizable
          style="text-align: right"
          :grid=[20,20]
          :parent="true"
          class="list-group-item"
          v-for="(element, index) in ComponentList"
          :key="index"
        >
          <v-btn @click="removeComponent(index)" text small> x</v-btn>
          <TextField v-if="element.type === 'TextField'"/>
          <CheckBox v-if="element.type === 'CheckBox'"/>
          <Button v-if="element.type === 'Button'"/>
        </vue-draggable-resizable>
      </drop>
    </v-col>
  </v-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TextField from "@/components/TextField.vue";
    import CheckBox from "@/components/CheckBox.vue";
    import Button from "@/components/Button.vue";
    import {Drag, Drop} from "vue-easy-dnd";

    @Component({
        components: {
            TextField,
            CheckBox,
            Button,
            Drag,
            Drop
        }
    })
    export default class ComponentToolbox extends Vue {
        baseComponents = [
            {type: "TextField", id: 1, label: "Label"},
            {type: "CheckBox", id: 2, itens: 3},
            {type: "Button", id: 3, label: "Button"}
        ]

        get ComponentList() {
            const components = this.$store.state.componentList; //this.todos;
            return components;
        }

        onDrop(event: any) {
            this.$store.commit("addComponent", event.data)
        }

        removeComponent(index: any) {
            this.$store.commit("removeComponent", index)
        }
    }
</script>

<style scoped>

  .redBorder {
    border: 1px solid red;
  }

  .ComponentDrawer {
    background: grey;
  }
</style>