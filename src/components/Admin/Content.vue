<template>
    <div>
      <v-container>
          <!--<h1 class="hidden-md-only text-h4 text-lg-h3 text-black px-4 py-2 mb-2">Dashboard</h1>-->
          <v-row>
            <v-col class="hidden-md-only text-sm-h5 text-lg-h4">
                <h4>Dashboard</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">TOTAL USERS</h4>
                    <h2><strong>7</strong></h2>
                  </div>
                  <v-avatar color="teal-darken-3" size="60">
                    <v-icon icon="mdi-account-group" size="large"></v-icon>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">APPOINTMENTS</h4>
                    <h2><strong>2</strong></h2>
                  </div>
                  <v-avatar color="cyan-darken-3" size="60">
                    <v-icon icon="mdi-doctor" size="large"></v-icon>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">MEDICINES</h4>
                    <h2><strong>10550</strong></h2>
                  </div>
                  <v-avatar color="light-blue-darken-3" size="60">
                    <v-icon icon="mdi-account-multiple" size="large"></v-icon>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">TOTAL PATIENTS</h4>
                    <h2><strong>2</strong></h2>
                  </div>
                  <v-avatar color="blue-darken-3" size="60">
                    <v-icon icon="mdi-account" size="large"></v-icon>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">TOTAL STAFFS</h4>
                    <h2><strong>3</strong></h2>
                  </div>
                  <v-avatar color="indigo-darken-3" size="60">
                    <v-icon icon="mdi-medical-bag" size="large"></v-icon>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
  
          </v-row>
        </v-container>
    </div>
  </template>
      
    <script>
    export default {
      data: () => ({
        isDrawerOpen: true,
        dialog: false,
      }),
    }
    </script>