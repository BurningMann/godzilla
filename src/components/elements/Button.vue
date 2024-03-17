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
})

const viewButton = computed(() => {
  let str = ''
  if (props.disabled) str = str + ' is-disabled'
  if (props.loading) str = str + ` is-loading`
  return str
})
</script>

<style scoped lang="scss">
.button {
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  height: 5.8rem;
  border-radius: 0.83rem;
  font-weight: 700;
  border: none;
  transition: 0.3s;

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.is-loading {
    pointer-events: none;
  }

  &__icon {
    flex-shrink: 0;

    path {
      stroke: currentColor;
    }
  }
}
</style>
