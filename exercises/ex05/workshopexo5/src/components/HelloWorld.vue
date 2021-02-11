<template>
  <v-container pt-16>
    <h1 align="center">Vie de chien</h1>
    <br>
    <v-row align="center">
      <v-row>
        <v-col align="center">
          <v-card max-width="800px" elevation="24">
            <v-img :src="getDogsPhotosUrl[0]"></v-img>
          </v-card>
          <v-btn align="center" color="secondary" @click="fetchPhotosData">
            <v-icon left> mdi-dog </v-icon>
            Affiche moi un gros doggo !
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fetchPhotosData() {
      this.$store.dispatch("fetchDogPhotos");
    },
  },
  computed: {
    getDogsPhotosUrl() {
      return this.$store.getters.DOGS_PHOTOS_DATA.message;
    },
  },
  mounted() {
    this.fetchPhotosData();
  },
};
</script>

