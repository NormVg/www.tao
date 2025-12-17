<script setup>
import Flower2 from '~/assets/flower-2.svg'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="flower-end-section">
    <img :src="Flower2" alt="flower 2" class="flower-2" @click="scrollToTop">
  </div>
</template>

<style scoped>
.flower-end-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 125px;
}

.flower-2 {
  animation: roate 15s linear infinite;
  width: 80px;
  opacity: 0.3;
  margin: 0 auto;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.flower-2:hover {
  opacity: 0.5;
}

@keyframes roate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 768px) {
  .flower-end-section {
    margin-top: 80px;
  }
}
</style>
