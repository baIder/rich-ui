# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```bash
import {Button, Tabs, Switch, Dialog} from "rich-ui"
```

就可以使用我提供的组件了。

## Vue单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
  import {Button, Tabs, Switch, Dialog} from "rich-ui"

  export default 
    components: {Button}
  }
</script>
```