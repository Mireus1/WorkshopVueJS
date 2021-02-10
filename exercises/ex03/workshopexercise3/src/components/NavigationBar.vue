<template>
  <v-toolbar color="#1976d1" dark flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Galerie Photo</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs v-model="tab" align-with-title>
        <v-tab to="/"> Accueil </v-tab>
        <v-tab to="/Cats"> Chats </v-tab>
        <v-tab to="/Dogs"> Chiens </v-tab>
        <v-tab to="/Other"> Autres </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>
export default {};
</script>