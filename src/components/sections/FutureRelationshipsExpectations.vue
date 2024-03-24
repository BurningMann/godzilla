<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

import MultipleList from '../../components/elements/MultipleList.vue'
import SingleList from '../../components/elements/SingleList.vue'
import GradingList from '../../components/elements/GradingList.vue'
import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import ResultSection from '../../components/sections/ResultSection.vue'

const store = useMainStore()
const { currentStep, appData, fullScreenPage, currentStepData, stepInfoData } = storeToRefs(store)

const currentSectionStep = ref(0)

const form = ref({})

const prevStep = () => {
  if (currentSectionStep.value) {
    currentSectionStep.value--
  } else {
    currentStep.value--
  }
}

const nextStep = () => {
  appData.value.future_relationships_expectations = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = [
  {
    stepTitle: 'What is your ideal date?',
    type: 'list',
    slug: 'what_is_your_ideal_date',
    list: [
      {
        label: 'Dinner at a fancy restaurant',
        value: 'Dinner at a fancy restaurant',
      },
      {
        label: 'A hike in nature',
        value: 'A hike in nature',
      },
      {
        label: 'Talking under the stars',
        value: 'Talking under the stars',
      },
      {
        label: 'A walk in the park',
        value: 'A walk in the park',
      },
      {
        label: 'Skydiving',
        value: 'Skydiving',
      },
    ],
  },
  {
    stepTitle: 'Would you describe your future partner as a detail-oriented or a big-picture person?',
    type: 'list',
    slug: 'would_you_describe_your_future_partner_as_detail-oriented_or_big-picture_person',
    list: [
      {
        label: 'Detail-oriented',
        value: 'Detail-oriented',
      },
      {
        label: 'Big-picture',
        value: 'Big-picture',
      },
      {
        label: 'A bit of both',
        value: 'A bit of both',
      },
    ],
  },
  {
    stepTitle: 'Is your ideal partner an introvert or an extrovert?',
    type: 'list',
    slug: 'is_your_ideal_partner_an_introvert_or_an_extrovert',
    list: [
      {
        label: 'Introvert',
        value: 'Introvert',
      },
      {
        label: 'Extrovert',
        value: 'Extrovert',
      },
      {
        label: 'A bit of both',
        value: 'A bit of both',
      },
    ],
  },
  {
    stepTitle: 'When you think about your relationship goals, you feel...',
    type: 'list',
    slug: 'when_you_think_about_your_relationship_goals_you_feel',
    list: [
      {
        label: 'Optimistic! They are totally doable - with some guidance',
        value: 'Optimistic! They are totally doable - with some guidance',
      },
      {
        label: 'Cautious. I’ve struggled before, but I’m hopeful',
        value: 'Cautious. I’ve struggled before, but I’m hopeful',
      },
      {
        label: 'A little anxious, honestly',
        value: 'A little anxious, honestly',
      },
      {
        label: 'Not sure',
        value: 'Not sure',
      },
    ],
  },
  {
    type: 'result',
    resultImage: 'result-6.jpg',
    resultTitle: `You’ve come to the right place, Taurus!`,
    resultContent: `Knowing that your goal is already doable puts you ahead. Let’s keep going so we can build a guidance plan based on your astrological blueprint.`,
    resultButtonText: 'Continue',
    fullScreenPage: true,
  },
]

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData[val]?.fullScreenPage
    currentStepData.value = sectionStepData[val]
    stepInfoData.value.currentStep = currentSectionStep.value + stepInfoData.value.startStep
  },
  { immediate: true }
)
</script>

<template>
  <div class="quiz-page">
    <BackArrow v-if="!fullScreenPage" @click="prevStep" />
    <div>
      <StepTop v-if="!fullScreenPage" />

      <div>
        <SingleList
          v-if="sectionStepData[currentSectionStep]?.type === 'list'"
          :key="currentSectionStep"
          :list="sectionStepData[currentSectionStep]?.list"
          @next-step="
            (data) => {
              setData(sectionStepData[currentSectionStep].slug, data)
            }
          "
        />
        <MultipleList
          v-if="sectionStepData[currentSectionStep]?.type === 'multipleList'"
          :key="currentSectionStep"
          :list="sectionStepData[currentSectionStep]?.list"
          @next-step="
            (data) => {
              setData(sectionStepData[currentSectionStep].slug, data)
            }
          "
        />
        <GradingList
          v-if="sectionStepData[currentSectionStep]?.type === 'grading'"
          :key="currentSectionStep"
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
