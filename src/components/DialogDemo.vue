<template>
  <div>DialogDemo</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :cancel="f2" :close-on-click-overlay="false" :ok="f1">
    <template v-slot:title>
      <strong>加粗的提示</strong>
    </template>
    <template v-slot:content>
      <strong>内容1</strong>
      <div>内容2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      console.log(1);
      return false;
    };
    const f2 = () => {
      console.log(2);
    };
    const showDialog = () => {
      openDialog({title: '标题', content: '你好', ok() {console.log('OK');}, cancel() {console.log('cancel');}});
    };
    return {x, toggle, f1, f2, showDialog};
  }
};

</script>

<style lang="scss" scoped>

</style>