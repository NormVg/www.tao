<template>
 <NuxtPage />
<Analytics />
<StructuredData type="organization" :data="{}" />
<StructuredData type="website" :data="{}" />
</template>
<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
import StructuredData from '~/components/seo/StructuredData.vue'

const route = useRoute()
const baseUrl = 'https://www.taohq.org'

useSeoMeta({
  title: 'TheAlphaOnes — Building the Future of Software',
  description: 'A startup-in-the-making, crafting developer tools, AI projects, and bold ideas shaping the next generation of technology.',
  ogTitle: 'TheAlphaOnes — Bold Tools, AI Projects & More',
  ogDescription: 'Discover TheAlphaOnes — a startup shaping innovative developer tools, AI experiments, and futuristic software experiences. We also host a small creative community.',
  ogImage: `${baseUrl}/og.png`,
  ogUrl: `${baseUrl}${route.path}`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@thenormvg',
  themeColor: '#18171C',
  keywords: 'developer tools, AI projects, software startup, innovative tech, future of software, AI experiments, creative software',
  author: 'TheAlphaOnes',
  creator: 'TheAlphaOnes',
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: `${baseUrl}${route.path}` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

</script>
