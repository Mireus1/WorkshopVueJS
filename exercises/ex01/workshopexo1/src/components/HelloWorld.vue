<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
      <v-col>
        <v-card class="photocard" color="black"></v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="grey"></v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="primary"> </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="photocard" color="red"> </v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="yellow"> </v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="black"> </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="photocard" color="green"> </v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="grey"> </v-card>
      </v-col>
      <v-col>
        <v-card class="photocard" color="purple"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style>

.photocard {
  height : 200px;
}

</style>
