<template>
  <div class="layout">
    <TopNav class="nav" toggle-aside-button-visible/>
    <div class="content">
      <aside id="asideBar">
        <div class="aside-links-wrapper">
          <a class="aside-links-title">文档</a>
          <router-link to="/doc/intro">介绍</router-link>
          <router-link to="/doc/install">如何安装</router-link>
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
import {toggleActive} from "../lib/toggleActive";

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    onMounted(() => {
      const topNav = document.getElementById('topNav')
      topNav.classList.add('inPageDoc')
      const asideBar = document.getElementById('asideBar')
      const asideShade = document.getElementById('asideBar-shade')
      const width = document.body.clientWidth
      if (width <= 500) {
        asideBar.addEventListener('click', (e) => {
          //@ts-ignore
          if (e.target.tagName.toLowerCase() === 'a') {
            toggleActive('asideBar')
            toggleActive('asideBar-shade')
          }
        })
        asideShade.addEventListener('click', () => {
          toggleActive('asideBar')
          toggleActive('asideBar-shade')
        })
      }
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
    padding: 36px;
    background: white;
    overflow: auto;
    box-shadow: 0 0 5px fade_out(black, 0.5);
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
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0 16px;

  height: 100%;
  background: #f1f3fe;
  width: 150px;
  z-index: $asideIndex;

  transition: all 250ms;

  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 5px fade_out(black, 0.5);

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
      display: flex;
      align-items: center;
      border-radius: 6px;
      text-decoration: none;

      transition: all 250ms;
      color: $features-font-color;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 5px fade_out(black, 0.5);
      }

      &.router-link-active {
        pointer-events: none;
      }

      &.aside-links-title {
        background-color: transparent;
        padding-left: 4px;
        font-size: 24px;
        font-weight: 600;
        pointer-events: none;
        border-radius: 0;
        border-bottom: 3px solid rgba(0, 0, 0, 0.2);
        color: $features-font-color;
      }
    }

    > .aside-links-selected-indicator {
      $width: 5px;

      position: absolute;
      height: 44px;
      background-color: white;
      width: 105%;
      top: 26px;
      z-index: -1;
      border-left: 4px solid #F08329;
      box-shadow: -5px 0 5px fade_out(black, 0.5);

      transition: all 250ms;
      @media (max-width: 500px) {
        width: 100%;
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
        box-shadow: 2px 2px 0 2px white;
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
        box-shadow: 2px -2px 0 2px white;
      }
    }
  }
}

</style>