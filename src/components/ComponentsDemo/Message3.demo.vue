<demo>
可改提醒持续时间
</demo>
<template>
  <div>
    <Button @click="toggle">打开一个持续10s的提醒</Button>
    <Message v-model:visible="x" close-delay="10000" message="这是一个普通样式的Message全局提醒"/>
  </div>
</template>

<script lang="ts">
import Message from '../../lib/Message.vue'
import Button from "../../lib/Button.vue";
import {ref} from "vue";

export default {
  name: "Message1.demo",
  components: {Button, Message},
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return {x, toggle}
  }
}
</script>

<style lang="scss" scoped>

</style>