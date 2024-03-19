<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import Progress from '../../components/elements/Progress.vue'
import Button from '../../components/elements/Button.vue'
import StepTop from '../../components/elements/StepTop.vue'
import DatePicker from '../../components/elements/DatePicker.vue'
import TimePicker from '../../components/elements/TimePicker.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData, fullScreenPage, currentStepData } = storeToRefs(store)

const stepData = ref('')
const showSign = ref(false)
const showButton = ref(true)
const currentSectionStep = ref(0)

const nextStep = () => {
  if (currentSectionStep.value === 0 && !showSign.value) {
    fullScreenPage.value = true
    showSign.value = true
  } else {
    currentSectionStep.value++
    fullScreenPage.value = false
    showSign.value = false
  }
}

const setBirthStep = (val) => {
  fullScreenPage.value = !val
  appData.value.time_of_birth = val
  currentSectionStep.value++
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

const sectionStepData = [
  {
    stepTitle: 'What’s your date of birth?',
    stepSubtext: 'Your birth date reveals your core personality traits, needs and desires',
  },
  {
    stepTitle: 'Do you know your time of birth?',
  },
  {
    stepTitle: 'What time were you born?',
    stepSubtext: 'We use NASA data to determine the precise planetary positions in the sky during your birth',
  },
  {
    stepTitle: 'Where were you born?',
  },
]

watch(
  currentSectionStep,
  (val) => {
    fullScreenPage.value = sectionStepData[val]?.fullScreenPage
    currentStepData.value = sectionStepData[val]
  },
  { immediate: true }
)
</script>

<template>
  <div class="quiz-page">
    <Progress v-show="!fullScreenPage" :step-count="sectionStepData.length - 1" :current-step="currentSectionStep" />
    <div>
      <StepTop v-if="!fullScreenPage" />

      <div v-if="currentSectionStep === 0 && !showSign">
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
                appData.date_of_birth = dateOfBirth
                nextStep()
              }
            "
          />
        </div>
      </div>

      <div v-else-if="currentSectionStep === 0 && showSign">
        <div class="result-page__image">
          <img :src="'sign-1.png'" />
        </div>
        <div class="result-page__content">
          <div class="result-page__title"><span class="purple-text">Libra</span> females</div>
          <div class="result-page__text">
            Sparkling with wit, the Gemini female charms with her versatility, constantly adapting to change.
            <br /><br />
            Let’s keep going so we can get to know <br />
            you better
          </div>
        </div>
        <div class="footer-box"><Button :text="'Continue'" @click="nextStep" /></div>
      </div>

      <div v-else-if="currentSectionStep === 1">
        <div class="variants-list">
          <div class="variant-item" @click="setBirthStep(true)">
            <div class="variant-item__text">Yes</div>
          </div>
          <div class="variant-item" @click="setBirthStep(false)">
            <div class="variant-item__text">No</div>
          </div>
        </div>
      </div>

      <div v-else-if="currentSectionStep === 2">
        <div v-if="appData.time_of_birth">
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
                  appData.time_of_birth = false
                  nextStep()
                }
              "
            />
            <Button
              :text="'Next'"
              :size="'small'"
              @click="
                () => {
                  appData.time_were_you_born = timeOfBirth
                  nextStep()
                }
              "
            />
          </div>
        </div>
        <div v-if="!appData.time_of_birth">
          <div class="result-page__image">
            <img :src="'dont-worry-result.jpg'" class="fit-cover" />
          </div>
          <div class="result-page__content">
            <div class="result-page__title">Don't worry!</div>
            <div class="result-page__text">
              There's a wealth of valuable insights available even without the precise birth time.
              <br /><br />
              Should you discover it later, you have the option to update this in your profile.
            </div>
          </div>
          <div class="footer-box"><Button :text="'Continue'" @click="nextStep" /></div>
        </div>
      </div>

      <div v-else-if="currentSectionStep === 3">
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
                appData.where_were_you_born = placeOfBirdth
                currentStep++
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
