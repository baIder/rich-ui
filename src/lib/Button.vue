<template>
  <button :class="classes" :disabled="disabled" class="rich-button">
    <span v-if="loading" class="rich-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`rich-theme-${theme}`]: theme,
        [`rich-size-${size}`]: size,
        [`rich-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
@import "../assets/helper.scss";

.rich-button {
  box-sizing: border-box;
  height: $button-h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $button-color;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $button-blue;
    border-color: $button-blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.rich-theme-link {
    border-color: $button-themed-border-color;
    box-shadow: none;
    color: $button-blue;

    &:hover, &:focus {
      color: lighten($button-blue, 10%);
    }
  }

  &.rich-theme-text {
    border-color: $button-themed-border-color;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.rich-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.rich-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.rich-theme-button {
    &.rich-level-main {
      background: $button-blue;
      color: $button-font-level-color;
      border-color: $button-blue;

      &:hover,
      &:focus {
        background: darken($button-blue, 10%);
        border-color: darken($button-blue, 10%);
      }
    }

    &.rich-level-danger {
      background: $button-danger-background;
      border-color: $button-danger-background;
      color: $button-font-level-color;

      &:hover,
      &:focus {
        background: darken($button-danger-background, 10%);
        border-color: darken($button-danger-background, 10%);
      }
    }
  }

  &.rich-theme-link {
    &.rich-level-danger {
      color: $button-danger-background;

      &:hover,
      &:focus {
        color: darken($button-danger-background, 10%);
      }
    }
  }

  &.rich-theme-text {
    &.rich-level-main {
      color: $button-blue;

      &:hover,
      &:focus {
        color: darken($button-blue, 10%);
      }
    }

    &.rich-level-danger {
      color: $button-danger-background;

      &:hover,
      &:focus {
        color: darken($button-danger-background, 10%);
      }
    }
  }

  &.rich-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $button-disabled-color;

      &:hover {
        border-color: $button-disabled-color;
      }
    }
  }

  &.rich-theme-link, &.rich-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $button-disabled-color;
    }
  }

  > .rich-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $button-blue $button-blue $button-blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: rich-spin 1s infinite linear;
  }
}

@keyframes rich-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

</style>