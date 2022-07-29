<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="rich-message">
        <svg class="iconpark-icon" v-html="typeIndicator">
          <!--          <use href="#error"></use>-->
        </svg>
        <!--        <span class="rich-message-typeIndicator" v-html="typeIndicator"></span>-->
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
    const typeIndicator = `<use href="#${props.msgType}"></use>`
    // const typeIndicator = `<svg class="iconpark-icon"><use href="#${props.msgType}"></use></svg>`
    onMounted(() => {
      setTimeout(() => {
        context.emit('update:visible', false)
        console.log(props.closeDelay)
        console.log('3s')
      }, props.closeDelay)
    })
    return {typeIndicator}
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