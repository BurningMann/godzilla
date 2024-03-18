<script setup>
import { ref, watch } from 'vue'
import ApplicationLogo from './components/elements/ApplicationLogo.vue'
import StartSection from './components/sections/StartSection.vue'
import RelationshipSection from './components/sections/RelationshipSection.vue'
import AimSection from './components/sections/AimSection.vue'
import ResultSection from './components/sections/ResultSection.vue'
import BirthSection from './components/sections/BirthSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'

import { useMainStore } from './stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { currentStep, currentStepData, data, fullScreenPage } = storeToRefs(store)
const pageType = ref(null)
const stepsData = ref([
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
])

watch(
  currentStep,
  (val) => {
    currentStepData.value = stepsData.value[val - 1]
    pageType.value = stepsData.value[val - 1]?.type

    if (stepsData.value[val - 1]?.fullScreenPage) {
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
      <div v-show="!fullScreenPage" class="header">
        <div v-if="currentStep > 1" class="page-back" @click="currentStep--">
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
        <ApplicationLogo />
      </div>
      <component
        v-if="stepsData[currentStep - 1]?.componentName"
        :is="stepsData[currentStep - 1].componentName"
        :section-data="section"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

