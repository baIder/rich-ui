<template>
  <div ref="msgDiv" class="rich-message">
    <div class="rich-message-icon" v-html="typeIndicator">
    </div>
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
    const msgIcons = {
      'normal': `<svg style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M68.158 512a443.842 443.842 0 1 0 887.684 0 443.842 443.842 0 1 0-887.684 0Z" fill="#1890FF"/><path style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M512 617.677c-21.135 0-42.27-21.136-42.27-42.271V265.421c0-21.135 21.135-42.27 42.27-42.27s42.27 21.135 42.27 42.27v317.03c0 14.09-21.135 35.226-42.27 35.226zm-49.316 140.902a49.316 49.316 0 1 0 98.632 0 49.316 49.316 0 1 0-98.632 0Z" fill="#FFF"/></svg>`,
      'warning': `<svg style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M68.158 512a443.842 443.842 0 1 0 887.684 0 443.842 443.842 0 1 0-887.684 0Z" fill="#F9D65D"/><path style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M512 617.677c-21.135 0-42.27-21.136-42.27-42.271V265.421c0-21.135 21.135-42.27 42.27-42.27s42.27 21.135 42.27 42.27v317.03c0 14.09-21.135 35.226-42.27 35.226zm-49.316 140.902a49.316 49.316 0 1 0 98.632 0 49.316 49.316 0 1 0-98.632 0Z" fill="#FFF"/></svg>`,
      'error': `<svg style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path data-follow-fill="#F5222D" style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M512 966.781C260.837 966.781 57.219 763.163 57.219 512S260.837 57.219 512 57.219 966.781 260.837 966.781 512 763.163 966.781 512 966.781zM554.873 512 709.83 357.044a30.305 30.305 0 1 0-42.874-42.874L512 469.127 357.044 314.17a30.305 30.305 0 1 0-42.874 42.874L469.127 512 314.17 666.956a30.305 30.305 0 1 0 42.874 42.874L512 554.873 666.956 709.83a30.305 30.305 0 1 0 42.874-42.874L554.873 512z" fill="#F5222D"/></svg>`,
      'success': `<svg style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path data-follow-fill="#52C41A" style="text-shadow:transparent 0 0 0,rgba(0,0,0,.68) 0 0 0" d="M512 56.889c251.358 0 455.111 203.753 455.111 455.111S763.358 967.111 512 967.111 56.889 763.358 56.889 512 260.642 56.889 512 56.889zm-79.963 587.093-96.62-96.62a45.511 45.511 0 1 0-64.353 64.353l128.751 128.75a45.511 45.511 0 0 0 64.353 0L785.93 418.658a45.511 45.511 0 1 0-64.307-64.353L431.991 643.891z" fill="#52C41A"/></svg>`,
    }
    const typeIndicator = msgIcons[props.msgType]

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
  z-index: 100;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rich-message {
  transform: translateY(-100px);

  opacity: 0;
  width: max-content;
  padding: 12px 16px;
  margin-top: 16px;
  line-height: 1;
  z-index: 100;
  border-radius: $border-radius;
  background: $message-background;
  box-shadow: 0 0 15px fade_out(black, 0.8);

  transition: all 250ms;

  display: flex;
  align-items: center;

  &.rich-message-type-warning {
    background: #FFFBE5;
  }

  &.rich-message-type-error {
    background: #FFF0F0;
  }

  &.rich-message-type-success {
    background: #deffe0;
  }

  &.message-active {
    transform: translateY(0px);
    opacity: 1;

  }

  > .rich-message-icon {
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