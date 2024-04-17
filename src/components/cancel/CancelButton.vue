<template>
  <component :is="'button'" class="button" :class="viewButton" :disabled="disabled">
    <span class="button__label">{{ text }}</span>

    <slot name="custom-icon" />
  </component>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  customIcon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  secondStyle: {
    type: Boolean,
    default: false,
  },
})

const viewButton = computed(() => {
  let str = ''
  if (props.disabled) str = str + ' is-disabled'
  if (props.loading) str = str + ` is-loading`
  if (props.size) str = str + ` is-${props.size}`
  if (props.ghost) str = str + ` is-ghost`
  if (props.transparent) str = str + ` is-transparent`
  if (props.secondStyle) str = str + ` is-second`
  if (props.pulse) str = str + ` is-pulse`
  return str
})
</script>

<style scoped lang="scss">
.button {
  text-align: center;
  color: #000521;
  background: #39cdcb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  border-radius: 2rem;
  border: 1px solid #80fef1;
  transition: 0.3s;

  &__icon {
    flex-shrink: 0;

    path {
      stroke: currentColor;
    }
  }

  &.is-ghost {
    background: #0b1233;
    color: #fff;
  }
  &.is-transparent {
    color: #b6b4be;
    background: none;
    border: none;
    font-weight: 400 !important;
  }

  &.is-second {
    border: 1px solid #1c254f;
    background: #0b1233;
    color: #b6b4be;
  }

  &.is-large {
    height: 5.8rem;
    font-weight: 700;
    font-size: 1.6rem;
  }

  &.is-small {
    height: 5.2rem;
    font-size: 1.5rem;
  }

  &.is-tiny {
    height: 3.2rem;
    font-size: 1.3rem;
  }

  &.is-disabled {
    background: #000521;
    border: 1px solid #1c254f;
    color: #b6b4be;
    pointer-events: none;
  }

  &.is-loading {
    pointer-events: none;
  }
}
</style>
