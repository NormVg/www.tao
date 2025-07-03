<script setup>
import FlowerRing from "~/assets/flower-ring.png";
import Flower from "~/assets/flower.png";


import FutureBar from "./futureBar.vue";


</script>

<template>
  <div class="hero-box">
    <main>
      <div class="pre">We are</div>
      <div class="head">TheAlphaOnes</div>
      <div class="sub">
        driven by innovation, passion, and a deep love for technology. Our goal
        is to create solutions that enhance lives, spark innovation, and push
        the boundaries of what’s possible.
      </div>
    </main>

    <img :src="FlowerRing" alt="" class="flower-ring" />
  </div>

  <div class="border">

    <FutureBar/>
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
  margin-top: 120px;
}

.flower-ring {
  position: absolute;

  margin-top: 10px;
  opacity: 0.25;
  width: 400px;
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
    width: 80%;
  }

  .pre {
    font-size: 15px;
  }
  .sub {
    font-size: 15px;
  }
}
</style>
