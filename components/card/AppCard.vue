
<script  setup>
import { NuxtLink } from '#components';
import { ExternalLink } from 'lucide-vue-next';
import { motion as m } from 'motion-v';

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
  <div class="apps-card" >
    <main>
      <m.div class="head"
          :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
          :while-in-view="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
          :transition="{ duration: 0.3,delay:0.3, ease: 'easeInOut' }""
          :in-view-options="{amount:1,once: true}"
            >

            {{ props.head }}
          <NuxtLink :to="props.link"> <ExternalLink size="20"/>  </NuxtLink>

      </m.div>

      <m.div class="sub"
    :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
    :while-in-view="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
    :transition="{ duration: 0.3,delay:0.6, ease: 'easeInOut' }""
    :in-view-options="{amount:0.2,once: true}"

      >
        {{props.sub}}

      </m.div>
    </main>
    <m.img
    :initial="{ opacity: 0, y: 20 ,filter: 'blur(10px)'}"
    :while-in-view="{ opacity: 1, y: 0 ,filter: 'blur(0px)'}"
    :transition="{ duration: 0.3,delay:0.3, ease: 'easeInOut' }""
    :in-view-options="{amount:0.2,once: true}"
    :src="props.thumb" alt="" class="thumb"
    >

  </m.img>



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
  transition: all 0.3s ease-in-out;
}


.head a:hover{
  margin-bottom: 10px;
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
  border: 1px solid #4A4A4A50;
  border-radius: 5px 20px 5px 20px;
}

.btm-line{
  height: 1px;
  width: 85vw;
  border-bottom: 1px solid var(--border);
  margin: 70px auto;


}

@media only screen and (max-width: 768px) {
.apps-card{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
}

.thumb{
  width: 90%;
  aspect-ratio: 550/309;
  align-self: center;
}
.sub{
  width: 100%;
  /* width: 90%; */


}

main{
align-self: center;
  width: 90%;

}

}

</style>
