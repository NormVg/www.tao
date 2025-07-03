
<script  setup>
import { NuxtLink } from '#components';
import { ExternalLink } from 'lucide-vue-next';

const props = defineProps({
  head:{
    default:"heading"
  },
  sub:{
    default:""
  },
  link:{
    default:""
  },
  thumb:{
    default:""
  },
  bottomLine:{
    default:true
  }
})

</script>

<template>
  <div class="apps-card">
    <main>
      <div class="head">{{ props.head }} <NuxtLink :to="props.link"> <ExternalLink size="20"/>  </NuxtLink>  </div>

      <div class="sub">{{props.sub}}</div>
    </main>
    <img :src="props.thumb" alt="" class="thumb">

  </div>

  <div class="btm-line" v-if="props.bottomLine"></div>
</template>

<style scoped>

.apps-card{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  gap: 20px;
}
/*
.head *{
  border: 1px solid salmon;
}
 */


main{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

}

.head a{
  display: flex;
  align-items: center;
  justify-content: center;
}

.head{
  font-size: 40px;
  /* border: 1px solid salmon; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  color: whitesmoke;
  font-weight: bold;
}

.sub{
  width: 85%;
}
.thumb{
  width: 400px;
  aspect-ratio: 550/309;
}

.btm-line{
  height: 1px;
  width: 85vw;
  border-bottom: 1px solid var(--border);
  margin: 70px auto;


}

</style>
