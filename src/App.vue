<script setup>
import { ref } from 'vue'
import ApplicationLogo from './components/elements/ApplicationLogo.vue'
import Progress from './components/elements/Progress.vue'
import IndexLanding from './components/pages/IndexLanding.vue'
import QuizPage from './components/pages/QuizPage.vue'
import ResultPage from './components/pages/ResultPage.vue'

const step = ref(1)
const data = {
  gender: null,
  relationshipStatus: null,
}

const pageType = ref('quiz')
</script>
<template>
  <div class="page">
    <div class="page-inner container" :class="{ 'white-page': pageType !== 'result' }">
      <div v-show="pageType !== 'result'" class="header">
        <div class="page-back">
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
        <div></div>
      </div>
      <Progress v-if="pageType !== 'result'" />
      <IndexLanding v-if="pageType === 'start'" />
      <QuizPage v-else-if="pageType === 'quiz'" />
      <ResultPage v-else-if="pageType === 'result'" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
