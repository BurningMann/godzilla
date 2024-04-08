<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import countries from '../../json/countries.json'
import Button from '../../components/elements/Button.vue'
import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import DatePicker from '../../components/elements/DatePicker.vue'
import TimePicker from '../../components/elements/TimePicker.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData, fullScreenPage, currentStepData, stepInfoData, signList } = storeToRefs(store)

const showSign = ref(false)
const currentSectionStep = ref(0)

const prevStep = () => {
  if (currentSectionStep.value) {
    currentSectionStep.value--
  } else {
    currentStep.value--
  }
}

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

const timeOfBirthSwith = ref(null)

const dateOfBirth = ref('')
const timeOfBirth = ref('')
const placeOfBirdth = ref({
  country: 'United States',
  city: '',
})

const options = ref([])
const remoteMethod = (query) => {
  if (query) {
    options.value = countries.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  } else {
    options.value = []
  }
}

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
    slug: 'time_were_you_born',
  },
  {
    stepTitle: 'Where were you born?',
    stepSubtext: 'This helps us determine the specific time zone associated with your place of birth',
  },
]

watch(
  currentSectionStep,
  (val) => {
    if (sectionStepData[val]?.slug === 'time_were_you_born' && !appData.value.time_of_birth) {
      fullScreenPage.value = true
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
</script>

<template>
  <div class="quiz-page">
    <BackArrow v-if="!fullScreenPage" @click="prevStep" />
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
            :text="'Next'"
            @click="
              () => {
                appData.date_of_birth = dateOfBirth
                appData.sign = sign(dateOfBirth.day, dateOfBirth.month)
                nextStep()
              }
            "
          />
        </div>
      </div>
      <div v-else-if="currentSectionStep === 0 && showSign">
        <div class="result-page__image">
          <div class="image">
            <img :src="`./images/sign/${signList[sign(dateOfBirth.day, dateOfBirth.month)]?.image}`" />
          </div>
        </div>
        <div class="result-page__content">
          <div class="result-page__title">
            <span class="purple-text-1">{{ signList[sign(dateOfBirth.day, dateOfBirth.month)]?.name }}</span>
            {{ appData.gender }}
          </div>
          <div class="result-page__text">
            Your birth date, place, and time align the stars uniquely for you, making you much more than just your
            Zodiac sign.
            <br /><br />
            A key element in your Natal Chart is your Ascendant (Rising sign). Let's delve deeper into what this means
            for you!
          </div>
        </div>
        <div class="footer-box"><Button :text="'Continue'" @click="nextStep" /></div>
      </div>

      <div v-else-if="currentSectionStep === 1">
        <div class="variants-list">
          <label class="variant-item" :class="{ 'is-active': timeOfBirthSwith === true }">
            <input v-model="timeOfBirthSwith" type="radio" :value="true" />
            <div class="variant-item__text">Yes</div>
          </label>
          <label class="variant-item" :class="{ 'is-active': timeOfBirthSwith === false }">
            <input v-model="timeOfBirthSwith" type="radio" :value="false" />
            <div class="variant-item__text">No</div>
          </label>
        </div>
        <div class="footer-box">
          <Button
            :text="'Next'"
            :disabled="timeOfBirthSwith === null"
            @click="
              () => {
                appData.time_of_birth = timeOfBirthSwith
                currentSectionStep++
              }
            "
          />
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
                  fullScreenPage = true
                  appData.time_of_birth = false
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
            <img :src="'./images/dont-worry-result.jpg'" class="fit-cover" />
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
          <el-select v-model="placeOfBirdth.country" placeholder="Select Country" size="large" filterable>
            <el-option v-for="item in countries" :key="item.code" :label="item.name" :value="item.name" />
          </el-select>
          <input v-model="placeOfBirdth.city" type="text" class="input" placeholder="Enter City" />
        </div>
        <div class="buttons-container">
          <Button
            :text="'Skip this'"
            :size="'small'"
            :gray="true"
            @click="
              () => {
                appData.where_were_you_born = null
                currentStep++
                stepInfoData.sectionsCount = 0
              }
            "
          />
          <Button
            :text="'Next'"
            :size="'small'"
            :disabled="!placeOfBirdth.country || !placeOfBirdth.city"
            @click="
              () => {
                appData.where_were_you_born = placeOfBirdth
                currentStep++
                stepInfoData.sectionsCount = 0
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image {
  max-width: 15rem;
}
</style>
