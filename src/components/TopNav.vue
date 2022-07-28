<template>
  <div class="topNav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use href="#qiandai"/>
      </svg>
      <span class="logo-text">发财UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside">
      <use href="#colorMenu"/>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav.vue',
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
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
      margin: 0 1em;
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