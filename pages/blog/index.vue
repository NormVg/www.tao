<template>
  <BasicPage :is-page="true">
    <div class="blog-list-container">
      <!-- Hero Section -->
      <div class="blog-hero">
        <m.div
          class="hero-label"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }"
        >
          Our Blog
        </m.div>
        <m.h1
          class="hero-title"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }"
        >
          Thoughts & Ideas
        </m.h1>
        <m.p
          class="hero-subtitle"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{ duration: 0.3, delay: 0.4, ease: 'easeInOut' }"
        >
          Insights on building the future of software, developer tools, and AI
        </m.p>
      </div>

      <!-- Blog Posts Grid -->
      <div class="blog-grid">
        <BlogCard
          v-for="post in blogPosts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :excerpt="post.excerpt"
          :author="post.author"
          :date="post.date"
          :read-time="post.readTime"
          :tags="post.tags"
        />
      </div>
    </div>
  </BasicPage>
</template>

<script setup>
import { motion as m } from 'motion-v'
import BasicPage from '~/components/base/BasicPage.vue'
import BlogCard from '~/components/card/BlogCard.vue'
import { blogPosts } from '~/utils/blog.config.js'

const baseUrl = 'https://www.taohq.org'

useSeoMeta({
  title: 'Blog | TheAlphaOnes - Developer Tools, AI & Tech Insights',
  description: 'Insights on building the future of software, developer tools, and AI. Learn about COOK CLI, modern development practices, and cutting-edge technology from TheAlphaOnes team.',
  ogTitle: 'TheAlphaOnes Blog - Developer Tools & AI Insights',
  ogDescription: 'Insights on building the future of software, developer tools, and AI. Learn about COOK CLI, modern development practices, and cutting-edge technology.',
  ogImage: `${baseUrl}/og.png`,
  ogUrl: `${baseUrl}/blog`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'TheAlphaOnes Blog - Developer Tools & AI Insights',
  twitterDescription: 'Insights on building the future of software, developer tools, and AI',
  twitterImage: `${baseUrl}/og.png`,
  twitterSite: '@thenormvg',
  keywords: 'developer tools, COOK CLI, AI projects, software development, tech blog, programming insights, developer productivity',
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: `${baseUrl}/blog` }
  ]
})
</script>

<style scoped>
.blog-list-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog-hero {
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.hero-label {
  font-size: 18px;
  color: var(--fg2);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-title {
  font-size: 90px;
  font-family: var(--font-ital);
  color: whitesmoke;
  margin: 0;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--white);
  max-width: 600px;
  line-height: 1.6;
}

.blog-grid {
  margin-bottom: 100px;
}

@media only screen and (max-width: 768px) {
  .blog-hero {
    margin-top: 100px;
    margin-bottom: 60px;
  }

  .hero-title {
    font-size: 60px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .blog-list-container {
    padding: 0 10px;
  }
}
</style>
