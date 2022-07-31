<template>
  <div id="topNav" class="topNav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use href="#qiandai"/>
      </svg>
      <span class="logo-text">发财UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">
          <svg class="topNav-menu-icon">
            <use href="#document"></use>
          </svg>
          <span class="topNav-menu-text">组件文档</span>
        </router-link>
      </li>
      <li>
        <a href="https://bald3r.wang">
          <svg class="topNav-menu-icon">
            <use href="#blog"></use>
          </svg>
          <span class="topNav-menu-text">我的博客</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/baIder/rich-ui">
          <svg class="topNav-menu-icon">
            <use href="#github"></use>
          </svg>
          <span class="topNav-menu-text">GitHub</span>
        </a>
      </li>
    </ul>
    <svg v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside">
      <use href="#colorMenu"/>
    </svg>
  </div>
</template>

<script lang="ts">
import {toggleActive} from "../lib/toggleActive.ts";

export default {
  name: 'TopNav.vue',
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: true,
    }
  },
  setup() {
    const toggleAside = () => {
      toggleActive('asideBar')
      toggleActive('asideBar-shade')
    };
    return {toggleAside};
  }


};
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";


.topNav {
  display: flex;
  color: $topNav-font-color;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  &.inPageDoc {
    box-shadow: 0 0 3px fade_out(black, 0.5);
    background: rgba(183, 233, 230, 1);
  }

  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;

    > svg {
      width: 32px;
      height: 32px;
    }

    > .logo-text {
      text-decoration: none;
      font-size: 16px;
      padding-left: 12px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;

    > li {
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;

        > .topNav-menu-icon {
          margin-right: 4px;
          color: $topNav-font-color;
          width: 1.1em;
          height: 1.1em;
        }
      }

    }
  }

  .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>