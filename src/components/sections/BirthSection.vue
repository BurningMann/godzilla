<script setup>
import Progress from '../../components/elements/Progress.vue'
import Button from '../../components/elements/Button.vue'
import Dropdown from '../../components/elements/Dropdown.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, data, fullScreenPage } = storeToRefs(store)

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
  data.value.time_of_birth = val
  currentSectionStep.value++
}

const country = ref('')
const city = ref('')

const hours = ref(12)
const minutes = ref(0)
const dayTime = ref('am')

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
</script>

<template>
  <div class="quiz-page">
    <Progress v-show="!fullScreenPage" :step-count="sectionStepData.length" :current-step="currentSectionStep" />
    <div>
      <div v-show="!fullScreenPage" class="step-start-box">
        <div class="step-title">{{ sectionStepData[currentSectionStep].stepTitle }}</div>
        <div v-if="sectionStepData[currentSectionStep]?.stepSubtext" class="step-subtext">
          {{ sectionStepData[currentSectionStep].stepSubtext }}
        </div>
      </div>

      <div v-if="currentSectionStep === 0 && !showSign">
        <div class="footer-box"><Button :text="'Continue'" @click="nextStep" /></div>
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
        <div v-if="data.time_of_birth">
          <div class="time-select-box">
            <el-select v-model="hours" placeholder="Select" size="large">
              <el-option v-for="item in 12" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="minutes" placeholder="Select" size="large">
              <el-option v-for="item in 60" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="dayTime" placeholder="Select" size="large">
              <el-option :label="'AM'" :value="'am'" />
              <el-option :label="'PM'" :value="'pm'" />
            </el-select>
          </div>
          <div class="buttons-container">
            <Button
              :text="'I don’t remember'"
              :size="'small'"
              :gray="true"
              @click="
                () => {
                  data.time_of_birth = false
                  currentSectionStep++
                }
              "
            />
            <Button
              :text="'Next'"
              :size="'small'"
              @click="
                () => {
                  data.time_were_you_born = ''
                  currentSectionStep++
                }
              "
            />
          </div>
        </div>
        <div v-if="!data.time_of_birth">
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
          <el-select v-model="country" placeholder="Select" size="large">
            <el-option v-for="item in countryOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="city" placeholder="Select" size="large">
            <el-option v-for="item in countryOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="buttons-container">
          <Button
            :text="'Skip this for now'"
            :size="'small'"
            :gray="true"
            @click="
              () => {
                data.time_of_birth = false
                currentSectionStep++
              }
            "
          />
          <Button
            :text="'Next'"
            :size="'small'"
            :disabled="!country || !city"
            @click="
              () => {
                currentSectionStep++
                currentStep++
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
