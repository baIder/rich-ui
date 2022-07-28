<template>
  <article class="markdown-body" v-html="mdIntro">

  </article>
</template>

<script lang="ts">
import mdIntro from '../markdown/intro.md'

export default {
  name: "Intro",
  setup() {
    return {mdIntro}
  }
}
</script>

<style lang="scss" scoped>

</style>