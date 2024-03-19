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
