<script setup>
import { motion as m } from 'motion-v'

const props = defineProps({
  id: {
    default: ''
  },
  title: {
    default: 'Blog Title'
  },
  excerpt: {
    default: ''
  },
  author: {
    default: 'Anonymous'
  },
  date: {
    default: ''
  },
  readTime: {
    default: ''
  },
  tags: {
    default: () => []
  }
})
</script>

<template>
  <m.div
    class="blog-card-wrapper"
    :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
    :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }"
    :in-view-options="{ amount: 0.2, once: true }"
  >
    <NuxtLink :to="`/blog/${props.id}`" class="card-link">
      <div class="blog-card">
        <div class="card-content">
          <!-- Date badge -->
          <div class="date-badge">
            <span class="date-text">{{ props.date }}</span>
          </div>

          <!-- Title section -->
          <div class="title-section">
            <h2 class="card-title">{{ props.title }}</h2>
          </div>

          <!-- Excerpt -->
          <p class="card-excerpt">{{ props.excerpt }}</p>

          <!-- Footer with tags and read indicator -->
          <div class="card-footer">
            <div class="tags-wrapper">
              <span v-for="tag in props.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="read-info">
              <span class="read-time">{{ props.readTime }}</span>
              <span class="arrow-icon">→</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </m.div>
</template>

<style scoped>
.blog-card-wrapper {
  margin-bottom: 30px;
}

.card-link {
  text-decoration: none;
  display: block;
}

.blog-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px 25px 8px 25px;
  padding: 45px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.blog-card:hover {
  border-color: rgba(251, 113, 133, 0.4);
}

/* Card content */
.card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Date badge */
.date-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.date-text {
  font-size: 13px;
  color: var(--fg2);
  letter-spacing: 0.5px;
  font-weight: 500;
}

/* Title section */
.title-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-title {
  font-size: 36px;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  font-family: var(--font-k2d);
  line-height: 1.3;
  transition: color 0.2s ease;
}

.blog-card:hover .card-title {
  color: var(--pink);
}

/* Excerpt */
.card-excerpt {
  font-size: 16px;
  line-height: 1.7;
  color: var(--white);
  margin: 0;
  opacity: 0.85;
}

/* Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  gap: 20px;
}

.tags-wrapper {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 7px 16px;
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 20px;
  font-size: 12px;
  color: var(--blue);
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Read info */
.read-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.read-time {
  font-size: 13px;
  color: var(--fg2);
  font-weight: 500;
}

.arrow-icon {
  font-size: 18px;
  color: var(--pink);
  transition: transform 0.2s ease;
}

.blog-card:hover .arrow-icon {
  transform: translateX(3px);
}

@media only screen and (max-width: 768px) {
  .blog-card {
    padding: 30px 25px;
    border-radius: 8px 20px 8px 20px;
  }

  .card-title {
    font-size: 26px;
  }

  .card-excerpt {
    font-size: 15px;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .read-info {
    align-items: flex-start;
  }
}
</style>
