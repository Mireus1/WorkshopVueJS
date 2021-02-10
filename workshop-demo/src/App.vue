<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="item in items"
          :key="item.title"
          :to="item.to" >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
          </v-col>
          <v-col
            cols="12"
            sm="8"
          >
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
          </v-col>
        </v-row>
      </v-container>
      <router-view></router-view>
    </v-main>
    <toto class="mt-16"></toto>
  </v-app>
</template>

<script>
import toto from './components/toto.vue'
  export default {
  components: { toto },
    data: () => ({
      items: [
        {title: 'HOME', to : '/'},
        {title: 'DOGS', to: '/dogs'},
        {title: 'CATS', to: '/cats'},
      ],
    }),
  }
</script>