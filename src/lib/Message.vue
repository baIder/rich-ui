<template>
  <div ref="msgDiv" class="rich-message">
    <svg class="iconpark-icon" v-html="typeIndicator">
    </svg>
    <div class="rich-message-msgText">{{ message }}</div>
  </div>
</template>

<script lang="ts">

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
  },
  setup(props) {
    const typeIndicator = `<use href="#${props.msgType}"></use>`
    return {typeIndicator}
  }
}
</script>

<style lang="scss">
@import "../assets/helper.scss";

#msgDiv {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rich-message {
  top: 16px;
  left: 50%;
  transform: translateY(-100px);

  opacity: 0;
  width: max-content;
  padding: 12px 16px;
  margin-top: 16px;
  line-height: 1;
  z-index: 30;
  border-radius: $border-radius;
  background: $message-background;
  box-shadow: 0 0 15px fade_out(black, 0.8);

  transition: all 250ms;

  display: flex;
  align-items: center;

  &.message-active {
    transform: translateY(0px);
    opacity: 1;

  }

  > .iconpark-icon {
    width: 20px;
    height: 20px;
  }

  > .rich-message-msgText {
    margin-left: 8px;
    line-height: 1.5;
    font-size: 14px;
  }

}
</style>