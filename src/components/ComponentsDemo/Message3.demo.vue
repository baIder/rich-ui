<demo>
可改提醒持续时间
</demo>
<template>
  <div>
    <Button @click="pop10sMsg">打开一个持续10s的提醒</Button>
  </div>
</template>

<script lang="ts">
import {Button, popMessage} from "../../lib/index";

export default {
  name: "Message1.demo",
  components: {Button},
  setup() {
    const pop10sMsg = () => {
      popMessage({message: '这是一个持续10s的提醒', closeDelay: '10000'})
    }
    return {pop10sMsg}
  }
}
</script>