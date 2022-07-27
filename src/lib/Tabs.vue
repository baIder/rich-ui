<template>
  <div class="rich-tabs">
    <div class="rich-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :class="{selected:t===selected}" class="rich-tabs-nav-item"
           @click="select(t)">{{
          t
        }}
      </div>
    </div>
    <div class="rich-tabs-content">
      <component :is="current" :key="selected" class="rich-tabs-content-item"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from "vue";

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });
    const current = computed(() => {
      return (defaults.filter(tag => {
        return (tag.props.title === props.selected)
      })[0])
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select};
  }
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.rich-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>