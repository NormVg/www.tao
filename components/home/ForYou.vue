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

  <img :src="Flower2" alt="flower 2" class="flower-2">
</template>


<style scoped>
/* .foryou-box{

} */


.bg{
  font-size: 250px;
  opacity: 0.25;
}

main{
  margin-top: -125px;
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


</style>
