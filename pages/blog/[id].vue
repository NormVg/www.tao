<template>
  <BasicPage :is-page="true">
    <div v-if="post" class="blog-post-container">
      <!-- Back Button -->
      <m.div
        class="back-button"
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }"
      >
        <NuxtLink to="/blog" class="back-link">Back to Blog</NuxtLink>
      </m.div>

      <!-- Post Header -->
      <article class="blog-post">
        <header class="post-header">
          <m.div
            class="post-meta"
            :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
            :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }"
          >
            <span>{{ post.date }}</span>
            <span class="separator">•</span>
            <span>{{ post.readTime }}</span>
          </m.div>

          <m.h1
            class="post-title"
            :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
            :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }"
          >
            {{ post.title }}
          </m.h1>

          <m.div
            class="post-tags"
            :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
            :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }"
          >
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </m.div>
        </header>

        <!-- Post Content -->
        <m.div
          v-if="markdownContent"
          class="post-content markdown-body"
          v-html="renderMarkdown(markdownContent)"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }"
        />

        <!-- Post Footer -->
        <m.footer
          class="post-footer"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.3, delay: 0.5, ease: 'easeInOut' }"
        >
          <div class="author-info">
            <span class="author-label">Written by</span>
            <span class="author-name">{{ post.author }}</span>
          </div>
          <NuxtLink to="/blog" class="back-to-blog">Back to all posts</NuxtLink>
        </m.footer>
      </article>
    </div>

    <div v-else class="not-found">
      <h1>Blog post not found</h1>
      <NuxtLink to="/blog" class="back-link">Back to Blog</NuxtLink>
    </div>
  </BasicPage>
</template>

<script setup>
import { motion as m } from 'motion-v'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BasicPage from '~/components/base/BasicPage.vue'
import { blogPosts } from '~/utils/blog.config.js'
import 'highlight.js/styles/github-dark.css'

const route = useRoute()
const postId = route.params.id

// Find the blog post by ID
const post = computed(() => {
  return blogPosts.find(p => p.id === postId)
})

// Fetch markdown content
const markdownContent = ref('')

if (post.value && post.value.mdFile) {
  // Fetch the markdown file
  fetch(post.value.mdFile)
    .then(response => response.text())
    .then(content => {
      markdownContent.value = content
    })
    .catch(error => {
      console.error('Error loading markdown:', error)
      markdownContent.value = '# Error loading content\n\nCould not load the blog post content.'
    })
}

// Set SEO meta tags
if (post.value) {
  useSeoMeta({
    title: `${post.value.title} — TheAlphaOnes Blog`,
    description: post.value.excerpt,
    ogTitle: `${post.value.title} — TheAlphaOnes Blog`,
    ogDescription: post.value.excerpt
  })
}
</script>

<style scoped>
.blog-post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-button {
  margin-top: 100px;
  margin-bottom: 40px;
}

.back-link {
  color: var(--white);
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}

.back-link:hover {
  color: var(--pink);
  border-bottom-color: var(--pink);
}

.blog-post {
  margin-bottom: 100px;
}

.post-header {
  margin-bottom: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.post-meta {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: var(--fg2);
}

.separator {
  color: var(--fg2);
}

.post-title {
  font-size: 56px;
  font-family: var(--font-ital);
  color: whitesmoke;
  margin: 0;
  line-height: 1.2;
}

.post-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  padding: 5px 15px;
  background: var(--input);
  border-radius: 20px;
  font-size: 12px;
  color: var(--blue);
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.tag:hover {
  border-color: var(--blue);
}

.post-content {
  line-height: 1.8;
  font-size: 18px;
  margin-bottom: 60px;
}

/* Markdown Content Styling */
.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  color: whitesmoke;
  margin-top: 2em;
  margin-bottom: 0.8em;
  font-family: var(--font-k2d);
  font-weight: 700;
}

.post-content :deep(h1) { font-size: 2.2em; }
.post-content :deep(h2) { font-size: 1.8em; }
.post-content :deep(h3) { font-size: 1.4em; }

.post-content :deep(p) {
  margin-bottom: 1.5em;
  color: var(--white);
}

.post-content :deep(a) {
  color: var(--pink);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.post-content :deep(a:hover) {
  border-bottom-color: var(--pink);
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 1.5em 0;
  padding-left: 2em;
  color: var(--white);
}

.post-content :deep(li) {
  margin-bottom: 0.5em;
}

.post-content :deep(code) {
  font-family: var(--term-font);
  font-size: 0.9em;
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 8px;
  border-radius: 4px;
  color: var(--green);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.post-content :deep(pre) {
  background: #0d1117 !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin: 2em 0;
  overflow-x: auto;
  position: relative;
}

.post-content :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
  color: inherit;
  font-size: 14px;
  line-height: 1.6;
}

.post-content :deep(blockquote) {
  border-left: 3px solid var(--pink);
  padding-left: 1.5em;
  margin: 1.5em 0;
  color: var(--fg2);
  font-style: italic;
}

.post-content :deep(strong) {
  color: whitesmoke;
  font-weight: 700;
}

.post-content :deep(em) {
  color: var(--white);
  font-style: italic;
}

.post-footer {
  border-top: 1px solid var(--border);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
}

.author-label {
  color: var(--fg2);
  font-size: 14px;
}

.author-name {
  color: whitesmoke;
  font-size: 16px;
  font-weight: 500;
}

.back-to-blog {
  color: var(--white);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}

.back-to-blog:hover {
  color: var(--pink);
  border-bottom-color: var(--pink);
}

.not-found {
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
}

.not-found h1 {
  font-size: 48px;
  font-family: var(--font-ital);
  color: whitesmoke;
  margin-bottom: 30px;
}

@media only screen and (max-width: 768px) {
  .back-button {
    margin-top: 60px;
  }

  .post-title {
    font-size: 36px;
  }

  .post-content {
    font-size: 16px;
  }

  .post-content :deep(pre) {
    padding: 15px;
    border-radius: 8px;
  }

  .post-content :deep(pre code) {
    font-size: 13px;
  }

  .post-footer {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .blog-post-container {
    padding: 0 15px;
  }
}
</style>
