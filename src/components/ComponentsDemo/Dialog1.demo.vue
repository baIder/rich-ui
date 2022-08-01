<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :cancel="f2" :closeOnClickOverlay="false" :ok="f1">
      <template v-slot:content>
        <strong>这是一行加粗的文字</strong>
        <div>这是一行普通的文字</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Dialog, Button} from '../../lib/index'
import {ref} from 'vue'


export default {
  name: "Dialog1.demo",
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
    }
    const f2 = () => {
    }
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>