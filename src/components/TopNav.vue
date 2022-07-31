<template>
  <div id="topNav" class="topNav">
    <router-link class="topNav-left-logo" to="/">
      <svg class="topNav-left-logo-icon">
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
import Button from '../lib/Button.vue'

export default {
  name: 'TopNav.vue',
  components: {Button},

  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false,
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

  > .topNav-left-logo {
    text-decoration: none;
    margin-right: auto;
    display: flex;
    align-items: center;
    transition: all 250ms;

    &:hover {
      color: $topNav-font-hover-color;
    }

    > svg {
      width: 32px;
      height: 32px;
    }

    > .logo-text {
      font-size: 20px;
      font-weight: bolder;
      letter-spacing: 2px;
      padding-left: 8px;
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
        margin-right: 8px;
        background: transparent;
        color: $topNav-font-color;
        padding: 0;
        text-decoration: none;

        transition: all 250ms;

        &:hover {
          color: $topNav-font-hover-color;
        }

        > .topNav-menu-text {
          letter-spacing: 1px;
        }

        > .topNav-menu-icon {
          margin-right: 4px;
          color: inherit;
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
    > .topNav-left-logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>