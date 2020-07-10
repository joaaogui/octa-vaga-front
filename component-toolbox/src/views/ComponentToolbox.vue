<template>
  <v-row no-gutters class="fill-height">
    <v-col class="ComponentDrawer pa-8" cols="4">
      <h2 class="display-1 font-weight-light mb-10 ">Component Toolbox</h2>
      <drag id="drag" v-for="component in baseComponents" :key="component.type" :data="component" class="mb-6 mt-6">
        <TextField v-if="component.type === 'TextField'"/>
        <v-divider class="mb-6"></v-divider>
        <CheckBox v-if="component.type === 'CheckBox'"/>
        <Button v-if="component.type === 'Button'"/>
      </drag>
    </v-col>
    <v-col cols="8" class="pa-5">
      <drop @drop="onDrop" style="height:100%">
        <grid-layout
          :layout.sync="activeComponents"
          :col-num="12"
          :row-height="60"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :margin="[2,2]"
          :use-css-transforms="true"
        >
          <grid-item id="drop"
                     v-for="item in activeComponents"
                     :x="item.x"
                     :y="item.y"
                     :w="item.w"
                     :h="item.h"
                     :i="item.i"
                     :key="item.i">
            <TextField v-if="item.type === 'TextField'">
              <v-icon small @click="removeComponent(item.i)">mdi-delete</v-icon>
            </TextField>
            <CheckBox v-if="item.type === 'CheckBox'">
              <v-icon small @click="removeComponent(item.i)">mdi-delete</v-icon>
            </CheckBox>
            <Button v-if="item.type === 'Button'">
              <v-icon small @click="removeComponent(item.i)">mdi-delete</v-icon>
            </Button>
          </grid-item>
        </grid-layout>
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
    // @ts-ignore
    import VueGridLayout from 'vue-grid-layout';


    @Component({
        components: {
            TextField,
            CheckBox,
            Button,
            Drag,
            Drop,
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        }
    })
    export default class ComponentToolbox extends Vue {
        baseComponents = [
            {type: "TextField", w: 5, h: 1.45},
            {type: "CheckBox", w: 3, h: 1.85},
            {type: "Button", w: 2, h: 1}
        ]

        get activeComponents() {
            return this.$store.state.activeComponents;
        }

        onDrop(event: any) {
            const component: { [k: string]: any } = {};
            component.h = event.data.h
            component.w = event.data.w
            component.type = event.data.type
            component.x = 1
            component.y = 7
            this.$store.commit("addComponent", component)
        }

        removeComponent(id: number) {
            this.$store.commit("removeComponent", id)
        }
    }
</script>

<style scoped>

  .redBorder {
    border: 1px solid red;
  }

  .greenBorder {
    border: 1px solid green;
  }

  .ComponentDrawer {
    background: #ededed;
  }
</style>