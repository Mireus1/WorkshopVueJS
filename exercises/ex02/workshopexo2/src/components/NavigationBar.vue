<template>
  <v-toolbar color="#1976d1" dark flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>PhotoGallery</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs v-model="tab" align-with-title>
        <v-tab>Accueil</v-tab>
        <v-tab>Chats</v-tab>
        <v-tab>Chiens</v-tab>
        <v-tab>Autres</v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>
    export default {};
</script>