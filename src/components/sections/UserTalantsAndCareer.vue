<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

import Progress from '../../components/elements/Progress.vue'
import MultipleList from '../../components/elements/MultipleList.vue'
import SingleList from '../../components/elements/SingleList.vue'
import GradingList from '../../components/elements/GradingList.vue'
import StepTop from '../../components/elements/StepTop.vue'
import ResultSection from '../../components/sections/ResultSection.vue'

const store = useMainStore()
const { appData, fullScreenPage, currentStepData } = storeToRefs(store)

const currentSectionStep = ref(0)

const form = ref({
  do_you_love_your_job: '',
  do_you_often_worry_that_you_are_not_good_enough: [],
  do_you_always_know_exactly_what_you_want: '',
  do_you_have_trouble_relaxing: '',
})

const nextStep = () => {
  appData.value.user_talants_and_carrer = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = [
  {
    stepTitle: 'Do you love your job?',
    type: 'list',
    slug: 'do_you_love_your_job',
    list: [
      {
        label: 'Yes! I do something I love',
        value: 'Yes! I do something I love',
      },
      {
        label: 'I’m not working',
        value: 'I’m not working',
      },
      {
        label: 'I hate my job',
        value: 'I hate my job',
      },
      {
        label: 'It’s okay, it pays the bills',
        value: 'It’s okay, it pays the bills',
      },
      {
        label: 'I’m underpaid',
        value: 'I’m underpaid',
      },
    ],
  },
  {
    stepTitle: 'Do you often worry that you are not good enough?',
    slug: 'do_you_often_worry_that_you_are_not_good_enough',
    type: 'multipleList',
    list: [
      {
        label: 'Yes! I do something I love',
        value: 'Yes! I do something I love',
      },
      {
        label: 'Sometimes',
        value: 'Sometimes',
      },
      {
        label: 'Not at all',
        value: 'Not at all',
      },
    ],
  },
  {
    stepTitle: 'Do you always know exactly what you want?',
    slug: 'do_you_always_know_exactly_what_you_want',
    type: 'list',
    list: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
      {
        label: 'Not sure',
        value: 'Not sure',
      },
    ],
  },
  {
    stepTitle: 'Do you have trouble relaxing?',
    slug: 'do_you_have_trouble_relaxing',
    type: 'list',
    list: [
      {
        label: 'Never',
        value: 'Never',
      },
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'Sometimes',
        value: 'Sometimes',
      },
    ],
  },
  {
    resultImage: 'result-4.jpg',
    resultTitle: `Almost there! <br>  Now let’s personalize your plan by revealing your relationship patterns.`,
    resultContent: `Please take your time to answer thoughtfully. <br> Each response helps us craft a tailored plan for your success.`,
    resultButtonText: `Continue`,
    type: 'result',
    fullScreenPage: true,
  },
]

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData[val]?.fullScreenPage
    currentStepData.value = sectionStepData[val]
  },
  { immediate: true }
)
</script>

<template>
  <div class="quiz-page">
    <div v-if="currentSectionStep > 0" class="page-back" @click="currentSectionStep--">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4003_493)">
          <path
            d="M5.24779 6.50275L10.1111 1.63927C10.245 1.50568 10.3186 1.32706 10.3186 1.1366C10.3186 0.946042 10.245 0.76753 10.1111 0.633725L9.68491 0.20779C9.55121 0.0737736 9.37249 1.16991e-06 9.18203 1.13661e-06C8.99158 1.10331e-06 8.81307 0.0737734 8.67926 0.20779L2.88876 5.99818C2.75443 6.13241 2.68087 6.31176 2.6814 6.50243C2.68087 6.69394 2.75432 6.87309 2.88876 7.00742L8.67387 12.7922C8.80767 12.9262 8.98618 13 9.17675 13C9.3672 13 9.54571 12.9262 9.67962 12.7922L10.1057 12.3663C10.3829 12.0891 10.3829 11.6377 10.1057 11.3606L5.24779 6.50275Z"
            fill="#2D2D2D"
          />
        </g>
        <defs>
          <clipPath id="clip0_4003_493">
            <rect width="13" height="13" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <Progress v-show="!fullScreenPage" :step-count="sectionStepData.length - 1" :current-step="currentSectionStep" />

    <div>
      <StepTop v-if="!fullScreenPage" />

      <div>
        <SingleList
          v-if="sectionStepData[currentSectionStep]?.type === 'list'"
          :list="sectionStepData[currentSectionStep]?.list"
          @next-step="
            (data) => {
              setData(sectionStepData[currentSectionStep].slug, data)
            }
          "
        />
        <MultipleList
          v-if="sectionStepData[currentSectionStep]?.type === 'multipleList'"
          :list="sectionStepData[currentSectionStep]?.list"
          @next-step="
            (data) => {
              setData(sectionStepData[currentSectionStep].slug, data)
            }
          "
        />
        <GradingList
          v-if="sectionStepData[currentSectionStep]?.type === 'grading'"
          :list="sectionStepData[currentSectionStep]?.list"
          @next-step="
            (data) => {
              setData(sectionStepData[currentSectionStep].slug, data)
            }
          "
        />
        <ResultSection v-if="sectionStepData[currentSectionStep]?.type === 'result'" />
      </div>
    </div>
  </div>
</template>
