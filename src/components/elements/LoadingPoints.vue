<template>
  <div class="loading">
    <div class="loading__point">.</div>
    <div class="loading__point">.</div>
    <div class="loading__point">.</div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);

  @for $i from 1 through 3 {
    .loading__point:nth-child(#{$i}) {
      animation: flash 1s #{0.5 * $i}s linear infinite;
    }
  }
}

@keyframes flash {
  0% {
    color: rgba(255, 255, 255, 0.5);
  }
  50% {
    color: rgba(255, 255, 255, 1);
  }
  100% {
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
