<template>
  <article class="markdown-body" v-html="mdInstall">
  </article>
</template>

<script lang="ts">
import mdInstall from '../markdown/install.md'

export default {
  name: "Install",
  setup() {
    return {mdInstall}
  }
}
</script>

<style lang="scss" scoped>

</style>