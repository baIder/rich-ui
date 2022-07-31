<template>
  <div class="layout">
    <TopNav class="nav" toggle-aside-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <div class="aside-links-wrapper">
          <a class="aside-links-title">文档</a>
          <router-link to="/doc/intro">介绍</router-link>
          <router-link to="/doc/install">安装</router-link>
          <router-link to="/doc/get-started">开始使用</router-link>
          <a class="aside-links-title">组件列表</a>
          <router-link to="/doc/switch">Switch 组件</router-link>
          <router-link to="/doc/button">Button 组件</router-link>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
          <router-link to="/doc/message">Message 组件</router-link>
          <div class="aside-links-selected-indicator"></div>
        </div>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";

$asideIndex: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0 16px;
  height: 100%;
  z-index: $asideIndex;


  > .aside-links-wrapper {

    @for $i from 1 through 10 {
      a:nth-child(#{$i}).router-link-active ~ .aside-links-selected-indicator {
        transform: translateY(calc(54px * #{$i}));

      }
    }

    > a {
      margin: 10px 0 10px 10px;
      padding-left: 12px;
      list-style: none;
      height: 44px;
      width: 130px;
      background-color: transparent;
      display: flex;
      align-items: center;
      border-radius: 6px;
      text-decoration: none;

      transition: all 250ms;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }

      &.aside-links-title {
        padding-left: 4px;
        font-size: 24px;
        font-weight: 600;
        pointer-events: none;
      }
    }

    > .aside-links-selected-indicator {
      $width: 10px;

      position: absolute;
      height: 44px;
      background-color: white;
      width: 100%;
      top: 26px;
      z-index: -1;
      border-left: 4px solid darken(lightblue, 50%);

      transition: all 250ms;

      &::before {
        content: '';
        position: absolute;
        top: -$width;
        right: 0;
        width: $width;
        height: $width;
        background: transparent;
        border-bottom-right-radius: calc($width * 2);
        box-shadow: $width $width 0 $width white;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -$width;
        right: 0;
        width: $width;
        height: $width;
        background: transparent;
        border-top-right-radius: calc($width * 2);
        box-shadow: $width calc($width * -1) 0 $width white;
      }
    }
  }
}


main {
  overflow: auto;
}
</style>