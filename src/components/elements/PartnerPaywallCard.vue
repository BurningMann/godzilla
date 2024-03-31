<template>
  <div class="paywall-card">
    <div class="paywall-card__image">
      <div class="paywall-card__image-box">
        <div>
          <img src="/images/sign-1.png" alt="" />
        </div>
        <div class="paywall-card__image-label">You</div>
      </div>
      <div class="paywall-card__image-box">
        <div>
          <img src="/images/sign-2.png" alt="" />
        </div>
        <div class="paywall-card__image-label">Partner</div>
      </div>
    </div>

    <div class="paywall-card__content">
      <div class="paywall-card__col">
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Zodiac Sign</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Libra</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Date of birth</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Sep 25 2001</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Ruling Planet</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Mars</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Element</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Air</strong></div>
        </div>
      </div>
      <div class="paywall-card__col">
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Zodiac Sign</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Libra</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Date of birth</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Sep 25 2001</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Ruling Planet</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Mars</strong></div>
        </div>
        <div class="paywall-card__box">
          <div class="paywall-card__box-title">Element</div>
          <div class="paywall-card__box-value purple-text-1"><strong>Air</strong></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paywall-card {
  border-radius: 10px;
  background: #f5eaf7;
  width: calc(100% - 4rem);
  margin: 0 auto;
  overflow: hidden;

  &__image {
    display: flex;
    justify-content: center;
    padding: 1.4rem 0;

    & > div {
      flex: 1;
    }
  }

  &__image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image-label {
    font-size: 1.3rem;
    color: #a3a3a3;
    font-weight: 600;
  }

  &__content {
    padding: 1.6rem 2rem;
    background: rgba(144, 54, 113, 0.1);
    display: flex;
    justify-content: space-between;

    & > div {
      flex: 1;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    &:first-child {
      border-right: 1px solid #c0afbf;
    }

    &:last-child {
      padding-left: 2rem;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
  }

  &__box-title {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 140%;
    color: #6c6a6c;
  }

  &__box-value {
    font-size: 1.5rem;
  }
}
</style>
