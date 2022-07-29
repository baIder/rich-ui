<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="rich-message">
        <span class="rich-message-typeIndicator">{{ msgType }}</span>
        <div class="rich-message-msgText">{{ message }}</div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">

import {onMounted} from "vue";

export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true,
    },
    msgType: {
      type: String,
      default: 'normal',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeDelay: {
      type: Number,
      default: 3000,
    }
  },
  setup(props, context) {
    onMounted(() => {
      setTimeout(() => {
        context.emit('update:visible', false)
        console.log(props.closeDelay)
        console.log('3s')
      }, props.closeDelay)
    })

  }
}
</script>

<style lang="scss">
@import "../assets/helper.scss";

.rich-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 50px;
  border: 1px solid red;
  z-index: 30;
}
</style>