<template>
  <v-container pt-16>
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

<style></style>
