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
  appData.value.motivationing_future = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = {
  single: [
    {
      stepTitle: 'What do you want to improve about your relationships by using astrology?',
      type: 'multipleList',
      slug: 'what_do_you_want_to_improve_about_your_relationships_by_using_astrology',
      list: [
        {
          label: 'Understand my partner’s needs better',
          value: 'Understand my partner’s needs better',
        },
        {
          label: 'Learn to handle conflicts',
          value: 'Learn to handle conflicts',
        },
        {
          label: 'Spot and fix communication issues early',
          value: 'Spot and fix communication issues early',
        },
        {
          label: 'Use astrology for more romance and passion',
          value: 'Use astrology for more romance and passion',
        },
        {
          label: 'Make big decisions together (like moving in or starting a family)',
          value: 'Make big decisions together (like moving in or starting a family)',
        },
        {
          label: 'Have a relationship that matches my values and goals',
          value: 'Have a relationship that matches my values and goals',
        },
        {
          label: 'None of the above',
          value: 'None of the above',
        },
      ],
    },
    {
      stepTitle: 'During my Astro journey, I’d like to feel:',
      type: 'multipleList',
      slug: 'during_my_Astro_journey_id_like_to_feel',
      list: [
        {
          label: 'Empowered to understand myself and my relationships better',
          value: 'Empowered to understand myself and my relationships better',
        },
        {
          label: 'Excited about exploring the depths of my personality',
          value: 'Excited about exploring the depths of my personality',
        },
        {
          label: 'Inspired to explore new aspects of spirituality and self-awareness',
          value: 'Inspired to explore new aspects of spirituality and self-awareness',
        },
        {
          label: 'In tune with the cosmic energies and their influence on my life',
          value: 'In tune with the cosmic energies and their influence on my life',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
    },
    {
      stepTitle: `Our approach helps you beyond just relationship compatibility, enhancing your overall life. <br >While we're customizing your journey, what else do you want to achieve?`,
      type: 'multipleList',
      slug: 'our_approach_helps_you_beyond',
      list: [
        {
          label: 'Self-awareness and personal growth',
          value: 'Self-awareness and personal growth',
        },
        {
          label: 'Career guidance',
          value: 'Career guidance',
        },
        {
          label: 'Health and well-being',
          value: 'Health and well-being',
        },
        {
          label: 'Timing big life events',
          value: 'Timing big life events',
        },
        {
          label: 'Financial planning',
          value: 'Financial planning',
        },
        {
          label: 'Planning for marriage',
          value: 'Planning for marriage',
        },
        {
          label: 'Handling life changes',
          value: 'Handling life changes',
        },
        {
          label: 'None of the above',
          value: 'None of the above',
        },
      ],
    },
    {
      stepTitle: `Do you make decisions with your head or your heart?`,
      type: 'list',
      slug: 'do_you_make_decisions_with_your_head_or_your_heart',
      list: [
        {
          label: 'Heart',
          value: 'Heart',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, 61% of people with Sun in Cancer also make decisions with their heart.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
        {
          label: 'Head',
          value: 'Head',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, 39% of people with Sun in Cancer also make decisions with their head.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
        {
          label: 'Both',
          value: 'Both',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, only 23% of people with Sun in Cancer also make decisions with both their head and heart.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
      ],
    },
  ],
  partner: [
    {
      stepTitle: 'What do you want to improve about your relationships by using astrology?',
      type: 'multipleList',
      multiplePrefixText: 'Choose all that apply',
      slug: 'what_do_you_want_to_improve_about_your_relationships_by_using_astrology',
      list: [
        {
          label: `Better understanding my partner's needs`,
          value: 'Better understanding my partners needs',
        },
        {
          label: 'Learn to handle conflicts',
          value: 'Learn to handle conflicts',
        },
        {
          label: 'Spot and fix communication issues early',
          value: 'Spot and fix communication issues early',
        },
        {
          label: 'Use astrology for more romance and passion',
          value: 'Use astrology for more romance and passion',
        },
        {
          label: 'Make big decisions together (like moving in or starting a family)',
          value: 'Make big decisions together (like moving in or starting a family)',
        },
        {
          label: 'Have a relationship that matches my values and goals',
          value: 'Have a relationship that matches my values and goals',
        },
        {
          label: 'None of the above',
          value: 'None of the above',
        },
      ],
    },
    {
      stepTitle: 'During my Astro journey, I’d like to feel:',
      type: 'multipleList',
      slug: 'during_my_Astro_journey_id_like_to_feel',
      list: [
        {
          label: 'Empowered to understand myself and my relationships better',
          value: 'Empowered to understand myself and my relationships better',
        },
        {
          label: 'Excited about exploring the depths of my personality',
          value: 'Excited about exploring the depths of my personality',
        },
        {
          label: 'Inspired to explore new aspects of spirituality and self-awareness',
          value: 'Inspired to explore new aspects of spirituality and self-awareness',
        },
        {
          label: 'In tune with the cosmic energies and their influence on my life',
          value: 'In tune with the cosmic energies and their influence on my life',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
    },
    {
      stepTitle: `Our approach helps you beyond just relationship compatibility, enhancing your overall life. <br >While we're customizing your journey, what else do you want to achieve?`,
      type: 'multipleList',
      slug: 'our_approach_helps_you_beyond',
      list: [
        {
          label: 'Self-awareness and personal growth',
          value: 'Self-awareness and personal growth',
        },
        {
          label: 'Career guidance',
          value: 'Career guidance',
        },
        {
          label: 'Health and well-being',
          value: 'Health and well-being',
        },
        {
          label: 'Timing big life events',
          value: 'Timing big life events',
        },
        {
          label: 'Financial planning',
          value: 'Financial planning',
        },
        {
          label: 'Planning for marriage',
          value: 'Planning for marriage',
        },
        {
          label: 'Handling life changes',
          value: 'Handling life changes',
        },
        {
          label: 'None of the above',
          value: 'None of the above',
        },
      ],
    },
    {
      stepTitle: `Do you make decisions with your head or your heart?`,
      type: 'list',
      slug: 'do_you_make_decisions_with_your_head_or_your_heart',
      list: [
        {
          label: 'Heart',
          value: 'Heart',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, 61% of people with Sun in Cancer also make decisions with their heart.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
        {
          label: 'Head',
          value: 'Head',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, 39% of people with Sun in Cancer also make decisions with their head.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
        {
          label: 'Both',
          value: 'Both',
          result: {
            type: 'result',
            resultImage: 'result-9.webp',
            resultTitle: `Based on our data, only 23% of people with Sun in Cancer also make decisions with both their head and heart.`,
            resultContent: `Now get ready for valuable insights on building lasting and joyful relationships with yourself and others!`,
            resultButtonText: 'Great!',
            fullScreenPage: true,
            final: true,
          },
        },
      ],
    },
  ],
}

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData[appData.value.relationshipType][val]?.fullScreenPage
    currentStepData.value = sectionStepData[appData.value.relationshipType][val]
    stepInfoData.value.currentStep = currentSectionStep.value + stepInfoData.value.startStep
  },
  { immediate: true }
)

onMounted(() => {
  sectionStepData[appData.value.relationshipType].forEach((item) => {
    if (item.slug === 'do_you_make_decisions_with_your_head_or_your_heart') {
      item.list.forEach((el) => {
        if (el.value === 'Heart') {
          el.result.resultTitle = `Based on our data, 61% of people with Sun in ${
            signList.value[appData.value.sign]?.name
          } also make decisions with their heart.`
        } else if (el.value === 'Head') {
          el.result.resultTitle = `Based on our data, 39% of people with Sun in ${
            signList.value[appData.value.sign]?.name
          } also make decisions with their head.`
        } else if (el.value === 'Both') {
          el.result.resultTitle = `Based on our data, only 23% of people with Sun in ${
            signList.value[appData.value.sign]?.name
          } also make decisions with both their head and heart.`
        }
      })
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
          v-if="currentStepData?.type === 'list'"
          :key="currentSectionStep"
          :list="currentStepData?.list"
          @next-step="
            (data) => {
              setData(currentStepData.slug, data)
            }
          "
        />
        <MultipleList
          v-if="currentStepData?.type === 'multipleList'"
          :key="currentSectionStep"
          :list="currentStepData?.list"
          @next-step="
            (data) => {
              setData(currentStepData.slug, data)
            }
          "
        />
        <GradingList
          v-if="currentStepData?.type === 'grading'"
          :key="currentSectionStep"
          :list="currentStepData?.list"
          @next-step="
            (data) => {
              setData(currentStepData.slug, data)
            }
          "
        />
        <ResultSection v-if="currentStepData?.type === 'result'" />
      </div>
    </div>
  </div>
</template>
