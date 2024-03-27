<template>
  <main-master-page>
    <full-screen-section />
    <div class="pb-12">
      <half-split-content
        v-for="(article, index) in about"
        :key="article.id"
        :content-data="article"
        :is-reverse="index % 2 === 0"
      />
    </div>
    <comfortable-section :slides="images" />
    <inspire-section />
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import FullScreenSection from '@/components/AboutUsComponents/FullScreenSection.vue'
import InspireSection from '@/components/AboutUsComponents/InspireSection.vue'

// Articles
import HalfSplitContent from '@/components/AboutUsComponents/HalfSplitContent.vue'
import about from '@/data/about.json'

// Connecting the section Comfortable
import ComfortableSection from '@/components/ComfortableSection.vue'
import images from '@/data/images.json'
</script>

<style lang="scss" scoped></style>
