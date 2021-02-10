<template>
  <div>
    <navigation-bar></navigation-bar>
    <div>
      <h1 align="center">Photos de chats</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'Cats',
  components: {
    NavigationBar
  }
}
</script>