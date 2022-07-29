<template>
  <template v-if="visible">
    <Teleport to="body">
      <div ref="msgDiv" class="rich-message">
        <svg class="iconpark-icon" v-html="typeIndicator">
        </svg>
        <div class="rich-message-msgText">{{ message }}</div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">

import {onUpdated, ref} from "vue";

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
      type: String,
      default: '3000',
    }
  },
  setup(props, context) {
    let msgDiv = ref(null)
    const typeIndicator = `<use href="#${props.msgType}"></use>`
    onUpdated(() => {
      setTimeout(() => {
        context.emit('update:visible', false)
      }, props.closeDelay * 1)
    })

    return {typeIndicator, msgDiv}
  }
}
</script>

<style lang="scss">
@import "../assets/helper.scss";

.rich-message {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  line-height: 1;
  z-index: 30;

  border-radius: $border-radius;
  background: $message-background;
  box-shadow: 0 0 15px fade_out(black, 0.8);

  display: flex;

  .iconpark-icon {
    width: 1em;
    height: 1em;
  }

  //> .rich-message-typeIndicator {
  //  width: 16px;
  //  height: 16px;
  //
  //  > .iconpark-icon {
  //    width: 16px;
  //    height: 16px;
  //  }
  //
  //}

  > .rich-message-msgText {

  }
}
</style>