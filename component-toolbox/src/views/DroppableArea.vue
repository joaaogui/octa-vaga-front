<template>
  <drop @drop="onDrop" :class="borders ? 'bordersArea' : 'droppableArea'">
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
                      v-on="on" small @click="removeComponent(item.i)">mdi-delete
              </v-icon>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </TextField>
        <CheckBox v-if="item.type === 'CheckBox'">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs"
                      v-on="on" small @click="removeComponent(item.i)">mdi-delete
              </v-icon>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </CheckBox>
        <Button v-if="item.type === 'Button'">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs"
                      v-on="on" small @click="removeComponent(item.i)">mdi-delete
              </v-icon>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </Button>
      </grid-item>
    </grid-layout>
  </drop>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TextField from "@/components/TextField.vue";
    import CheckBox from "@/components/CheckBox.vue";
    import Button from "@/components/Button.vue";
    import {Drop} from "vue-easy-dnd";
    // @ts-ignore
    import VueGridLayout from 'vue-grid-layout';


    @Component({
        components: {
            Drop,
            TextField,
            CheckBox,
            Button,
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        }
    })
    export default class DroppableArea extends Vue {
        get activeComponents() {
            return this.$store.state.activeComponents;
        }
        get borders() {
            return this.$store.state.borders;
        }

        onDrop(event: any) {
            const component: { [k: string]: any } = {};
            const {h, type, w} = event.data;
            component.h = h
            component.w = w
            component.type = type
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
  .droppableArea {
    height: 100%;
    background-color: white;
    border: 2px gray dotted;
    border-radius: 10px;
    z-index: 2;
  }

  .droppableArea.drop-allowed {
    border: 2px black dotted;
  }

  .bordersArea {
    height: 100%;
    background-color: white;
    z-index: 2;
  }
</style>