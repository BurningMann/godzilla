<script setup>
import Button from '../elements/Button.vue'

import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

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
</script>

<template>
  <div class="your-reading">
    <div v-if="appData.relationshipType === 'partner'" class="your-reading__top">
      <img src="/images/sign-1.png" alt="" />
      <div class="your-reading__top-plus purple-text-1">+</div>
      <img src="/images/sign-2.png" alt="" />
    </div>
    <div v-else class="your-reading__top">
      <img src="/images/sun-large.png" alt="" />
      <img src="/images/sign-1.png" alt="" />
    </div>
    <div class="your-reading__content">
      <div class="your-reading__content-title">
        <strong v-if="appData.relationshipType === 'partner'">Aries + Taurus Compatibility</strong>
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
      <div v-if="appData.relationshipType === 'partner'" class="your-reading__description">
        <p>
          When Aries and Taurus come together for love or any kind of relationship, it’s dynamic but also grounding.
          Aries loves to be first, while Taurus takes their sweet time. Let Taurus be the rock that holds down the fort,
          and Aries be the roll that keeps the two of you from getting stuck in a rut. Everlasting love is a possibility
          here, if you can pace your way to the altar. The Aries-Taurus combo begins with a bang: gushing compliments,
          long-stemmed roses, electrifying conversations over a choice bottle of Cabernet. During the courtship phase,
          Taurus is happy to bask in Aries’ fiery glow. With the Bull’s rapt attention, Aries puts on a show-stopping
          performance that rivals Celine Dion in Vegas. Viva la difference! Homebody
        </p>
      </div>
      <div v-else class="your-reading__description">
        <p>
          Ruled by Mars, the God of war, Aries are the warriors of the Zodiac who fight for what they want in life. They
          don’t expect easy wins, they know that life is a battle. Aries men are the type to burn the candle at both
          ends. They put in the hours at the office and in the gym, and never miss an opportunity to make new
          connections and get ahead.
        </p>
        <br />
        <p>
          One of the Cardinal signs, an Aries trait is how they put themselves first. They like to lead from the front,
          and they always put their needs and dreams in front of everything else in life. They can have a tendency to
          tread on others on their way to the top, especially since they are highly competitive. One of the Fire signs,
          they
        </p>
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
    gap: 0 4rem;
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
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 52%;
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
