<script setup>
import { ref, watch, computed } from 'vue'
import AppHeader from './components/elements/AppHeader.vue'
import Progress from './components/elements/Progress.vue'
import StartSection from './components/sections/StartSection.vue'
import RelationshipSection from './components/sections/RelationshipSection.vue'
import AimSection from './components/sections/AimSection.vue'
import ResultSection from './components/sections/ResultSection.vue'
import BirthSection from './components/sections/BirthSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'
import UserHistory from './components/sections/UserHistory.vue'
import UserTalantsAndCareer from './components/sections/UserTalantsAndCareer.vue'
import BasicDataQuestions from './components/sections/BasicDataQuestions.vue'

import { useMainStore } from './stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { currentStep, currentStepData, appData, fullScreenPage, stepInfoData } = storeToRefs(store)
const pageType = ref(null)

const stepsData = {
  firstSection: [
    {
      type: 'startStep',
      componentName: StartSection,
      slug: 'gender',
    },
    {
      type: 'relationship',
      componentName: RelationshipSection,
      slug: 'relationship',
    },
    {
      type: 'aim',
      componentName: AimSection,
      slug: 'aim',
      stepData: {
        sectionsCount: 1,
        currentSection: 1,
        stepCount: 5,
        currentStep: 1,
        startStep: 1,
      },
    },
    {
      type: 'result',
      componentName: ResultSection,
      resultTitle: 'Great! You just set your first goal!',
      resultContent: 'Let’s keep going so we can get to know <br> you better',
      resultButtonText: 'Let’s Start!',
      resultImage: 'step-1-result.jpg',
      fullScreenPage: true,
    },
    {
      type: 'birth',
      componentName: BirthSection,
      slug: 'date_of_birth',
      stepData: {
        sectionsCount: 1,
        currentSection: 1,
        stepCount: 5,
        currentStep: 1,
        startStep: 2,
      },
    },
    {
      type: 'reviews',
      componentName: ReviewsSection,
      slug: 'reviews',
      fullScreenPage: true,
    },
    {
      type: 'result',
      componentName: ResultSection,
      resultTitle: 'To find out what works for us, we often need to understand what doesn’t.',
      resultContent:
        'Now, we need some information to create the astrological synastry blueprint and give you insights on how to build a happy and lasting relationship with your partner!',
      resultButtonText: 'Let’s finish this!',
      resultImage: 'result-2.jpg',
      fullScreenPage: true,
    },
  ],
  secondSection: {
    single: [
      {
        type: 'userhistory',
        componentName: UserHistory,
        slug: 'userhistory',
        stepData: {
          sectionsCount: 3,
          currentSection: 2,
          stepCount: 11,
          currentStep: 1,
          startStep: 1,
        },
      },
      {
        type: 'userTalantsAndCareer',
        componentName: UserTalantsAndCareer,
        slug: 'userTalantsAndCareer',
        stepData: {
          sectionsCount: 3,
          currentSection: 2,
          stepCount: 11,
          currentStep: 1,
          startStep: 8,
        },
      },
    ],
    partner: [
      {
        type: 'basicDataQuestions',
        componentName: BasicDataQuestions,
        slug: 'basicDataQuestions',
        stepData: {
          sectionsCount: 3,
          currentSection: 2,
          stepCount: 6,
          currentStep: 1,
          startStep: 1,
        },
      },
    ],
  },
  thirdSection: [],
}

const currentStepTemplate = computed(() => {
  if (
    appData.value.relationship &&
    ['relationship', 'married', 'complicated', 'other'].includes(appData.value.relationship)
  ) {
    return [...stepsData.firstSection, ...stepsData.secondSection.partner]
  }
  return [...stepsData.firstSection, ...stepsData.secondSection.single]
})

watch(
  currentStep,
  (val) => {
    currentStepData.value = currentStepTemplate.value[val]
    pageType.value = currentStepTemplate.value[val]?.type
    fullScreenPage.value = currentStepTemplate.value[val]?.fullScreenPage

    if (currentStepTemplate.value[val]?.stepData) {
      stepInfoData.value = currentStepTemplate.value[val].stepData
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="page">
    <div class="page-inner container" :class="{ 'white-page': !fullScreenPage }">
      <AppHeader v-show="!fullScreenPage" />
      <Progress v-if="stepInfoData.sectionsCount" v-show="!fullScreenPage" />
      <component
        v-if="currentStepTemplate[currentStep]?.componentName"
        :is="currentStepTemplate[currentStep]?.componentName"
      />
    </div>
  </div>
</template>
