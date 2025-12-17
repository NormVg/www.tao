<script setup>
import { motion as m } from 'motion-v'
import { Vue3Marquee } from 'vue3-marquee'
import { foundingMembers } from '~/utils/team.config.js'
</script>

<template>
  <div class="team-section">
    <div class="section-header">
      <m.div
        class="section-label"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }"
        :in-view-options="{ amount: 1, once: true }"
      >
        Our Team
      </m.div>

      <m.h2
        class="section-title"
        :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
        :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }"
        :in-view-options="{ amount: 1, once: true }"
      >
        Founding Members
      </m.h2>
    </div>

    <div class="marquee-wrapper">
      <Vue3Marquee
        :clone="true"
        :duration="40"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[26,26,26]"
        gradient-length="10%"
      >
        <a
          v-for="(member, index) in foundingMembers"
          :key="`${member.name}-${index}`"
          :href="member.website"
          target="_blank"
          rel="noopener noreferrer"
          class="member-card"
        >
          <div class="card-container">
            <img :src="member.image" :alt="member.name" class="member-image">
            <div class="card-overlay">
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </a>
      </Vue3Marquee>
    </div>
  </div>
</template>

<style scoped>
.team-section {
  max-width: 100%;
  margin: 120px auto;
  padding: 0;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
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

.marquee-wrapper {
  width: 100%;
  padding: 0;
  overflow: hidden;
}



.member-card {
  flex-shrink: 0;
  width: 240px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  margin: 5px 30px 5px 0;
}

.member-card:hover {
  transform: translateY(-5px);
}

.card-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 8px 25px 8px 25px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.member-card:hover .card-container {
  border-color: rgba(224, 160, 168, 0.4);
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.5s ease;
}

.member-card:hover .member-image {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.95) 0%,
    rgba(17, 17, 17, 0.7) 50%,
    transparent 100%
  );
  padding: 25px 20px;
  transition: all 0.3s ease;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.member-name {
  font-size: 22px;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  font-family: var(--font-k2d);
  transition: color 0.3s ease;
}

.member-card:hover .member-name {
  color: var(--pink);
}

.member-role {
  font-size: 12px;
  color: var(--white);
  margin: 0;
  opacity: 0.7;
  letter-spacing: 0.5px;
  font-weight: 500;
}

@media only screen and (max-width: 768px) {
  .team-section {
    margin: 80px auto;
  }

  .section-title {
    font-size: 50px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .member-card {
    width: 160px;
    margin: 5px 20px 5px 0;
  }

  .member-name {
    font-size: 16px;
  }

  .member-role {
    font-size: 10px;
  }

  .card-overlay {
    padding: 15px 12px;
  }
}
</style>
