<script setup>
import FlowerRing from "~/assets/flower-ring.png";
import Flower from "~/assets/flower.png";
import FutureBar2 from "./futureBar2.vue";
import AnnouncementBanner from "~/components/AnnouncementBanner.vue";
import { motion as m } from "motion-v";
</script>

<template>
  <div class="hero-box">
    <main>
      <m.div class="pre"
      :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
      :animate="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
      :transition="{ duration: 0.3, ease: 'easeInOut' }"
      >We are</m.div>
      <m.div class="head"
      :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
      :animate="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
      :transition="{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }"

      >TheAlphaOnes</m.div>
      <m.div class="sub"
      :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
      :animate="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
      :transition="{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }"

      >
        <!-- driven by innovation, passion, and a deep love for technology. Our goal
        is to create solutions that enhance lives, spark innovation, and push
        the boundaries of what's possible. -->

        Crafting meaningful experiences designed to resonate deeply, spark curiosity and leave a lasting impact.

        <!-- Crafting meaningful experiences designed to resonate deeply, spark curiosity,br and leave a lasting impact, built to stand the test of time. -->
      </m.div>

      <m.div
        class="announcement-wrapper"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }"
      >
        <AnnouncementBanner />
      </m.div>
    </main>

    <img :src="FlowerRing" alt="" class="flower-ring"

    />
  </div>

  <div class="border">

    <FutureBar2/>
  </div>


</template>

<style scoped>


.hero-box {
  /* border: 1px solid salmon; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
}

.flower-ring {
  position: absolute;

  margin-bottom: 10px;
  opacity: 0.25;
  width: 500px;
  animation: roate 20s linear infinite;
  pointer-events: none;
  z-index: 0;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
  z-index: 1;
}

.announcement-wrapper {
  margin-top: 30px;
}

.head {
  font-size: 125px;
  font-family: var(--font-ital);
  color: whitesmoke;
}

.sub {
  font-size: 20px;
  width: min(625px, 100%);
  text-align: center;
  margin-top: -20px;
}

.pre {
  font-size: 20px;
  margin-bottom: -20px;
}

/* .flower {
  width: 50px;
  position: absolute;

  top: 60px;
  right: 0px;

  margin: 20px 30px;

} */

.border{
  /* border: 1px solid salmon; */
  margin-top: 190px;
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
  .head {
    font-size: 80px;
  }

  .flower-ring {
    margin-bottom: 80px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    animation: roate-mobile 20s linear infinite;
  }

  @keyframes roate-mobile {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  .pre {
    font-size: 15px;
    margin-bottom: 0px;

  }
  .sub {
    font-size: 15px;
    margin-top: 0px;

  }

.hero-box {
  /* border: 1px solid salmon; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;

}
}
</style>
