<template>
  <template v-if="visible">
    <div ref="msgDiv" class="rich-message">
      <svg class="iconpark-icon" v-html="typeIndicator">
      </svg>
      <div class="rich-message-msgText">{{ message }}</div>
    </div>
  </template>
</template>

<script lang="ts">

import {onMounted, onUpdated, ref} from "vue";

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
  },
  setup(props) {
    const typeIndicator = `<use href="#${props.msgType}"></use>`
    return {typeIndicator}
  }
}
</script>

<style lang="scss">
@import "../assets/helper.scss";

.rich-message {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translate(-50%, -100px);

  opacity: 0;
  padding: 12px 16px;
  line-height: 1;
  z-index: 30;
  border-radius: $border-radius;
  background: $message-background;
  box-shadow: 0 0 15px fade_out(black, 0.8);

  transition: all 250ms;

  display: flex;
  align-items: center;

  > .iconpark-icon {
    width: 24px;
    height: 24px;
  }

  > .rich-message-msgText {
    margin-left: 8px;
    line-height: 1.5;
    font-size: 14px;
  }

  &.message-active {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
}
</style>