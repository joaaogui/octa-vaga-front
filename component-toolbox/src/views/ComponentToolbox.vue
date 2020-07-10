<template>
  <v-row no-gutters class="fill-height">
    <v-col class="ComponentDrawer pa-8" cols="12" xs="12" sm="5" md="4" lg="3">
      <h2 class="display-1 font-weight-light mb-5 ">Component Toolbox</h2>
      <h4 class="subtitle-1 font-weight-light mb-10 ">Drag and drop the components below into the dashed workarea</h4>
      <drag id="drag" v-for="component in baseComponents" :key="component.type" :data="component" class="mb-6 mt-6">
        <v-divider class="mb-6"></v-divider>
        <TextField v-if="component.type === 'TextField'"/>
        <CheckBox v-if="component.type === 'CheckBox'"/>
        <Button v-if="component.type === 'Button'"/>
      </drag>
    </v-col>
    <v-col cols="12" xs="12" class="pa-1 dropArea" sm="7" md="8" lg="9">
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
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                          v-on="on" small @click="removeComponent(item.i)">mdi-delete</v-icon>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </TextField>
            <CheckBox v-if="item.type === 'CheckBox'">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                          v-on="on" small @click="removeComponent(item.i)">mdi-delete</v-icon>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </CheckBox>
            <Button v-if="item.type === 'Button'">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                          v-on="on" small @click="removeComponent(item.i)">mdi-delete</v-icon>
                </template>
                <span>Delete</span>
              </v-tooltip>
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
            {type: "CheckBox", w: 5, h: 1.85},
            {type: "Button", w: 3.3, h: 1}
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
  .dropArea {
    min-height: 50vh;
    max-width: 100%;
    border: 2px gray dotted;
    border-radius: 10px;
  }

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