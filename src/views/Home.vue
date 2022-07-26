<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>发财 UI </h1>
      <h2>年轻人的第一个 UI 框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
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

</style>