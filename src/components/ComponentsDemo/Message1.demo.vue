<demo>
普通提醒
</demo>
<template>
  <div>
    <Button @click="popNormalMsg">打开一个普通提醒</Button>
  </div>
</template>

<script lang="ts">
import {Button, popMessage} from "../../lib/index";

export default {
  name: "Message1.demo",
  components: {Button},
  setup() {
    const popNormalMsg = () => {
      popMessage({
        message: '这是一个全局显示的普通提醒',
      })
    }
    return {popNormalMsg}
  }
}
</script>