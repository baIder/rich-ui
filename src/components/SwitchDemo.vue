<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Switch1Demo from './ComponentsDemo/Switch1.demo.vue'
import Switch2Demo from './ComponentsDemo/Switch2.demo.vue'

import {ref} from 'vue';
import Demo from "./Demo.vue";

export default {
  name: 'SwitchDemo',
  components: {Demo, Button},
  setup() {
    const bool = ref(true);
    return {bool, Switch1Demo, Switch2Demo};
  }
};
</script>

<style lang="scss" scoped>

</style>