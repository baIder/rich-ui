<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">

export default {
  name: "Markdown",
  props: {
    content: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown-body {
  color: #2F2F2F;
  font-family: 'Poppins', "Microsoft YaHei", -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
</style>