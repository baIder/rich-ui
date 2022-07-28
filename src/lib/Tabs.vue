<template>
  <div class="rich-tabs">
    <div ref="container" class="rich-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :ref="el=>{if(t===selected) selectedItem = el}"
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
import {computed, onMounted, ref, watchEffect} from "vue";

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })

    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });

    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";

.rich-tabs {
  &-nav {
    display: flex;
    color: $tabs-font-color;
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
        color: $tabs-blue;
      }


    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $tabs-blue;
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