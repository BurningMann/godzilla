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
  appData.value.past_relationship_analyze = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = [
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«When I am in a relationship, sex is a priority»',
    type: 'grading',
    slug: 'when_i_am_in_a_relationship_sex_is_a_priority',
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«I feel comfortable around people I barely know»',
    type: 'grading',
    slug: 'i_feel_comfortable_around_people_i_barely_know',
  },
  {
    stepTitle: 'Do you easily get angry or irritated?',
    type: 'list',
    slug: 'do_you_easily_get_angry_or_irritated',
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
        label: 'Never',
        value: 'Never',
      },
    ],
  },
  {
    stepTitle: 'Do you share your inner self with people you like?',
    type: 'list',
    slug: 'do_you_share_your_inner_self_with_people_you_like',
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
        label: 'Not sure',
        value: 'Not sure',
      },
    ],
  },
  {
    stepTitle: 'Do you remember small details about the people who are important to you?',
    type: 'list',
    slug: 'do_you_remember_small_details_about_the_people_who_are_important_to_you',
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
        label: 'Never',
        value: 'Never',
      },
    ],
  },
  {
    stepTitle: 'Do you find it easy to communicate with other people?',
    type: 'list',
    slug: 'do_you_find_it_easy_to_communicate_with_other_people',
    list: [
      {
        label: 'Yes',
        value: 'Yes',
      },
      {
        label: 'No',
        value: 'No',
      },
    ],
  },
  {
    stepTitle: 'What do you think caused problems in your previous relationship?',
    type: 'multipleList',
    slug: 'what_do_you_think_caused_problems_in_your_previous_relationship',
    list: [
      {
        label: 'Different life goals or values',
        value: 'Different life goals or values',
      },
      {
        label: 'Trust issues or betrayals',
        value: 'Trust issues or betrayals',
      },
      {
        label: 'Lack of emotional support',
        value: 'Lack of emotional support',
      },
      {
        label: 'Different hobbies or interests',
        value: 'Different hobbies or interests',
      },
      {
        label: 'Unbalanced power dynamics',
        value: 'Unbalanced power dynamics',
      },
      {
        label: 'Cultural or religious differences',
        value: 'Cultural or religious differences',
      },
      {
        label: 'Other reasons',
        value: 'Other reasons',
      },
    ],
  },
  {
    type: 'result',
    resultImage: 'result-5.webp',
    resultTitle: `Astrology plays a crucial role in uncovering compatibility with your partner`,
    resultContent: `We use a unique approach to assess and understand compatibility with the people around you. <br> It’s based on: Ancient Wisdom, Personalized Insights, Understanding Dynamics and Self-Reflection. We have you covered!`,
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
