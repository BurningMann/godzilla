<script setup>
import Button from '../elements/Button.vue'
import StepTop from '../elements/StepTop.vue'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
import { ElMessage } from 'element-plus'

const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

const mail = ref('')

const emailSuggestions = ['gmail.com', 'yahoo.com', 'hotmail.com', 'hotmail.co.uk', 'icloud.com', 'outlook.com']
const emailSuggestionsList = ref([])

watch(mail, (val) => {
  if (emailSuggestions.filter((el) => el === val.split('@')[1])?.length === 1) {
    emailSuggestionsList.value = []
  } else if (val.split('@')[1] || val.split('@')[1] === '') {
    emailSuggestionsList.value = emailSuggestions.filter((el) => el.includes(`${val.split('@')[1]}`))
  } else {
    emailSuggestionsList.value = []
  }
})

function next() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!mail.value || !mail.value.match(mailformat)) {
    ElMessage({
      message: 'Fill in the email field',
      type: 'error',
      grouping: true,
    })
    return false
  }

  currentSectionStep.value++
}

const pricesList = [
  {
    label: '$1',
    value: 1,
  },
  {
    label: '$5',
    value: 5,
  },
  {
    label: '$9',
    value: 9,
  },
  {
    label: '$13,67',
    value: 13.67,
  },
]
const currentPrice = ref(13.67)

const currentSectionStep = ref(1)
</script>

<template>
  <div class="quiz-page email-page">
    <div v-if="currentSectionStep === 1">
      <StepTop
        :local-title="`Great news, you’re eligible! <br />
      Ready for insights into your love life and emotions?`"
      />

      <div>
        <div class="email-page__subtitle">
          <strong>Share* your email</strong> so you <strong> don’t lose</strong> <br />
          provided information
        </div>
        <div class="email-wrapper">
          <input v-model="mail" type="text" class="input" />
          {{ emailSuggestionsList.length }}
          <ul v-show="emailSuggestionsList.length" class="email-suggestions">
            <li v-for="item in emailSuggestionsList" :key="item" @click="mail = `${mail.split('@')[0]}@${item}`">
              {{ `${mail.split('@')[0]}@${item}` }}
            </li>
          </ul>
        </div>
        <div class="email-page__allert">
          *Natal Chart does not share any personal information. We’ll email you a copy of your program for convenient
          access.
        </div>
        <Button :text="'Continue'" :disabled="!mail" @click="next" />
      </div>

      <div class="footer-box">
        <div class="email-page__footer-text">
          By proceeding, you're accepting our EULA and Privacy Notice. <br />
          Need help? Our support team is only a click away.
        </div>
      </div>
    </div>
    <div v-if="currentSectionStep === 2" class="email-page__step2">
      <div class="email-page__content">
        <p>
          We’ve helped millions of people to have happier lives and better relationships, and we want to help you too.
        </p>
        <br />
        <p class="semibold">
          Money shouldn’t stand in the way of finding astrology guidance that finally works. So, choose an amount that
          you think is reasonable to try us out for one week.
        </p>
        <br />
        <p class="semibold purple-text-1">
          It costs us $13.67 to offer a 7-day trial, but please choose the amount you are comfortable with.
        </p>
      </div>
      <div class="email-page__prices">
        <div class="variants-list is-horizontal">
          <div
            v-for="(item, index) in pricesList"
            :key="item.value"
            class="variant-item is-number"
            :class="{ 'is-active': currentPrice === item.value }"
            @click="
              () => {
                currentPrice = item.value
              }
            "
          >
            <div class="variant-item__text">{{ item.label }}</div>

            <div v-if="index === pricesList.length - 1" class="email-page__prices-bottom-arrow">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.8285 0.623026C31.6203 0.441619 31.3044 0.463336 31.123 0.671533L28.1668 4.0643C27.9854 4.27249 28.0071 4.58833 28.2153 4.76974C28.4235 4.95114 28.7394 4.92943 28.9208 4.72123L31.5485 1.70544L34.5643 4.33318C34.7725 4.51459 35.0883 4.49287 35.2697 4.28467C35.4511 4.07648 35.4294 3.76064 35.2212 3.57923L31.8285 0.623026ZM0.98729 42.5002C0.711236 42.5072 0.493142 42.7367 0.500162 43.0127C0.507181 43.2888 0.736657 43.5069 1.01271 43.4998L0.98729 42.5002ZM25.2069 30.8667L25.6413 31.1143L25.2069 30.8667ZM31.5 1C31.0012 1.0343 31.0012 1.03424 31.0012 1.03425C31.0012 1.03434 31.0012 1.03441 31.0012 1.03458C31.0012 1.03493 31.0013 1.03554 31.0013 1.0364C31.0014 1.03811 31.0016 1.04084 31.0019 1.04458C31.0023 1.05205 31.0031 1.06353 31.004 1.07896C31.0059 1.10981 31.0086 1.15641 31.0118 1.21813C31.0183 1.34159 31.027 1.52553 31.0354 1.76496C31.0522 2.24383 31.0681 2.94449 31.0641 3.8269C31.0561 5.59208 30.9684 8.08256 30.6496 10.9786C30.011 16.7781 28.4492 24.1689 24.7725 30.6191L25.6413 31.1143C29.4129 24.4977 30.9976 16.9553 31.6435 11.0881C31.9669 8.15077 32.056 5.62459 32.0641 3.83144C32.0682 2.93468 32.052 2.22075 32.0348 1.72984C32.0262 1.48436 32.0173 1.29461 32.0105 1.16559C32.0071 1.10108 32.0042 1.05175 32.0022 1.01823C32.0011 1.00146 32.0003 0.988654 31.9998 0.979874C31.9995 0.975484 31.9993 0.972101 31.9991 0.969736C31.999 0.968553 31.999 0.967624 31.9989 0.966952C31.9989 0.966615 31.9989 0.966302 31.9989 0.966134C31.9988 0.965885 31.9988 0.965701 31.5 1ZM24.7725 30.6191C21.5346 36.2994 15.6296 39.28 10.461 40.8373C7.88419 41.6137 5.51097 42.0298 3.78185 42.2517C2.91779 42.3626 2.21588 42.4248 1.73145 42.4593C1.48926 42.4765 1.30153 42.4867 1.17517 42.4927C1.112 42.4957 1.06417 42.4976 1.03257 42.4987C1.01677 42.4993 1.00502 42.4996 0.997437 42.4999C0.993646 42.5 0.990895 42.5001 0.9892 42.5001C0.988352 42.5001 0.987767 42.5001 0.987449 42.5002C0.987289 42.5002 0.98725 42.5002 0.987169 42.5002C0.987196 42.5002 0.98729 42.5002 1 43C1.01271 43.4998 1.01294 43.4998 1.01323 43.4998C1.01342 43.4998 1.01378 43.4998 1.01415 43.4998C1.0149 43.4998 1.01592 43.4998 1.0172 43.4997C1.01976 43.4996 1.02338 43.4995 1.02805 43.4994C1.03738 43.4991 1.0509 43.4987 1.0685 43.498C1.10369 43.4968 1.1552 43.4947 1.22216 43.4916C1.35606 43.4853 1.55178 43.4746 1.80235 43.4567C2.30342 43.4211 3.02426 43.3572 3.90914 43.2436C5.67788 43.0166 8.10727 42.5908 10.7495 41.7948C16.0188 40.2072 22.2173 37.1211 25.6413 31.1143L24.7725 30.6191Z"
                  fill="#6C6A6C"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="email-page__prices-bottom">
          This option will help us support those who need <br />
          to select the lowest trial prices!
        </div>
      </div>
      <div class="email-page__people">
        <div class="email-page__people-title">772 people joined today</div>
        <div class="email-page__people-wrapper">
          <div class="email-page__people-item">pete***** <span>chose $9</span></div>
          <div class="email-page__people-item">jane***** <span>chose $5</span></div>
          <div class="email-page__people-item">sabr***** <span>chose $9</span></div>
        </div>
      </div>

      <div class="footer-box">
        <Button
          :text="'See my result'"
          @click="
            () => {
              appData.email = mail
              appData.currentPrice = currentPrice
              currentStep++
            }
          "
        />
        <div class="email-page__footer-text is-left">*Cost of trial as of February 2023</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.email-wrapper {
  position: relative;
}

.email-suggestions {
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  border: 1px solid #773395;
  border-radius: 1rem;
  background: #f5eaf7;
  padding: 2rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 5;
  color: var(--c-black);

  li {
    cursor: pointer;
  }
}

.email-page {
  &__subtitle {
    color: var(--c-black);
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.67rem;
  }

  &__allert {
    color: var(--c-black);
    opacity: 0.7;
    font-size: 1.3rem;
    text-align: center;
    margin: 2rem 0 3rem;
  }

  &__footer-text {
    font-size: 1.1rem;
    color: var(--c-black);
    opacity: 0.7;
    text-align: center;
    line-height: 160%;

    &.is-left {
      text-align: left;
      margin-top: 1.5rem;
    }
  }

  &__content {
    color: var(--c-black);
    margin-bottom: 2rem;
  }

  &__prices {
    .variants-list {
      justify-content: center;
    }
    .variant-item {
      max-width: 6.2rem;
    }

    .variant-item__text {
      font-size: 1.5rem;
    }
  }

  &__prices-bottom {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 160%;
    color: var(--c-black);
  }

  &__prices-bottom-arrow {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: calc(100% + 1rem);
  }

  &__people {
    background: #f5eaf7;
    border-radius: 1rem;
    padding: 1rem 0;
    margin-top: 2.5rem;

    &-title {
      font-weight: 700;
      color: var(--c-title);
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.6rem;
    }
  }

  &__people-wrapper {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
    overflow: hidden;
  }

  &__people-item {
    border-radius: 0.4rem;
    background: var(--c-white);
    padding: 0.3rem 1.2rem;

    color: rgba(45, 45, 45, 0.7);
    flex-shrink: 0;

    span {
      font-weight: 700;
    }
  }
}
</style>
