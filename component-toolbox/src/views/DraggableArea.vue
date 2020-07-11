<template>
  <div>
    <h2 class="display-1 font-weight-light mb-5 ">Component Toolbox</h2>
    <h4 class="subtitle-1 font-weight-light mb-10 ">Drag and drop the components below into the dashed workarea</h4>
    <drag id="drag" v-for="component in baseComponents" :key="component.type" :data="component" class="mb-6 mt-6">
      <v-divider class="mb-6"></v-divider>
      <TextField v-if="component.type === 'TextField'"/>
      <CheckBox v-if="component.type === 'CheckBox'"/>
      <Button v-if="component.type === 'Button'"/>
    </drag>
  </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TextField from "@/components/TextField.vue";
    import CheckBox from "@/components/CheckBox.vue";
    import Button from "@/components/Button.vue";
    import {Drag} from "vue-easy-dnd";

    @Component({
        components: {
            Drag,
            TextField,
            CheckBox,
            Button,
        }
    })
    export default class DraggableArea extends Vue {
        baseComponents = [
            {type: "TextField", w: 5, h: 1.45},
            {type: "CheckBox", w: 5, h: 1.85},
            {type: "Button", w: 3.3, h: 1}
        ]
    }
</script>
<style scoped>
</style>