<template>
<BasicPage :is-page="true">

  <Hero/>
  <Intro/>
  <ForYou/>
</BasicPage>
</template>

<script lang="ts" setup>
import BasicPage from '~/components/base/BasicPage.vue';
import ForYou from '~/components/home/ForYou.vue';
import Hero from '~/components/home/hero.vue';
import Intro from '~/components/home/Intro.vue';


</script>

<style scoped>

</style>
