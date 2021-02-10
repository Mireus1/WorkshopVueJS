<template>
  <v-container pt-16>
    <v-row>
      <v-col align="center">
        <v-card max-width="600px" elevation="24">
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
  },
  mounted() {
    this.fetchCatsPhotosData();
  },
};
</script>

<style></style>
