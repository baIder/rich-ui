<demo>
用openMessage调用提醒
</demo>
<template>
  <div>
    <Button @click="toggle">点击这里调用提醒</Button>
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