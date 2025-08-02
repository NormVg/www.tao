<template>
  <m.div
    class="future-bar-box"
    :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
    :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.6, ease: 'easeInOut' }"
  >
    <div class="marquee mc1">
      <div class="marquee-content ">{{ content }}</div>
      <div class="marquee-content ">{{ content }}</div>
    </div>

    <div class="marquee mc2">
      <div class="marquee-content ">{{ content }}</div>
      <div class="marquee-content ">{{ content }}</div>
    </div>

  </m.div>
</template>

<script setup>
import { computed } from 'vue'
import { motion as m } from 'motion-v'

const content = computed(() =>
  'FUTURE • '.repeat(60)
)
</script>

<style scoped>
.future-bar-box {
  overflow: hidden;
  white-space: nowrap;
  text-transform: uppercase;
  background: url("~/assets/greyy.png") 0 0 / cover no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* apply gradient or image-text style as before */
}

.marquee {
  display: flex;
  flex-direction: row;
  /* animation: marquee-horizontal 3s linear infinite; */
  transform-style: preserve-3d;
  /* gap: 100px; */
}

.mc1{
  animation: marquee-horizontal 20s linear infinite;
}


.mc2{
  animation: marquee-horizontal 20s linear infinite reverse;
}

.marquee-content {
  flex-shrink: 0;
  padding-right: 2rem;
  /* border: 1px solid salmon; */
}


@media only screen and (max-width: 768px) {
.future-bar-box {

  -webkit-text-fill-color: #4A4A4A;
}

.mc1{
  animation: marquee-horizontal 3s linear infinite;
}


.mc2{
  animation: marquee-horizontal 5s linear infinite reverse;
}
}

@keyframes marquee-horizontal {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
</style>
