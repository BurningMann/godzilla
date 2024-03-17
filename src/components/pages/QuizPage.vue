<script setup>
import Button from '../../components/elements/Button.vue'
import Dropdown from '../../components/elements/Dropdown.vue'
import { ref } from 'vue'

const relationship = ref('')

const variants = ref({
  male: [
    {
      icon: '👱‍♂️',
      label: 'Single',
      value: 'single',
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
    },
    {
      icon: '🔱',
      label: 'Looking',
      value: 'looking',
    },
    {
      icon: '👩‍🦰️',
      label: 'Other',
      value: 'other',
    },
  ],
  female: [
    {
      icon: '👩‍🦰️',
      label: 'Single',
      value: 'single',
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
    },
    {
      icon: '🔱',
      label: 'Looking for a soul mate',
      value: 'looking',
    },
    {
      icon: '👱‍♂️',
      label: 'Other',
      value: 'other',
    },
  ],
})
</script>

<template>
  <div class="quiz-page">
    <div>
      <div class="step-title">What is your relationship status?</div>
      <div class="variants-list">
        <label
          v-for="item in variants['male']"
          :key="item.value"
          class="variant-item"
          :class="{ 'is-active': relationship === item.value }"
        >
          <input v-model="relationship" type="radio" :value="item.value" />
          <div class="variant-item__icon">{{ item.icon }}</div>
          <div class="variant-item__text">{{ item.label }}</div>
        </label>
      </div>
    </div>

    <div>
      <Dropdown>
        <template #trigger> qwe </template>
        <template #content>
          <div>qwe</div>
          <div>qwe</div>
          <div>qwe</div>
          <div>qwe</div>
          <div>qwe</div>
          <div>qwe</div>
          <div>qwe</div>
        </template>
      </Dropdown>
    </div>

    <div class="footer-box"><Button :text="'Continue'" :disabled="!relationship" /></div>
  </div>
</template>

<style scoped lang="scss">
.quiz-page {
}
.variants-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.variant-item {
  width: 100%;
  height: 5.2rem;
  box-shadow: 0 4px 7px 0 #e3dfee;
  background: #f5eaf7;
  border-radius: 1rem;
  border: 1px solid rgba(119, 51, 149, 0.2);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0 1.7rem;
  cursor: pointer;

  &.is-active,
  &:hover {
    background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);

    .variant-item__text {
      color: #fff;
    }
  }

  &__icon {
    font-size: 3rem;
    width: 4rem;
  }

  &__text {
    color: var(--c-black);
    font-size: 1.5rem;
    font-weight: 600;
  }

  input {
    display: none;
  }
}
</style>
