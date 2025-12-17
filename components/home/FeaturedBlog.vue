<script setup>
import { motion as m } from 'motion-v'
import { blogPosts } from '~/utils/blog.config.js'

// Get the latest 2 blog posts
const featuredPosts = blogPosts.slice(0, 2)
</script>

<template>
  <div class="blog-section">
    <div class="section-header">
      <m.div
        class="section-label"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }"
        :in-view-options="{ amount: 1, once: true }"
      >
        Latest Insights
      </m.div>

      <m.h2
        class="section-title"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }"
        :in-view-options="{ amount: 1, once: true }"
      >
        From the Blog
      </m.h2>
    </div>

    <div class="blog-posts">
      <m.div
        v-for="(post, index) in featuredPosts"
        :key="post.id"
        class="blog-post-item"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.4, delay: 0.2 + (index * 0.1), ease: 'easeInOut' }"
        :in-view-options="{ amount: 0.2, once: true }"
      >
        <NuxtLink :to="`/blog/${post.id}`" class="post-link">
          <div class="post-date">{{ post.date }}</div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <div class="post-footer">
            <div class="tags">
              <span v-for="tag in post.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <span class="read-time">{{ post.readTime }}</span>
          </div>
        </NuxtLink>
      </m.div>
    </div>

    <m.div
      class="view-all"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.5, ease: 'easeInOut' }"
      :in-view-options="{ amount: 1, once: true }"
    >
      <NuxtLink to="/blog" class="view-all-link">
        View All Posts
      </NuxtLink>
    </m.div>
  </div>
</template>

<style scoped>
.blog-section {
  max-width: 1100px;
  margin: 150px auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.section-label {
  font-size: 14px;
  color: var(--fg2);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

.section-title {
  font-size: 70px;
  font-family: var(--font-ital);
  color: whitesmoke;
  margin: 0;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.blog-post-item {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px 25px 8px 25px;
  padding: 35px;
  transition: all 0.2s ease;
}

.blog-post-item:hover {
  border-color: rgba(251, 113, 133, 0.4);
}

.post-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-date {
  font-size: 13px;
  color: var(--fg2);
  letter-spacing: 0.5px;
  font-weight: 500;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  width: fit-content;
}

.post-title {
  font-size: 28px;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  line-height: 1.3;
  font-family: var(--font-k2d);
  transition: color 0.2s ease;
}

.blog-post-item:hover .post-title {
  color: var(--pink);
}

.post-excerpt {
  font-size: 15px;
  line-height: 1.6;
  color: var(--white);
  margin: 0;
  opacity: 0.85;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 5px 12px;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 20px;
  font-size: 11px;
  color: var(--blue);
  font-weight: 500;
}

.read-time {
  font-size: 13px;
  color: var(--fg2);
  font-weight: 500;
}

.view-all {
  text-align: center;
}

.view-all-link {
  display: inline-block;
  font-size: 15px;
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  padding: 12px 28px;
  border: 1px solid var(--border);
  border-radius: 25px;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
}

.view-all-link:hover {
  border-color: var(--pink);
  color: var(--pink);
}

@media only screen and (max-width: 768px) {
  .blog-section {
    margin: 80px auto;
  }

  .section-title {
    font-size: 50px;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .blog-posts {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .blog-post-item {
    padding: 28px;
  }

  .post-title {
    font-size: 24px;
  }

  .post-excerpt {
    font-size: 14px;
  }
}
</style>
