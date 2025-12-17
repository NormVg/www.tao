<template>
<BasicPage :is-page="true">

  <Hero/>
  <Intro/>
  <ForYou/>
  <FeaturedBlog/>
  <FoundingMembers/>
</BasicPage>
</template>

<script lang="ts" setup>
import BasicPage from '~/components/base/BasicPage.vue';
import ForYou from '~/components/home/ForYou.vue';
import Hero from '~/components/home/hero.vue';
import Intro from '~/components/home/Intro.vue';
import FeaturedBlog from '~/components/home/FeaturedBlog.vue';
import FoundingMembers from '~/components/home/FoundingMembers.vue';


</script>

<style scoped>

</style>
