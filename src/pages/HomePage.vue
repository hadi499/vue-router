<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
import { ref } from 'vue'
const mytitle = ref('John Doe')
const mysub = ref('Vue Programer')

</script>

<template>
  <Hero :title="mytitle" :subtitle="mysub" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>