<template>
  <div>
    <navigation-bar></navigation-bar>
    <div>
      <h1 align="center">Autres photos</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'Random',
  components: {
    NavigationBar
  }
}
</script>