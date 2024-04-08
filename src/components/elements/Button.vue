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
  gray: {
    type: Boolean,
    default: false,
  },
  yellow: {
    type: Boolean,
    default: false,
  },
  black: {
    type: Boolean,
    default: false,
  },
  pulse: {
    type: Boolean,
    default: false,
  },
})

const viewButton = computed(() => {
  let str = ''
  if (props.disabled) str = str + ' is-disabled'
  if (props.loading) str = str + ` is-loading`
  if (props.size) str = str + ` is-${props.size}`
  if (props.gray) str = str + ` is-gray`
  if (props.yellow) str = str + ` is-yellow`
  if (props.black) str = str + ` is-black`
  if (props.pulse) str = str + ` is-pulse`
  return str
})
</script>

<style scoped lang="scss">
.button {
  text-align: center;
  color: #fff;
  background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  border-radius: 0.83rem;
  border: none;
  transition: 0.3s;

  &__icon {
    flex-shrink: 0;

    path {
      stroke: currentColor;
    }
  }

  &.is-pulse {
    box-shadow: 0 0 0 0 rgba(100, 43, 114, 0.7);
    transform: scale(0.9);
    animation: pulse 2s ease infinite;

    @keyframes pulse {
      70% {
        box-shadow: 0 0 0 5px rgba(100, 43, 114, 0.3);
        transform: scale(1);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(100, 43, 114, 0.3);
        transform: scale(0.9);
      }
    }
  }

  &.is-gray {
    background: #f0e9f0;
    color: var(--c-black);
  }
  &.is-yellow {
    background: #ffc43a;
    color: var(--c-black);
  }
  &.is-black {
    background: #000;
    color: var(--c-black);
  }

  &.is-large {
    height: 5.8rem;
    font-weight: 700;
    font-size: 1.8rem;
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
    opacity: 0.5;
    pointer-events: none;
  }

  &.is-loading {
    pointer-events: none;
  }
}
</style>
