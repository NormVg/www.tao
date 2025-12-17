
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
  <m.div
    class="app-card-wrapper"
    :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
    :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }"
    :in-view-options="{ amount: 0.2, once: true }"
  >
    <div class="app-card">
      <div class="card-content">
        <div class="card-header">
          <div class="title-row">
            <h3 class="card-title">{{ props.head }}</h3>
            <NuxtLink :to="props.link" class="external-link" target="_blank">
              <ExternalLink :size="22"/>
            </NuxtLink>
          </div>
          <span class="product-badge">Product</span>
        </div>

        <p class="card-description">{{ props.sub }}</p>
      </div>

      <div class="card-image">
        <img :src="props.thumb" alt="" class="thumb">
      </div>
    </div>

    <div class="divider" v-if="props.bottomLine"></div>
  </m.div>
</template>

<style scoped>
.app-card-wrapper {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
}

.app-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.card-title {
  font-size: 52px;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  font-family: var(--font-k2d);
  line-height: 1.1;
}

.external-link {
  color: var(--white);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  opacity: 0.5;
  flex-shrink: 0;
}

.external-link:hover {
  color: var(--pink);
  opacity: 1;
  transform: translateY(-3px);
}

.product-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  font-size: 11px;
  color: var(--fg2);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 500;
  width: fit-content;
}

.card-description {
  font-size: 16px;
  line-height: 1.7;
  color: var(--white);
  margin: 0;
  opacity: 0.85;
}

.card-image {
  position: relative;
  border-radius: 8px 25px 8px 25px;
  overflow: hidden;
  border: 1px solid rgba(74, 74, 74, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
}

.card-image:hover {
  border-color: rgba(224, 160, 168, 0.25);
}

.thumb {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 550/309;
  object-fit: cover;
  max-height: 280px;
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 80px 0;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .app-card-wrapper {
    margin-bottom: 50px;
    padding: 0 10px;
  }

  .app-card {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .card-title {
    font-size: 36px;
  }

  .card-description {
    font-size: 15px;
  }

  .divider {
    margin: 50px 0;
  }
}
</style>
