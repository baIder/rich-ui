<template>
  <article class="markdown-body" v-html="mdGetStarted">
  </article>
</template>

<script lang="ts">
import mdGetStarted from '../markdown/get-started.md'

export default {
  name: "GetStarted",
  setup() {
    return {mdGetStarted}
  }
}
</script>

<style lang="scss" scoped>

</style>