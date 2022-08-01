<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">
      <div>
        这是导航1中的内容，内容支持html
      </div>
      <strong>支持粗体</strong>
      <br/>
      <a href="#">支持超链接</a>
    </Tab>
    <Tab title="导航2">
      <div>
        这是导航2中的内容
      </div>
    </Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from '../../lib/index'
import {ref} from 'vue'

export default {
  name: "Tabs1.demo",
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航1')
    return {
      x
    }
  }
}
</script>