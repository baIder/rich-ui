<template>
  <div class="rich-tabs">
    <div ref="container" class="rich-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :ref="el=>{if(el) navItems[index] = el}"
           :class="{selected:t===selected}"
           class="rich-tabs-nav-item" @click="select(t)">{{ t }}
      </div>
      <div ref="indicator" class="rich-tabs-nav-indicator"></div>
    </div>
    <div class="rich-tabs-content">
      <component :is="current" :key="current.props.title" class="rich-tabs-content-item"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref} from "vue";

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left: left1} = container.value.getBoundingClientRect()
      const {left: left2} = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
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
    return {defaults, titles, current, select, navItems, indicator, container};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>