<script setup>
import { ref, watch, computed } from 'vue'
import AppHeader from './components/elements/AppHeader.vue'
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
const { currentStep, currentStepData, appData, fullScreenPage } = storeToRefs(store)
const pageType = ref(null)

const stepsDataSingle = ref([
  {
    type: 'userTalantsAndCareer',
    componentName: UserTalantsAndCareer,
    slug: 'userTalantsAndCareer',
  },
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
    resultButtonText: 'Continue',
    resultImage: 'result-2.jpg',
    fullScreenPage: true,
  },

  {
    type: 'userhistory',
    componentName: UserHistory,
    slug: 'userhistory',
  },
  {
    type: 'userTalantsAndCareer',
    componentName: UserTalantsAndCareer,
    slug: 'userTalantsAndCareer',
  },
])
const stepsDataCurrentPartner = ref([
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
    resultButtonText: 'Continue',
    resultImage: 'result-2.jpg',
    fullScreenPage: true,
  },
  {
    type: 'basicDataQuestions',
    componentName: BasicDataQuestions,
    slug: 'basicDataQuestions',
  },
])

const currentStepTemplate = computed(() => {
  if (
    appData.value.relationship &&
    ['relationship', 'married', 'complicated', 'other'].includes(appData.value.relationship)
  ) {
    return stepsDataCurrentPartner.value
  }
  return stepsDataSingle.value
})

watch(
  currentStep,
  (val) => {
    currentStepData.value = currentStepTemplate.value[val - 1]
    pageType.value = currentStepTemplate.value[val - 1]?.type

    if (currentStepTemplate.value[val - 1]?.fullScreenPage) {
      fullScreenPage.value = true
    } else {
      fullScreenPage.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="page">
    <div class="page-inner container" :class="{ 'white-page': !fullScreenPage }">
      <AppHeader v-show="!fullScreenPage" />
      <component
        v-if="currentStepTemplate[currentStep - 1]?.componentName"
        :is="currentStepTemplate[currentStep - 1]?.componentName"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
