<script setup>
import AppCard from '../card/AppCard.vue';
</script>


<template>
  <div class="foryou-box">
    <div class="bg">For you</div>
    <main>
      <AppCard v-for="item,index in appDataConfig" :key="item" :head="item.name" :sub="item.sub" :link="item.link" :thumb="item.thumb" :bottom-line="index != (appDataConfig.length - 1)"/>




    </main>



  </div>


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
