<template>
  <div class="layout">
    <TopNav class="nav" toggle-aside-button-visible/>
    <div class="content">
      <aside id="asideBar">
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
      <div id="asideBar-shade" class="asideBar-shade"></div>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {onMounted} from 'vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    onMounted(() => {
      const topNav = document.getElementById('topNav')
      topNav.classList.add('inPageDoc')
    })
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

.asideBar-shade {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;

  &.active {
    display: block;
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

  transition: all 250ms;

  @media (max-width: 500px) {
    box-shadow: 0 0 5px fade_out(black, 0.5);
    left: -160px;
  }

  &.active {
    left: 0;
  }


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
      //background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      border-radius: 6px;
      text-decoration: none;

      transition: all 250ms;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }

      &.aside-links-title {
        background-color: transparent;
        padding-left: 4px;
        font-size: 24px;
        font-weight: 600;
        pointer-events: none;
        border-radius: 0;
        border-bottom: 3px solid rgba(0, 0, 0, 0.2);
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
      @media (max-width: 500px) {
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
      }

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