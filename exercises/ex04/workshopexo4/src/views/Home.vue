<template>
  <div>
    <navigation-bar></navigation-bar>
    <div>
      <h1 align="center">Accueil</h1>
    </div>
    <home-carousel></home-carousel>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import HomeCarousel from '../components/HomeCarousel.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar,
    HomeCarousel
  }
}
</script>
