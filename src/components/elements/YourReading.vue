<script setup>
import Button from '../elements/Button.vue'
import CompatibilityReading from '../../json/compatibility-reading.json'

import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStep, appData, signList } = storeToRefs(store)

const emit = defineEmits(['getReading'])

const statsList = {
  single: [
    {
      name: 'Health',
      color: 'green',
      percent: 65,
    },
    {
      name: 'Love',
      color: 'red',
      percent: 79,
    },
    {
      name: 'Wisdom',
      color: 'green-2',
      percent: 81,
    },
    {
      name: 'Money',
      color: 'blue',
      percent: 53,
    },
  ],
  partner: [
    {
      name: 'Love',
      color: 'red',
      percent: 73,
    },
    {
      name: 'Communication',
      color: 'green',
      percent: 57,
    },
    {
      name: 'Trust',
      color: 'blue',
      percent: 32,
    },
    {
      name: 'Marriage',
      color: 'green-2',
      percent: 61,
    },
  ],
}

function getPartnerText(sign, partner_sign) {
  console.log(sign, partner_sign)
  const result = CompatibilityReading.find(
    (el) =>
      (el.firstsign === sign || el.secondsign === sign) &&
      (el.secondsign === partner_sign || el.secondsign === partner_sign)
  )
  console.log(result)
  return result?.text
}
</script>

<template>
  <div class="your-reading">
    <div v-if="appData.relationshipType === 'partner'" class="your-reading__top">
      <div class="your-reading__image"><img :src="`./images/sign/${signList[appData.partner_sign]?.image}`" /></div>

      <div class="your-reading__top-plus purple-text-1">+</div>
      <div class="your-reading__image">
        <img :src="`./images/sign/${signList[appData.sign]?.image}`" />
      </div>
    </div>
    <div v-else class="your-reading__top">
      <img src="/images/sun-large.png" alt="" />
      <img :src="`./images/sign/${signList[appData.sign]?.image}`" />
    </div>
    <div class="your-reading__content">
      <div class="your-reading__content-title">
        <strong v-if="appData.relationshipType === 'partner'">
          {{ signList[appData.partner_sign]?.name }} + {{ signList[appData.sign]?.name }} Compatibility
        </strong>
        <strong v-else>Personality</strong>
      </div>
      <div class="your-reading__stats">
        <div v-for="item in statsList[appData.relationshipType]">
          <div class="your-reading__stats-top">
            <div>{{ item.name }}</div>
            <div>{{ item.percent }}%</div>
          </div>
          <div>
            <div class="progress">
              <div class="progress__line-container">
                <div
                  class="progress__line"
                  :class="`is-${item.color}`"
                  :style="{
                    width: `${item.percent}%`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="appData.relationshipType === 'partner'"
        class="your-reading__description"
        v-html="getPartnerText(appData.sign, appData.partner_sign)"
      />
      <div v-else class="your-reading__description">
        <div v-html="signList[appData.sign]?.personality[appData.gender]" />
      </div>
    </div>

    <div class="your-reading__overlay">
      <div class="purple-text-1 your-reading__overlay-title">
        To read the full report, you <br />
        need to get access
      </div>
      <Button :text="'GET MY READING'" @click="emit('getReading')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.your-reading {
  position: relative;

  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 2.4rem;
    background: rgba(144, 54, 113, 0.2);
    border-radius: 1rem 1rem 0 0;
    padding: 1.5rem 2rem;
  }

  &__top-plus {
    font-weight: 700;
    font-size: 5rem;
    line-height: 130%;
  }

  &__content {
    background: linear-gradient(180deg, #f5eaf7 0%, #fbf4fb 100%);
    padding: 2.5rem var(--container-padding);

    &-title {
      color: var(--c-black);
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.2rem;
    margin-bottom: 2rem;

    &-top {
      display: flex;
      justify-content: space-between;
      color: var(--c-black);
      margin-bottom: 0.7rem;
    }
  }

  &__description {
    color: var(--c-black);
    font-size: 1.4rem;
    white-space: pre-line;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 19;
    -webkit-box-orient: vertical;
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 44rem;
    background: linear-gradient(180deg, rgba(245, 234, 247, 0.8) 0%, #f5eaf7 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 3rem var(--container-padding);

    &-title {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 140%;
    }
  }
}

.progress {
  width: 100%;
  position: relative;

  &__line-container {
    width: 100%;
    background: #e5dae7;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    overflow: hidden;
  }

  &__line {
    width: 100%;
    height: 0.6rem;
    border-radius: 30px;
    transition: 0.3s ease-in-out;

    &.is-green {
      background: #41bcbc;
    }
    &.is-green-2 {
      background: #41bc63;
    }
    &.is-red {
      background: #bc416e;
    }
    &.is-blue {
      background: #4172bc;
    }
  }
}
</style>
