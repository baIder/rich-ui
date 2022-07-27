<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
    <component :is="c" v-for="(c,index) in defaults" :key="index"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    return {defaults, titles};
  }
};
</script>

<style lang="scss" scoped>

</style>