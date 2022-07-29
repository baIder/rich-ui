<demo>
普通提示
</demo>
<template>
  <div>
    <Button @click="toggle">打开一个普通提示</Button>
    <Message v-model:visible="x" message="hi"/>
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