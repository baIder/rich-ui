<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>发财 UI </h1>
        <h2>年轻人的第一个 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/baIder/rich-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use href="#Vue"></use>
      </svg>
      <svg class="icon">
        <use href="#typescript"></use>
      </svg>
      <svg class="icon">
        <use href="#linggan"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Home',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  padding: 100px 0;
  color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>