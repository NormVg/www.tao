<script setup>
import AppCard from '../card/AppCard.vue';



import Flower2 from "~/assets/flower-2.svg"
</script>


<template>
  <div class="foryou-box">
    <div class="bg">For you</div>
    <main>
      <AppCard v-for="item,index in appDataConfig" :key="item" :head="item.name" :sub="item.sub" :link="item.link" :thumb="item.thumb" :bottom-line="index != (appDataConfig.length - 1)"/>




    </main>



  </div>


  <img :src="Flower2" alt="flower 2" class="flower-2" @click="() => scrollToElement('#main-box')">
</template>


<style scoped>
/* .foryou-box{

} */


.bg{
  font-size: 250px;
  opacity: 0.25;
  user-select: none;

}

main{
  /* margin-top: -125px; */
  z-index: 100;
  position: relative;
  top: -125px;
}


.flower-2{
animation: roate 15s linear infinite;
width: 80px;
opacity: 0.3;
margin: 0 auto;
margin-top: 125px;
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
.bg{
  font-size: 100px;
  opacity: 0.25;
  user-select: none;

}

main{
  /* margin-top: -125px; */
  z-index: 100;
  position: relative;
  top: 10px;
}
}


</style>
