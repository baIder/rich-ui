<demo>
支持 disabled
</demo>
<template>
  <div class="Button4demoWrapper">
    <Button disabled>禁用按钮</Button>
    <Button disabled theme="link">禁用链接按钮</Button>
    <Button disabled theme="text">禁用文字按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";

export default {
  name: "Button1.demo",
  components: {Button}
}
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .Button4demoWrapper {
    > button {
      margin: 0 0 0 2px;
      padding: 12px;

      &.rich-theme-link {
        margin: 0 0 0 2px;
        padding: 0 4px;
      }

      &.rich-theme-text {
        margin: 0 0 0 2px;
        padding: 0 4px;
      }
    }
  }
}


</style>