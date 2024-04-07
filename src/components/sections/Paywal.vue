<script setup>
import Button from '../elements/Button.vue'
import StepTop from '../elements/StepTop.vue'
import SinglePaywallCard from '../elements/SinglePaywallCard.vue'
import PartnerPaywallCard from '../elements/PartnerPaywallCard.vue'
import PaymentVariant from '../elements/PaymentVariant.vue'
import PayDialog from '../elements/PayDialog.vue'
import YourReading from '../elements/YourReading.vue'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

const reviews = [
  {
    name: 'Sarah J.',
    time: '10:30 AM',
    avatar: 'S',
    text: `Astoundingly precise readings! It's helped me tremendously in understanding both myself and my significant other.`,
  },
  {
    name: 'Liam69',
    time: '1 day ago',
    avatar: 'L',
    text: `They offer a wealth of insights. I've never come across something so accurate in the realm of astrology.`,
  },
  {
    name: 'Daniel ',
    time: '3 days ago',
    avatar: 'D',
    text: `The predictions are detailed and have been incredibly useful in my personal and professional life. This app meets my needs perfectly.`,
  },
]

const getList = [
  'Your personalised plan',
  '1:1 guidance from your trusted advisor',
  'Finding the most compatible partner',
  'Insights into your relationship patterns and emotional and sexual needs',
  'A better understanding of yourself',
]

const showPayment = ref(false)

const count = 1
const started = ref(false)
const timerData = ref({
  min: 0,
  sec: 0,
})

function startTimer() {
  if (started.value) {
    return
  }
  var start_time = new Date()
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count)

  var countdown = setInterval(function () {
    var now = new Date().getTime()
    var remain = stop_time - now
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60))
    var sec = Math.floor((remain % (1000 * 60)) / 1000)
    min = min < 10 ? '0' + min : `${min}`
    sec = sec < 10 ? '0' + sec : `${sec}`
    timerData.value.min = min
    timerData.value.sec = sec

    if (remain <= 0) {
      clearInterval(countdown)
    }
  }, 1000)
  started.value = true
}

onMounted(() => {
  startTimer()
})
</script>

<template>
  <div class="paywal-page">
    <section class="paywal-page__section">
      <div class="paywal-page__top">
        <div class="paywal-page__top-text">Personalized plan reserved for:</div>
        <div class="paywal-page__top-timer">
          <strong>{{ timerData.min }}:{{ timerData.sec }}</strong>
        </div>
        <Button :text="'Continue'" size="tiny" @click="showPayment = true" />
      </div>
      <div class="paywal-page__card">
        <PartnerPaywallCard v-if="appData.relationshipType === 'partner'" />
        <SinglePaywallCard v-else />
      </div>
      <div class="paywal-page__offer-section">
        <StepTop :local-title="'Your Personalized Clarity & Love Reading is ready!'" />
        <div class="goal">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="5" fill="#732F72" />
              <g clip-path="url(#clip0_2111_2738)">
                <path
                  d="M16.0023 6.00135C13.3502 6.00268 10.807 7.0565 8.93154 8.93129C7.05606 10.8061 6.00167 13.3485 6 16C6.00134 18.6518 7.05558 21.1945 8.93109 23.0696C10.8066 24.9447 13.35 25.9987 16.0023 26C17.689 25.9982 19.3479 25.5703 20.8248 24.7559C22.3018 23.9415 23.5489 22.7671 24.4503 21.3418C25.3517 19.9165 25.8781 18.2866 25.9807 16.6034C26.0832 14.9203 25.7586 13.2385 25.037 11.7143L24.0453 12.7058C23.9524 12.7994 23.8419 12.8737 23.7201 12.9245C23.5984 12.9753 23.4678 13.0016 23.3359 13.0018H23.0587C23.4531 13.9227 23.6711 14.9368 23.6711 16C23.6697 18.033 22.8613 19.9823 21.4235 21.4199C19.9856 22.8574 18.0358 23.6656 16.0023 23.6669C11.7711 23.6669 8.33363 20.2303 8.33363 16C8.33508 14.7338 8.65001 13.4875 9.25034 12.3725C9.85067 11.2575 10.7177 10.3084 11.7742 9.60984C12.8306 8.9113 14.0435 8.48504 15.3048 8.3691C16.5661 8.25317 17.8364 8.45115 19.0025 8.9454V8.66825C19.0025 8.40244 19.1084 8.14671 19.2974 7.95901L20.2903 6.96632C18.9507 6.3297 17.4856 5.99918 16.0023 6.00135ZM22.3278 6.00135C22.2424 6.00389 22.1613 6.03905 22.101 6.09961L19.7674 8.43142C19.7362 8.46247 19.7115 8.49938 19.6946 8.54003C19.6777 8.58067 19.6691 8.62425 19.6691 8.66825V10.864L15.2665 15.2656C15.0726 15.4614 14.9638 15.7258 14.9638 16.0013C14.9638 16.2768 15.0726 16.5412 15.2665 16.737C15.6697 17.1401 16.3337 17.1389 16.737 16.7345L21.1383 12.3341H23.3359C23.3799 12.3342 23.4235 12.3255 23.4641 12.3087C23.5048 12.2918 23.5417 12.2671 23.5728 12.2359L25.9051 9.90282C25.9508 9.85601 25.9817 9.79683 25.994 9.73262C26.0063 9.66842 25.9995 9.60201 25.9744 9.54164C25.9493 9.48126 25.9071 9.42959 25.8529 9.39302C25.7987 9.35645 25.7349 9.3366 25.6695 9.33592H24.1385L24.4044 9.06886C24.5982 8.87367 24.7072 8.60995 24.7076 8.33493C24.7081 8.05992 24.6001 7.79583 24.4069 7.59998C24.2053 7.39842 23.9369 7.29764 23.6698 7.29764C23.4027 7.29764 23.1355 7.39842 22.9339 7.59998L22.6693 7.86453V6.33266C22.6692 6.28828 22.6602 6.24438 22.6428 6.20353C22.6255 6.16267 22.6002 6.12568 22.5684 6.09471C22.5366 6.06374 22.499 6.03943 22.4577 6.02318C22.4163 6.00693 22.3722 6.00034 22.3278 6.00135ZM16.0023 10.6662C13.0601 10.6662 10.666 13.0598 10.666 16C10.666 18.9403 13.0601 21.3326 16.0023 21.3326C17.4164 21.3313 18.7722 20.769 19.772 19.7692C20.7718 18.7694 21.3339 17.4138 21.3349 16C21.3349 15.1522 21.1308 14.351 20.778 13.638L18.9509 15.4646C19.0286 15.8965 19.0107 16.34 18.8985 16.7642C18.7863 17.1883 18.5824 17.5828 18.3014 17.9197C18.0203 18.2567 17.6688 18.528 17.2716 18.7145C16.8744 18.9011 16.4412 18.9984 16.0023 18.9995C15.2072 18.9985 14.4448 18.6824 13.8824 18.1203C13.32 17.5583 13.0035 16.7963 13.0021 16.0013C13.0031 15.2063 13.3194 14.4442 13.8815 13.8819C14.4437 13.3196 15.2059 13.0032 16.0011 13.0018C16.1851 13.0018 16.364 13.0207 16.5379 13.0522L18.365 11.2256C17.6314 10.8586 16.8226 10.6671 16.0023 10.6662Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2111_2738">
                  <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <span>Goal</span>
            <br />
            <span class="semibold">{{ appData?.motivationing_future?.our_approach_helps_you_beyond[0] }}</span>
          </div>
        </div>

        <div class="pay-offer">
          <div class="pay-offer__top">Special offer</div>
          <div class="pay-offer__title">
            <strong
              >Personalized reading for <span class="purple-text-1">${{ appData.currentPrice }}</span></strong
            >
          </div>
          <div class="pay-offer__table">
            <div class="pay-offer__row">
              <div>Total today:</div>
              <div>${{ appData.currentPrice }}</div>
            </div>
            <div class="pay-offer__row">
              <div class="pay-offer__small-title">Including 1-week trial personal reading</div>
              <div class="pay-offer__price"><span class="old-price">$19</span><span>$0</span></div>
            </div>
          </div>
        </div>

        <Button
          :text="`GET MY READING FOR $${appData.currentPrice}`"
          class="payment-button"
          :pulse="true"
          @click="showPayment = true"
        />

        <div class="payment-text">
          Your plan will be available immediately after registration. No hidden payments.
          <strong>Today you will be charged €1 for 7-days trial</strong>, then €39.99 after trial for your 30-Day plan.
          All refunds are proceeded according to our money-back policy. To cancel your plan, simply let us know:
          support@natal-chart.online
        </div>

        <div class="pay-safe">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4271 4.11972C13.4189 3.68774 13.4111 3.27965 13.4111 2.88486C13.4111 2.73633 13.352 2.59388 13.247 2.48885C13.142 2.38383 12.9995 2.32482 12.851 2.32482C10.4559 2.32482 8.63234 1.63649 7.11231 0.158583C7.00779 0.0568953 6.86771 0 6.72189 0C6.57606 0 6.43599 0.0568953 6.33146 0.158583C4.81159 1.63649 2.98832 2.32482 0.593358 2.32482C0.444826 2.32482 0.302377 2.38383 0.197349 2.48885C0.092321 2.59388 0.0333169 2.73633 0.0333169 2.88486C0.0333169 3.27973 0.025551 3.68796 0.0172624 4.12002C-0.0595006 8.14006 -0.164639 13.6457 6.53846 15.9691C6.65725 16.0103 6.78645 16.0103 6.90524 15.9691C13.6089 13.6456 13.5039 8.13984 13.4271 4.11972ZM6.72192 14.8457C0.97314 12.7573 1.06006 8.18255 1.1372 4.14137C1.14182 3.89884 1.14631 3.66377 1.14944 3.43333C3.39259 3.33865 5.18637 2.65891 6.72192 1.32123C8.25763 2.65891 10.0517 3.33872 12.295 3.43333C12.2981 3.66369 12.3026 3.89861 12.3073 4.141C12.3843 8.18233 12.4712 12.7573 6.72192 14.8457Z"
              fill="#2D2D2D"
            />
            <path
              d="M8.64967 6.0546L5.94662 8.7575L4.79316 7.60404C4.68753 7.50194 4.54601 7.44542 4.39911 7.44667C4.2522 7.44792 4.11166 7.50683 4.00779 7.61072C3.90391 7.71461 3.845 7.85515 3.84377 8.00206C3.84253 8.14896 3.89907 8.29047 4.00118 8.39609L5.55063 9.94554C5.60258 9.99761 5.66431 10.0389 5.73226 10.067C5.80022 10.0952 5.87307 10.1096 5.94662 10.1095C6.02017 10.1096 6.09302 10.0952 6.16097 10.067C6.22893 10.0389 6.29065 9.99761 6.3426 9.94554L9.44157 6.84665C9.49359 6.79466 9.53486 6.73293 9.56302 6.66499C9.59118 6.59704 9.60567 6.52422 9.60568 6.45067C9.60569 6.37713 9.5912 6.3043 9.56306 6.23635C9.53491 6.16841 9.49366 6.10667 9.44165 6.05467C9.33663 5.94965 9.1942 5.89064 9.04568 5.89063C8.89715 5.89061 8.75471 5.94959 8.64967 6.0546Z"
              fill="#2D2D2D"
            />
          </svg>
          Pay safe & secure
        </div>

        <PaymentVariant />
      </div>
    </section>
    <section class="paywal-page__section">
      <div class="section-container">
        <StepTop :local-title="'Your reading'" />
        <YourReading @get-reading="showPayment = true" />
      </div>
    </section>
    <section class="paywal-page__section">
      <div class="section-container">
        <StepTop :local-title="'Users love us'" />

        <div class="paywal-reviews">
          <div v-for="item in reviews" class="paywal-review-card">
            <div class="paywal-review-card__top">
              <div class="paywal-review-card__avatar">{{ item.avatar }}</div>
              <div>
                <div class="paywal-review-card__name">{{ item.name }}</div>
                <div class="paywal-review-card__top-info">
                  <div>
                    <svg width="65" height="14" viewBox="0 0 65 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.48578 0L8.01734 5.34777H12.9716L8.96391 8.65223L10.4955 14L6.48578 10.6933L2.47813 14L4.00969 8.65223L0 5.34777H4.95422L6.48578 0ZM19.4939 0L21.0234 5.34777H25.9797L21.97 8.65223L23.5016 14L19.4939 10.6933L15.4842 14L17.0158 8.65223L13.0061 5.34777H17.9623L19.4939 0ZM32.5 0L34.0316 5.34777H38.9858L34.9781 8.65223L36.5097 14L32.5 10.6933L28.4903 14L30.0219 8.65223L26.0142 5.34777H30.9684L32.5 0ZM45.5061 0L47.0377 5.34777H51.9939L47.9842 8.65223L49.5158 14L45.5061 10.6933L41.4984 14L43.03 8.65223L39.0203 5.34777H43.9766L45.5061 0ZM58.5142 0L60.0458 5.34777H65L60.9903 8.65223L62.5219 14L58.5142 10.6933L54.5045 14L56.0361 8.65223L52.0284 5.34777H56.9827L58.5142 0Z"
                        fill="#732F72"
                      />
                    </svg>
                  </div>
                  <div class="paywal-review-card__time">{{ item.time }}</div>
                </div>
              </div>
            </div>
            <div class="paywal-review-card__description">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="paywal-page__section">
      <div class="section-container">
        <StepTop :local-title="'What you get'" />
        <div class="paywal-get-list">
          <div v-for="item in getList" class="paywal-get-list__item">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2111_2648)">
                <path
                  d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                  fill="#732F72"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.84767 12.2983L4.25591 9.64545C4.08398 9.47048 3.99213 9.23789 4.00053 8.9987C4.00892 8.75951 4.11687 8.53325 4.3007 8.36955C4.48565 8.20693 4.73098 8.12064 4.98284 8.12961C5.23471 8.13858 5.47255 8.24207 5.64415 8.41739L7.64815 10.4535L10.8221 7.6359C10.8504 7.61117 10.8803 7.58809 10.9116 7.56679L12.4006 6.24305C12.5849 6.07975 12.8298 5.99253 13.0816 6.0005C13.3335 6.00848 13.5717 6.111 13.7441 6.28558C13.916 6.46054 14.0079 6.69313 13.9995 6.93232C13.9911 7.17151 13.8831 7.39777 13.6993 7.56148L9.13714 11.6018L7.55298 13L6.85327 12.2876L6.84767 12.2983Z"
                  fill="#FBF4FB"
                />
              </g>
              <defs>
                <clipPath id="clip0_2111_2648">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {{ item }}
          </div>
        </div>
      </div>
    </section>
    <section class="paywal-page__section">
      <div class="section-container">
        <StepTop :local-title="'As featured in'" />
      </div>
    </section>
    <section class="paywal-page__section">
      <div class="section-container">
        <div class="pay-offer">
          <div class="pay-offer__top">Special offer</div>
          <div class="pay-offer__title">
            <strong
              >Personalized reading for <span class="purple-text-1">${{ appData.currentPrice }}</span></strong
            >
          </div>
          <div class="pay-offer__table">
            <div class="pay-offer__row">
              <div>Total today:</div>
              <div>${{ appData.currentPrice }}</div>
            </div>
            <div class="pay-offer__row">
              <div class="pay-offer__small-title">Including 1-week trial personal reading</div>
              <div class="pay-offer__price"><span class="old-price">$19</span><span>$0</span></div>
            </div>
          </div>
        </div>

        <Button :text="'GET MY READING'" class="payment-button" :pulse="true" @click="showPayment = true" />

        <div class="pay-safe">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4271 4.11972C13.4189 3.68774 13.4111 3.27965 13.4111 2.88486C13.4111 2.73633 13.352 2.59388 13.247 2.48885C13.142 2.38383 12.9995 2.32482 12.851 2.32482C10.4559 2.32482 8.63234 1.63649 7.11231 0.158583C7.00779 0.0568953 6.86771 0 6.72189 0C6.57606 0 6.43599 0.0568953 6.33146 0.158583C4.81159 1.63649 2.98832 2.32482 0.593358 2.32482C0.444826 2.32482 0.302377 2.38383 0.197349 2.48885C0.092321 2.59388 0.0333169 2.73633 0.0333169 2.88486C0.0333169 3.27973 0.025551 3.68796 0.0172624 4.12002C-0.0595006 8.14006 -0.164639 13.6457 6.53846 15.9691C6.65725 16.0103 6.78645 16.0103 6.90524 15.9691C13.6089 13.6456 13.5039 8.13984 13.4271 4.11972ZM6.72192 14.8457C0.97314 12.7573 1.06006 8.18255 1.1372 4.14137C1.14182 3.89884 1.14631 3.66377 1.14944 3.43333C3.39259 3.33865 5.18637 2.65891 6.72192 1.32123C8.25763 2.65891 10.0517 3.33872 12.295 3.43333C12.2981 3.66369 12.3026 3.89861 12.3073 4.141C12.3843 8.18233 12.4712 12.7573 6.72192 14.8457Z"
              fill="#2D2D2D"
            />
            <path
              d="M8.64967 6.0546L5.94662 8.7575L4.79316 7.60404C4.68753 7.50194 4.54601 7.44542 4.39911 7.44667C4.2522 7.44792 4.11166 7.50683 4.00779 7.61072C3.90391 7.71461 3.845 7.85515 3.84377 8.00206C3.84253 8.14896 3.89907 8.29047 4.00118 8.39609L5.55063 9.94554C5.60258 9.99761 5.66431 10.0389 5.73226 10.067C5.80022 10.0952 5.87307 10.1096 5.94662 10.1095C6.02017 10.1096 6.09302 10.0952 6.16097 10.067C6.22893 10.0389 6.29065 9.99761 6.3426 9.94554L9.44157 6.84665C9.49359 6.79466 9.53486 6.73293 9.56302 6.66499C9.59118 6.59704 9.60567 6.52422 9.60568 6.45067C9.60569 6.37713 9.5912 6.3043 9.56306 6.23635C9.53491 6.16841 9.49366 6.10667 9.44165 6.05467C9.33663 5.94965 9.1942 5.89064 9.04568 5.89063C8.89715 5.89061 8.75471 5.94959 8.64967 6.0546Z"
              fill="#2D2D2D"
            />
          </svg>
          Pay safe & secure
        </div>

        <PaymentVariant />

        <div class="copy">© 2024 Natal Chart</div>
      </div>
    </section>

    <PayDialog
      v-show="showPayment"
      @close="showPayment = false"
      :timer="timerData"
      :old-price="7.99"
      :price="appData.currentPrice"
      :title="'Start your 7-day trial'"
      :footer-text="`Your plan will be available immediately after registration. No hidden payments. <strong>Today you will be charged €1 for 7-days trial</strong> , then €39.99 after trial for your 30-Day plan.`"
      :button-text="'Start 7-Day Trial'"
    />
  </div>
</template>

<style scoped lang="scss">
.paywal-page {
  background: #fff8ff;
  padding-bottom: 3rem;

  &__top {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    background: var(--c-white);
    margin-bottom: 1rem;
    color: var(--c-black);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 0.6rem var(--container-padding);

    &-timer {
      flex-shrink: 0;
    }

    .button {
      width: max-content;
      padding: 0 1rem;
      font-weight: 700;
      width: 10rem;
    }
  }

  &__card {
    margin-bottom: 2rem;
  }

  &__offer-section {
    padding: 3rem 2rem;
    background: #f5eaf7;
  }

  &__section {
    margin-bottom: 4rem;
  }
}

.goal {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--c-black);
  font-size: 1.4rem;
  line-height: 140%;
  margin-bottom: 3.2rem;
}

.pay-offer {
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  &__top {
    text-align: center;
    padding: 0.3rem 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);
    margin-bottom: 1.4rem;
  }

  &__title {
    font-size: 1.8rem;
    text-align: center;
    color: var(--c-black);
    margin-bottom: 1.8rem;
  }

  &__table {
    padding: 0 var(--container-padding);
  }

  &__row {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #d2d2d2;
    color: var(--c-black);
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;

    &:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  &__price {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    flex-shrink: 0;
  }

  &__small-title {
    font-size: 1.3rem;
  }
}

.payment-text {
  font-size: 1.1rem;
  line-height: 140%;
  text-align: center;
  color: var(--c-black);
  opacity: 0.7;
  margin-bottom: 2.5rem;

  a {
    text-decoration: underline;
  }
}

.payment-button {
  margin-bottom: 2.5rem;
}

.pay-safe {
  background: #ecdaeb;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: var(--c-black);
  width: max-content;
  margin: 0 auto 2rem;
  font-size: 1.4rem;
  padding: 1.2rem 2.4rem;
}

.section-container {
  padding: 0 var(--container-padding);
}

.paywal-reviews {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.paywal-review-card {
  background: #f5eaf7;
  border-radius: 1.5rem;
  padding: 1.7rem var(--container-padding);

  &__top {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  &__avatar {
    width: 3.8rem;
    height: 3.8rem;
    background: #e2d0e1;
    border-radius: 50%;
    flex-shrink: 0;
    color: var(--c-black);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }

  &__name {
    color: var(--c-black);
  }

  &__time {
    color: var(--c-black);
    opacity: 0.6;
  }

  &__top-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  &__description {
    color: var(--c-black);
  }
}

.paywal-get-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  &__item {
    display: flex;
    gap: 0.8rem;
    color: var(--c-black);
    font-size: 1.5rem;

    svg {
      flex-shrink: 0;
      position: relative;
      top: 3px;
    }
  }
}
</style>
