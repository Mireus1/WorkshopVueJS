<template>
  <!-- <v-container pt-16>
    <v-row>
      <v-col align="center">
        <v-card max-width="600px" elevation="24">
          <v-carousel>
            <v-carousel-item
              v-for="(url, i) in getDogsPhotosUrl"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-img :src="url" width="600px" min-height="500"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
  <v-row>
    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
      <v-img :src="getDogsPhotosUrl[n]" aspect-ratio="1" class="grey lighten-2">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
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

<style></style>
