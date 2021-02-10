<template>
  <div>
    <navigation-bar></navigation-bar>
    <div>
      <h1 align="center">Accueil</h1>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar
  }
}
</script>
