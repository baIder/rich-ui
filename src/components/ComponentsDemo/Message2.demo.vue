<demo>
可选提醒类型
</demo>
<template>
  <div>
    <Button @click="popSuccessMsg">Success</Button>
    <Button @click="popWarningMsg">Warning</Button>
    <Button @click="popErrorMsg">Error</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import {popMessage} from "../../lib/popMessage";

export default {
  name: "Message1.demo",
  components: {Button},
  setup() {
    const popSuccessMsg = () => {
      popMessage({message: '这是一个Success提醒', msgType: 'success', closeDelay: '3000'})
    }
    const popWarningMsg = () => {
      popMessage({message: '这是一个Warning提醒', msgType: 'warning', closeDelay: '3000'})
    }
    const popErrorMsg = () => {
      popMessage({message: '这是一个Error提醒', msgType: 'error', closeDelay: '3000'})
    }
    return {popErrorMsg, popSuccessMsg, popWarningMsg}
  }
}
</script>