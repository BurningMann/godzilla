<script setup>
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

import MultipleList from '../../components/elements/MultipleList.vue'
import SingleList from '../../components/elements/SingleList.vue'
import GradingList from '../../components/elements/GradingList.vue'
import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import ResultSection from '../../components/sections/ResultSection.vue'

const store = useMainStore()
const { currentStep, appData, fullScreenPage, currentStepData, stepInfoData, signList } = storeToRefs(store)

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
  appData.value.user_history = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = ref([
  {
    stepTitle: 'However, how did your previous relationship make you feel?',
    stepPrevtext: '',
    textSize: 'large',
    type: 'list',
    slug: 'however_how_did_your_previous_relationship_make_you_feel',
    list: [
      {
        label: 'I felt discontented with my relationship',
        value: 'I felt discontented with my relationship',
      },
      {
        label: 'I was unhappy with parts of my relationship, but some things were working',
        value: 'I was unhappy with parts of my relationship, but some things were working',
      },
      {
        label: 'I was mostly content in my relationship',
        value: 'I was mostly content in my relationship',
      },
      {
        label: 'I’ve never been in a relationship',
        value: 'I’ve never been in a relationship',
      },
    ],
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«I find solace and comfort in spending time alone»',
    textSize: 'large',
    gradePostfix: 'Totally',
    type: 'grading',
    slug: 'do_you_agree_with_this_statement',
  },
  {
    stepTitle: 'How often do you tend to focus more on the negative than the positive?',
    type: 'list',
    slug: 'how_often_do_you_tend_to_focus_more_on_the_negative_than_the_positive',
    list: [
      {
        label: 'Very frequently',
        value: 'Very frequently',
      },
      {
        label: 'Frequently',
        value: 'Frequently',
      },
      {
        label: 'Occasionally',
        value: 'Occasionally',
      },
      {
        label: 'Rarely',
        value: 'Rarely',
      },
      {
        label: 'Never',
        value: 'Never',
      },
    ],
  },
  {
    stepTitle: 'Are you sensitive to criticism?',
    type: 'list',
    slug: 'are_you_sensitive_to_criticism',
    list: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'Sometimes',
        value: 'Sometimes',
      },
      {
        label: 'Rarely',
        value: 'Rarely',
      },
      {
        label: 'Not at all',
        value: 'Not at all',
      },
    ],
  },
  {
    stepTitle: 'Do you tend to overthink?',
    type: 'list',
    slug: 'do_you_tend_to_overthink',
    list: [
      {
        label: 'Yes',
        value: true,
      },
      {
        label: 'No',
        value: false,
      },
    ],
  },
  {
    stepTitle: 'What is most important to you?',
    type: 'multipleList',
    slug: 'what_is_most_important_to_you',
    list: [
      {
        label: 'Success',
        value: 'Success',
      },
      {
        label: 'Romance',
        value: 'Romance',
      },
      {
        label: 'Stability',
        value: 'Stability',
      },
      {
        label: 'Freedom',
        value: 'Freedom',
      },
      {
        label: 'Happiness',
        value: 'Happiness',
      },
      {
        label: 'Health',
        value: 'Health',
      },
      {
        label: 'All the above',
        value: 'All the above',
      },
    ],
  },
  {
    stepTitle: 'Is it hard for you to keep emotions under control?',
    type: 'list',
    slug: 'is_it_hard_for_you_to_keep_emotions_under_control',
    list: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'Sometimes',
        value: 'Sometimes',
      },
      {
        label: 'Rarely',
        value: 'Rarely',
      },
      {
        label: 'Not at all',
        value: 'Not at all',
      },
    ],
  },
  {
    type: 'result',
    resultImage: 'result-3.jpg',
    resultTitle: `You're known keeping your emotions in check, Taurus! However, others want to see a more passionate side of you.`,
    resultContent: `We have some insightful tips that can help you balance this! Ready for the next step?`,
    resultButtonText: 'Continue',
    fullScreenPage: true,
  },
])

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData.value[val]?.fullScreenPage
    currentStepData.value = sectionStepData.value[val]
    stepInfoData.value.currentStep = currentSectionStep.value + stepInfoData.value.startStep
  },
  { immediate: true }
)

onMounted(() => {
  let age = ''
  if (appData.value.date_of_birth?.year > 1993 && appData.value.date_of_birth?.year < 2005) {
    age = '20s'
  } else if (appData.value.date_of_birth?.year > 1983 && appData.value.date_of_birth?.year < 1994) {
    age = '30s'
  } else if (appData.value.date_of_birth?.year > 1973 && appData.value.date_of_birth?.year < 1984) {
    age = '40s'
  } else if (appData.value.date_of_birth?.year > 1963 && appData.value.date_of_birth?.year < 1974) {
    age = '50s'
  } else if (appData.value.date_of_birth?.year > 1959 && appData.value.date_of_birth?.year < 1964) {
    age = '60s'
  } else {
    age = 'teen age'
  }
  sectionStepData.value.forEach((item) => {
    if (item.slug === 'however_how_did_your_previous_relationship_make_you_feel') {
      item.stepPrevtext = `${signList.value[appData.value.sign]?.name} ${
        appData.value.gender === 'Male' ? 'man' : 'woman'
      } in their ${age} need a unique strategy to discover their ideal partner`
    } else if (item.type === 'result') {
      item.resultTitle = `You're known keeping your emotions in check, ${
        signList.value[appData.value.sign]?.name
      }! However, others want to see a more passionate side of you.`
    }
  })
})
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
