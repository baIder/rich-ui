# 开始使用

首先，你需要[安装](#/doc/install)发财UI

然后只需要在你的代码中加入下列引用

```bash
import {Button, Tabs, Switch, Dialog, Message} from "rich-ui"
```

就可以愉快的使用发财UI的所有组件了~

## Vue单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
  import {Button, Tabs, Switch, Dialog, Message} from "rich-ui"

  export default 
    components: {Button}
  }
</script>
```