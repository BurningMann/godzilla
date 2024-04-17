<script setup>
import { ref, watch } from 'vue'
import CancelProgress from './CancelProgress.vue'
import CancelStepTop from './CancelStepTop.vue'
import CancelLoadingCircle from './CancelLoadingCircle.vue'
import CancelSingleList from './CancelSingleList.vue'
import SpecialOffer from './SpecialOffer.vue'
import CancelFinal from './CancelFinal.vue'

const currentSectionStep = ref(0)
const curentStepData = ref(null)
const form = ref({})
const finalStatus = ref('')
const showProgress = ref(true)
const currentProgress = ref(0)

const sectionStepData = ref([
  {
    stepTitle: 'Why did you decide to cancel your subscription?',
    type: 'list',
    slug: 'why_did_you_decide_to_cancel_your_subscription',
    showProgress: true,
    list: [
      {
        label: 'It’s only temporary. I’ll be back!',
        value: 'It’s only temporary. I’ll be back!',
      },
      {
        label: 'I don’t understand how to use the app',
        value: 'I don’t understand how to use the app',
      },
      {
        label: 'I signed up by mistake',
        value: 'I signed up by mistake',
      },
      {
        label: 'I didn’t saw any result',
        value: 'I didn’t saw any result',
      },
      {
        label: 'It’s too expensive',
        value: 'It’s too expensive',
      },
      {
        label: 'The paid subscription doesn’t seem worth it',
        value: 'The paid subscription doesn’t seem worth it',
      },
      {
        label: 'Some features I need are missing',
        value: 'Some features I need are missing',
      },
      {
        label: 'I experienced some technical issues',
        value: 'I experienced some technical issues',
      },
      {
        label: 'I found a better app elsewhere',
        value: 'I found a better app elsewhere',
      },
      {
        label: 'It isn’t working for me',
        value: 'It isn’t working for me',
      },
      {
        label: 'I’ve achieved all my goals',
        value: 'I’ve achieved all my goals',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
  },
  {
    stepTitle: 'How likely are you to try Natal Chart again in the future?',
    type: 'list',
    slug: 'how_likely_are_you_to_try_Natal_Chart_again_in_the_future',
    showProgress: true,
    list: [
      {
        label: 'Very likely',
        value: 'Very likely',
      },
      {
        label: 'Somewhat likely',
        value: 'Somewhat likely',
      },
      {
        label: 'Neither likely nor unlikely',
        value: 'Neither likely nor unlikely',
      },
      {
        label: 'Somewhat unlikely',
        value: 'Somewhat unlikely',
      },
      {
        label: 'Very unlikely',
        value: 'Very unlikely',
      },
    ],
  },
  {
    stepTitle: 'Thanks for your feedback!',
    stepText: `Just a moment... <br> We are creating a special offer for you`,
    type: 'loading',
    showProgress: true,
  },
  {
    stepTitle: 'Thanks for your feedback!',
    stepText: `Just a moment... <br> We are creating a special offer for you`,
    type: 'specialOffer',
    showProgress: true,
  },
  {
    stepTitle: 'Updating your subscription',
    stepText: `Please don't hit "back" or refresh the page`,
    type: 'loading',
    showProgress: true,
  },
  {
    stepTitle: 'Updating your subscription',
    stepText: `Please don't hit "back" or refresh the page`,
    type: 'final',
    showProgress: false,
  },
])

watch(
  currentSectionStep,
  (val) => {
    curentStepData.value = sectionStepData.value[val]
    showProgress.value = sectionStepData.value[val].showProgress
  },
  { immediate: true }
)

const setData = (slug, value) => {
  form.value[slug] = value
  currentSectionStep.value++
  currentProgress.value++
}
</script>

<template>
  <div>
    <CancelProgress v-show="showProgress" :sections-count="2" :current-section="currentProgress" />

    <div v-if="curentStepData?.type === 'list'" class="quiz-page">
      <CancelStepTop :local-title="curentStepData.stepTitle" />
      <CancelSingleList
        :list="curentStepData.list"
        :key="currentSectionStep"
        @next-step="
          (data) => {
            setData(curentStepData?.slug, data)
          }
        "
      />
    </div>
    <CancelLoadingCircle
      v-else-if="curentStepData?.type === 'loading'"
      :title="curentStepData.stepTitle"
      :subtitle="curentStepData.stepText"
      @loadingEnd="currentSectionStep++"
    />
    <SpecialOffer
      v-else-if="curentStepData?.type === 'specialOffer'"
      @pick-line="
        (val) => {
          finalStatus = val
          currentSectionStep++
        }
      "
    />
    <CancelFinal v-else-if="curentStepData?.type === 'final'" :type="finalStatus" />
  </div>
</template>

<style scoped lang="scss">
.pausing-info-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
  }

  &__row {
    display: flex;
    gap: 1.4rem;
  }

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    font-size: 1.5rem;
    line-height: 147%;
    color: rgba(255, 255, 255, 0.8);
  }
}

.pausing-final-text {
  margin-bottom: 5.2rem;
  color: #d9d9d9;
}
</style>
