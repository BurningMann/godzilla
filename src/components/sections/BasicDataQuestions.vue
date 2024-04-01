<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

import Button from '../../components/elements/Button.vue'
import SingleList from '../../components/elements/SingleList.vue'
import StepTop from '../../components/elements/StepTop.vue'
import ResultSection from '../../components/sections/ResultSection.vue'
import DatePicker from '../../components/elements/DatePicker.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import TimePicker from '../../components/elements/TimePicker.vue'

const store = useMainStore()
const { currentStep, appData, fullScreenPage, currentStepData, stepInfoData, signList } = storeToRefs(store)

const currentSectionStep = ref(0)

const form = ref({
  which_statement_best_describes_you: '',
  what_is_your_partner_gender: '',
  what_is_your_partner_date_of_birth: '',
  do_you_know_what_time_your_artner_was_born: '',
  what_time_your_partner_was_born: '',
  where_was_your_partner_born: '',
})

const prevStep = () => {
  if (currentSectionStep.value) {
    currentSectionStep.value--
  } else {
    currentStep.value--
  }
}

const dateOfBirth = ref('')
const timeOfBirth = ref('')
const placeOfBirdth = ref({
  country: '',
  city: '',
})
const countryOptions = ref([
  {
    label: 'United States',
    value: 'United States',
  },
  {
    label: 'United States1',
    value: 'United States1',
  },
  {
    label: 'United States2',
    value: 'United States2',
  },
])
const showSign = ref(false)
const sectionStepData = [
  {
    stepTitle: 'Which statement best describes you?',
    stepPrevtext: 'Taurus women in their 20s need a slightly different approach to improve their relationship.',
    type: 'list',
    slug: 'which_statement_best_describes_you',
    list: [
      {
        label: 'I’m very unhappy with how things are going in my relationship',
        value: 'I’m very unhappy with how things are going in my relationship',
      },
      {
        label: 'I’m unhappy with parts of my relationship, but some things are working well',
        value: 'I’m unhappy with parts of my relationship, but some things are working well',
      },
      {
        label: 'I’m generally happy in my relationship',
        value: 'I’m generally happy in my relationship',
      },
    ],
  },
  {
    stepTitle: 'What is your partner’s gender?',
    type: 'list',
    slug: 'what_is_your_partner_gender',
    list: [
      {
        icon: '👨',
        label: 'Male',
        value: 'Male',
      },
      {
        icon: '👩‍🦰️',
        label: 'Female',
        value: 'Female',
      },
    ],
  },
  {
    stepTitle: 'What is your partner’s date of birth?',
    stepSubtext: 'This is crucial for constructing personalized Astrological Blueprint',
    type: 'date',
    slug: 'what_is_your_partner_date_of_birth',
  },
  {
    stepTitle: 'Do you know what time your partner was born?',
    type: 'list',
    slug: 'do_you_know_what_time_your_artner_was_born',
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
    stepTitle: 'What time your partner was born?',
    stepSubtext: 'That data allows for greater precision',
    type: 'time',
    slug: 'what_time_your_partner_was_born',
  },
  {
    stepTitle: 'Where was your partner born?',
    slug: 'where_was_your_partner_born',
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
    if (
      sectionStepData[val]?.slug === 'what_time_your_partner_was_born' &&
      !form.value.do_you_know_what_time_your_artner_was_born
    ) {
      fullScreenPage.value = true
    } else {
      fullScreenPage.value = sectionStepData[val]?.fullScreenPage
    }

    currentStepData.value = sectionStepData[val]
    stepInfoData.value.currentStep = currentSectionStep.value + stepInfoData.value.startStep
  },
  { immediate: true }
)

const sign = (day, month) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return 'aries'
  else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) return 'taurus'
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini'
  else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer'
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) return 'leo'
  else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) return 'virgo'
  else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) return 'libra'
  else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'scorpio'
  else if ((month === 11 && day >= 23) || (month === 12 && day <= 22)) return 'sagittarius'
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) return 'capricorn'
  else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) return 'aquarius'
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces'
  else return ''
}

const nextStep = () => {
  appData.value.basic_data_questions = { ...form.value }
  appData.value.partner_sign = sign(dateOfBirth.value.day, dateOfBirth.value.month)
  currentSectionStep.value++
}

function setData(slug, data) {
  form.value[slug] = data
  nextStep()
}
</script>

<template>
  <div class="quiz-page">
    <BackArrow v-if="!fullScreenPage" @click="prevStep" />
    <div>
      <StepTop v-if="!fullScreenPage" />

      <div>
        <div v-if="sectionStepData[currentSectionStep]?.slug === 'what_is_your_partner_date_of_birth'">
          <div v-if="showSign">
            <div class="">
              <div class="result-page__image">
                <div class="image"><img :src="`./images/sign/${signList[appData.sign]?.image}`" /></div>

                <div class="result-page__image-plus">+</div>
                <div class="image">
                  <img :src="`./images/sign/${signList[sign(dateOfBirth.day, dateOfBirth.month)]?.image}`" />
                </div>
              </div>
              <div class="result-page__content">
                <div class="result-page__title">
                  <span class="purple-text-1">{{ signList[appData.sign]?.name }}</span> {{ appData.gender }} +
                  <span class="purple-text-1">{{ signList[sign(dateOfBirth.day, dateOfBirth.month)]?.name }}</span>
                  {{ form.what_is_your_partner_gender }}
                </div>
                <div class="result-page__text">
                  The celestial dance between a {{ signList[appData.sign]?.name }}
                  {{ appData.gender === 'Male' ? 'man' : 'woman' }} and a
                  {{ signList[sign(dateOfBirth.day, dateOfBirth.month)]?.name }}
                  {{ form.what_is_your_partner_gender === 'Male' ? 'man' : 'woman' }} is intricate, revealing layers
                  beneath the surface much like an iceberg. While there's promise, there are also pitfalls hidden in the
                  depths of this relationship. <br /><br />
                  How compatible are you truly? <br />
                  Let's discover!
                </div>
              </div>
              <div class="footer-box">
                <Button
                  :text="'Continue'"
                  @click="
                    () => {
                      fullScreenPage = false
                      showSign = false
                      nextStep()
                    }
                  "
                />
              </div>
            </div>
          </div>
          <div v-else>
            <DatePicker
              @date-select="
                (data) => {
                  dateOfBirth = data
                }
              "
            />

            <div class="footer-box">
              <Button
                :text="'Continue'"
                @click="
                  () => {
                    form[sectionStepData[currentSectionStep]?.slug] = dateOfBirth
                    fullScreenPage = true
                    showSign = true
                  }
                "
              />
            </div>
          </div>
        </div>
        <div v-else-if="sectionStepData[currentSectionStep]?.slug === 'what_time_your_partner_was_born'">
          <div v-if="form.do_you_know_what_time_your_artner_was_born">
            <TimePicker
              @time-select="
                (data) => {
                  timeOfBirth = data
                }
              "
            />
            <div class="buttons-container">
              <Button
                :text="'I don’t remember'"
                :size="'small'"
                :gray="true"
                @click="
                  () => {
                    fullScreenPage = true
                    form.do_you_know_what_time_your_artner_was_born = false
                  }
                "
              />
              <Button
                :text="'Next'"
                :size="'small'"
                @click="
                  () => {
                    form.what_time_your_partner_was_born = timeOfBirth
                    nextStep()
                  }
                "
              />
            </div>
          </div>
          <div v-else>
            <div class="result-page__image">
              <img :src="'./images/dont-worry-result.jpg'" class="fit-cover" />
            </div>
            <div class="result-page__content">
              <div class="result-page__title">No problem!</div>
              <div class="result-page__text">
                You can still find plenty of great insights without knowing the exact birth time of your partner.
                <br /><br />
                If you find out later, you can always adjust this in your partner’s profile.
              </div>
            </div>
            <div class="footer-box"><Button :text="'Continue'" @click="nextStep" /></div>
          </div>
        </div>
        <div v-else-if="sectionStepData[currentSectionStep]?.slug === 'where_was_your_partner_born'">
          <div class="select-list">
            <el-select v-model="placeOfBirdth.country" placeholder="Select" size="large">
              <el-option v-for="item in countryOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="placeOfBirdth.city" placeholder="Select" size="large">
              <el-option v-for="item in countryOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="buttons-container">
            <Button :text="'Skip this for now'" :size="'small'" :gray="true" @click="nextStep" />
            <Button
              :text="'Next'"
              :size="'small'"
              :disabled="!placeOfBirdth.country || !placeOfBirdth.city"
              @click="
                () => {
                  form.where_was_your_partner_born = placeOfBirdth
                  nextStep()
                }
              "
            />
          </div>
        </div>
        <div v-else>
          <SingleList
            v-if="sectionStepData[currentSectionStep]?.type === 'list'"
            :list="sectionStepData[currentSectionStep]?.list"
            @next-step="
              (data) => {
                setData(sectionStepData[currentSectionStep].slug, data)
              }
            "
          />
        </div>

        <ResultSection v-if="sectionStepData[currentSectionStep]?.type === 'result'" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image {
  max-width: 15rem;
}
</style>
