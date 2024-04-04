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
  appData.value.current_relationship_analyze = { ...form.value }
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}

const sectionStepData = ref([
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«My partner and I can talk about any issue together»',
    type: 'grading',
    slug: 'my_partner_and_i_can_talk_about_any_issue_together',
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext:
      '«I feel physically safe and secure when I am with my partner, knowing that they respect my boundaries and prioritize my well-being»',
    type: 'grading',
    slug: 'i_feel_physically_safe_and_secure',
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«My partner and I make sex a priority in our relationship»',
    type: 'grading',
    slug: 'my_partner_and_i_make_sex_a_priority_in_our_relationship',
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«Strengthening our emotional connection is a priority for both my partner and me»',
    type: 'grading',
    slug: 'strengthening_our_emotional_connection_is_a_priority_for_both_my_partner_and_me',
  },
  {
    stepTitle: 'Do you agree with this statement?',
    stepSubtext: '«My partner makes me feel appreciated»',
    type: 'grading',
    slug: 'my_partner_makes_me_feel_appreciated',
  },
  {
    stepTitle: 'Are any of these factors currently affecting your relationship?',
    type: 'multipleList',
    slug: 'are_any_of_these_factors_currently_affecting_your_relationship',
    list: [
      {
        label: 'Cheating or unfaithfulness',
        value: 'Cheating or unfaithfulness',
      },
      {
        label: 'Depression',
        value: 'Depression',
      },
      {
        label: 'Lack of sexual desire',
        value: 'Lack of sexual desire',
      },
      {
        label: 'Negative body image',
        value: 'Negative body image',
      },
      {
        label: 'Anxiety',
        value: 'Anxiety',
      },
      {
        label: 'Considering divorce',
        value: 'Considering divorce',
      },
      {
        label: 'Parenting difficulties',
        value: 'Parenting difficulties',
      },
      {
        label: 'None of the above',
        value: 'None of the above',
      },
    ],
  },
  {
    stepTitle: 'Are you satisfied with how you and your partner communicate?',
    type: 'list',
    slug: 'are_you_satisfied_with_how_you_and_your_partner_communicate',
    list: [
      {
        label: 'Yes',
        value: 'Yes',
        result: {
          type: 'result',
          resultImage: 'result-7.jpg',
          resultTitle: `Great to hear! <br> Based on our data only 26% of people with their Sun in Cancer find it easy to communicate with their Taurus partner!`,
          resultContent: `But there is always a room for improvement.`,
          resultButtonText: 'Continue',
          fullScreenPage: true,
        },
      },
      {
        label: 'No',
        value: 'No',
        result: {
          type: 'result',
          resultImage: 'result-7.jpg',
          resultTitle: `You’re not alone. <br> Based on our data 74% of people with their Sun in Cancer find it difficult to communicate with their Taurus partner.`,
          resultContent: `But we can help you to improve this.`,
          resultButtonText: 'Continue',
          fullScreenPage: true,
        },
      },
    ],
  },
  {
    stepTitle: 'Would you describe your partner as a detail-oriented or a big-picture person?',
    type: 'list',
    slug: 'would_you_describe_your_partner_as_a_detail-oriented_or_a_big-picture_person',
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
    stepTitle: 'Is your partner an introvert or extrovert?',
    type: 'list',
    slug: 'is_your_partner_an_introvert_or_extrovert',
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
    stepTitle: 'Does your partner get angry or irritated easily?',
    type: 'list',
    slug: 'does_your_partner_get_angry_or_irritated_easily',
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
    stepTitle: 'Are you satisfied with the way you and your partner deal with conflict?',
    type: 'list',
    slug: 'are_you_satisfied_with_the_way_you_and_your_partner_deal_with_conflict',
    list: [
      {
        label: 'Yes, I prefer to be honest and direct',
        value: 'Yes, I prefer to be honest and direct',
      },
      {
        label: 'Sometimes. It depends on the situation',
        value: 'Sometimes. It depends on the situation',
      },
      {
        label: 'No, I don’t want to get hurt or hurt my partner',
        value: 'No, I dont want to get hurt or hurt my partner',
      },
      {
        label: 'No, it makes me nervous',
        value: 'No, it makes me nervous',
      },
    ],
  },
  {
    stepTitle: 'How do you spend your weekends together?',
    type: 'list',
    slug: 'how_do_you_spend_your_weekends_together',
    list: [
      {
        label: 'We both love to go out and be social',
        value: 'We both love to go out and be social',
      },
      {
        label: 'We prefer staying home',
        value: 'We prefer staying home',
      },
      {
        label: 'We’re a perfect match of a social butterfly and a homebody',
        value: 'We’re a perfect match of a social butterfly and a homebody',
      },
      {
        label: 'Deciding what to do is like a battle for us',
        value: 'Deciding what to do is like a battle for us',
      },
    ],
  },
  {
    stepTitle: 'As a couple, do you often share a laugh together?',
    type: 'list',
    slug: 'as_a_couple_do_you_often_share_a_laugh_together',
    list: [
      {
        label: `We rarely understand each other's jokes`,
        value: 'We rarely understand each others jokes',
      },
      {
        label: 'We argue more than we laugh',
        value: 'We argue more than we laugh',
      },
      {
        label: 'Occasionally, we enjoy a good laugh together',
        value: 'Occasionally, we enjoy a good laugh together',
      },
      {
        label: 'We laugh at each other’s jokes all the time',
        value: 'We laugh at each other’s jokes all the time',
      },
    ],
  },
  {
    stepTitle: 'Do you share a common vision for your future?',
    type: 'list',
    slug: 'do_you_share_a_common_vision_for_your_future',
    list: [
      {
        label: `No, we don't`,
        value: 'No, we dont',
      },
      {
        label: `Currently unsure, we're going with the flow`,
        value: 'Currently unsure, were going with the flow',
      },
      {
        label: 'Mostly, although not every detail is planned',
        value: 'Mostly, although not every detail is planned',
      },
      {
        label: 'Yes, we regularly discuss our future goals',
        value: 'Yes, we regularly discuss our future goals',
      },
    ],
  },
  {
    stepTitle: 'When you think about your relationship goals, you feel...',
    type: 'list',
    slug: 'do_you_share_a_common_vision_for_your_future',
    list: [
      {
        label: `Optimistic! They are totally doable - with some guidance`,
        value: 'Optimistic! They are totally doable - with some guidance',
      },
      {
        label: `Cautious. I’ve struggled before, but I’m hopeful`,
        value: 'Cautious. I’ve struggled before, but I’m hopeful',
        result: {
          type: 'result',
          resultImage: 'result-10.jpg',
          resultTitle: `It’s totally normal to feel anxious, Cancer.`,
          resultContent: `But we know you can do this. Let’s keep going so we can create your personal guidance plan based on your astrological profile.`,
          resultButtonText: 'Continue',
          fullScreenPage: true,
        },
      },
      {
        label: `A little anxious, honestly`,
        value: 'A little anxious, honestly',
        result: {
          type: 'result',
          resultImage: 'result-10.jpg',
          resultTitle: `It’s totally normal to feel anxious, Cancer.`,
          resultContent: `But we know you can do this. Let’s keep going so we can create your personal guidance plan based on your astrological profile.`,
          resultButtonText: 'Continue',
          fullScreenPage: true,
        },
      },
      {
        label: `Not sure`,
        value: 'Not sure',
        result: {
          type: 'result',
          resultImage: 'result-10.jpg',
          resultTitle: `It’s totally normal to feel anxious, Cancer.`,
          resultContent: `But we know you can do this. Let’s keep going so we can create your personal guidance plan based on your astrological profile.`,
          resultButtonText: 'Continue',
          fullScreenPage: true,
        },
      },
    ],
  },
  {
    stepTitle: 'What past experiences do you believe contributed to your lack of compatibility with your partner?',
    type: 'multipleList',
    slug: 'what_past_experiences_do_you_believe_contributed_to_your_lack_of_compatibility_with_your_partner',
    list: [
      {
        label: `Conflicting life goals or values`,
        value: 'Conflicting life goals or values',
      },
      {
        label: `Trust issues or betrayals`,
        value: 'Trust issues or betrayals',
      },
      {
        label: `Lack of emotional support or understanding`,
        value: 'Lack of emotional support or understanding',
      },
      {
        label: `Incompatibility in interests or hobbies`,
        value: 'Incompatibility in interests or hobbies',
      },
      {
        label: `Imbalance in power dynamics within the relationship`,
        value: 'Imbalance in power dynamics within the relationship',
      },
      {
        label: `Cultural or religious differences`,
        value: 'Cultural or religious differences',
      },
      {
        label: `None / Other`,
        value: 'None / Other',
      },
    ],
  },
  {
    type: 'result',
    resultImage: 'result-5.jpg',
    resultTitle: `Astrology plays a crucial role in uncovering compatibility with your partner`,
    resultContent: `We use a unique approach to assess and understand compatibility with the people around you. <br> <br> It’s based on: Ancient Wisdom, Personalized Insights, Understanding Dynamics and Self-Reflection. We have you covered!`,
    resultButtonText: 'Continue',
    fullScreenPage: true,
  },
])

onMounted(() => {
  sectionStepData.value.forEach((item) => {
    if (item.slug === 'are_you_satisfied_with_how_you_and_your_partner_communicate') {
      item.list.forEach((el) => {
        if (el.value === 'Yes') {
          el.result.resultTitle = `Great to hear! <br> Based on our data only 26% of people with their Sun in ${
            signList.value[appData.value.sign]?.name
          } find it easy to communicate with their ${signList.value[appData.value.partner_sign]?.name} partner!`
        } else if (el.value === 'No') {
          el.result.resultTitle = `You’re not alone. <br> Based on our data 74% of people with their Sun in ${
            signList.value[appData.value.sign]?.name
          } find it difficult to communicate with their ${signList.value[appData.value.partner_sign]?.name} partner.`
        }
      })
    } else if (item.slug === 'do_you_share_a_common_vision_for_your_future') {
      item.list.forEach((el, index) => {
        if (index > 0 && el.result) {
          el.result.resultTitle = `It’s totally normal to feel anxious, ${signList.value[appData.value.sign]?.name}.`
        }
      })
    }
  })
})

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData.value[val]?.fullScreenPage
    currentStepData.value = sectionStepData.value[val]
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
