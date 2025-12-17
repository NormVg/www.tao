<script setup>
import { ExternalLink } from 'lucide-vue-next'
import StarIcon from '~/assets/star.svg'
import { announcement } from '~/utils/announcement.config.js'
</script>

<template>
  <a
    v-if="announcement.enabled"
    :href="announcement.link"
    target="_blank"
    rel="noopener noreferrer"
    class="announcement-banner"
  >
    <img :src="StarIcon" alt="star" class="banner-icon">
    <span class="banner-text">{{ announcement.text }}</span>
    <div class="banner-right">
      <span v-if="announcement.showDot" class="live-dot"></span>
      <ExternalLink :size="16" class="external-icon" />
    </div>
  </a>
</template>

<style scoped>
.announcement-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.announcement-banner:hover {
  background: rgba(0, 0, 0, 0.7);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.banner-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.banner-text {
  font-size: 15px;
  font-weight: 600;
  color: whitesmoke;
  letter-spacing: 0.3px;
  font-family: var(--font-k2d);
  text-align: center;
}

.banner-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #ff4444;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.external-icon {
  color: var(--white);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.announcement-banner:hover .external-icon {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .announcement-banner {
    padding: 10px 16px;
    gap: 10px;
  }

  .banner-text {
    font-size: 14px;
  }

  .banner-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
