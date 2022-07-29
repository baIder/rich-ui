<template>
  <h1>Message 示例</h1>
  <Demo :component="Message1Demo"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Message1Demo from "./ComponentsDemo/Message1.demo.vue";

export default {
  name: "MessageDemo",
  components: {Demo},
  setup() {
    return {Message1Demo}
  }
}
</script>

<style lang="scss" scoped>

</style>