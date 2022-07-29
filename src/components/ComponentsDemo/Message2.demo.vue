<demo>
可选提示类型
</demo>
<template>
  <div>
    <Button @click="toggle">Success</Button>
    <Message v-model:visible="x" message="这是一个Success类型的Message全局提醒" type="success"/>
    <Button @click="toggle">Warning</Button>
    <Message v-model:visible="x" message="这是一个Warning类型的Message全局提醒" type="warning"/>
    <Button @click="toggle">Error</Button>
    <Message v-model:visible="x" message="这是一个Error类型的Message全局提醒" type="error"/>
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