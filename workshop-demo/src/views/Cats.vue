<template>
  <v-container pt-16>
    <v-row>
      <v-col align="center">
        <v-btn color="secondary" @click="fetchCatsPhotosData">
          <v-icon left> mdi-cat </v-icon>
          Get a cat !
        </v-btn>
        <v-card class="mt-16" v-if="getFetchStatus.success" max-width="600px" elevation="24">
          <v-img :src="getCatsPhotosUrl[0].url"></v-img>
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
    fetchCatsPhotosData() {
      this.$store.dispatch("fetchCatImages");
    },
  },
  computed: {
    getCatsPhotosUrl() {
      return this.$store.getters.CAT_API_DATA;
    },
    getFetchStatus() {
      return this.$store.getters.FETCH_API_DATA;
    },
  },
};
</script>

<style></style>
