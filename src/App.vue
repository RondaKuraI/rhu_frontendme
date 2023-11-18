<template>
  <v-app>
    <v-toolbar app class="bg-purple-darken-4">
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat href="google.com" target="_blank">
          <span class="mr-2">Latest Release</span>
        </v-btn>
      </v-toolbar>
      <v-content>
        <HelloWorld/>
      </v-content>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
