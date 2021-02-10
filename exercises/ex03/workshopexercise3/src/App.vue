<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <!-- <navigation-bar></navigation-bar>
      <HelloWorld></HelloWorld> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // NavigationBar,
  },

  data: () => ({
    //
  }),
};
</script>
