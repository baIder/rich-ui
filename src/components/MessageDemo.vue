<template>
  <h1>Message 示例</h1>
  <Demo :component="Message1Demo"/>
  <Demo :component="Message2Demo"/>
  <Demo :component="Message3Demo"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Message1Demo from "./ComponentsDemo/Message1.demo.vue";
import Message2Demo from "./ComponentsDemo/Message2.demo.vue";
import Message3Demo from "./ComponentsDemo/Message3.demo.vue";

export default {
  name: "MessageDemo",
  components: {Demo},
  setup() {
    return {Message1Demo, Message2Demo, Message3Demo,}
  }
}
</script>

<style lang="scss" scoped>

</style>