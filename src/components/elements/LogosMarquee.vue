<script setup>
import { ref, onMounted } from 'vue'

const marqueeLine = ref(null)
const marqueeLineBox = ref(null)
const marqueeLineBoxItem = ref(null)

onMounted(() => {
  setTimeout(() => {
    const itemWidth = marqueeLineBoxItem.value.offsetWidth
    for (let i = 0; i < Math.ceil(window.innerWidth / itemWidth); i++) {
      marqueeLineBox.value.appendChild(marqueeLineBoxItem.value.cloneNode(true))
    }
    marqueeLine.value.appendChild(marqueeLineBox.value.cloneNode(true))
    marqueeLine.value.classList.add('is-animate')
  }, 0)
})
</script>

<template>
  <div class="marquee-line-container">
    <div ref="marqueeLine" class="marquee-line">
      <div ref="marqueeLineBox" class="marquee-line-box">
        <div ref="marqueeLineBoxItem" class="marquee-line-box-item">
          <img src="/images/marquee-logo-1.svg" />
          <img src="/images/marquee-logo-2.svg" />
          <img src="/images/marquee-logo-3.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee-line-container {
  height: 7rem;
  background: rgba(144, 54, 113, 0.09);
  overflow: hidden;
  margin: 0 -2rem;
}
.marquee-line {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: max-content;
  height: 100%;
  padding: 2rem;

  &.is-animate {
    animation: scroll 40s linear infinite;
  }
}

.marquee-line-box {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;

  img {
    position: relative;
    top: 3px;
  }
}

.marquee-line-box-item {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 1rem));
  }
}
</style>
