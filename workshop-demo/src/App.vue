<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

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
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {title: 'DOGS', to: '/'},
        {title: 'CATS', to: '/cats'},
        {title: 'Profile', to : '/'},
        {title: 'Updates', to : '/'},
      ],
    }),
  }
</script>