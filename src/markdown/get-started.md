# 开始使用

首先，你需要[安装](#/doc/install)发财UI

然后只需要在你的代码中加入下列引用

```javascript
//引入组件
import {Button, Tabs, Switch, Dialog, Message, openDialog, popMessage} from "rich-ui-bald3r"
//引入样式文件
import 'rich-ui-bald3r/dist/lib/rich-ui.css';
```

就可以愉快地使用发财UI的所有组件了~

## Vue单文件组件

代码示例：

```html

<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>

<script>
    import {Button} from "rich-ui-bald3r"

    export default {
        components: {Button}
    }
</script>

```