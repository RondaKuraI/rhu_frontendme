<template>
    <div>
        <Doctor_NavBar />
      <v-container>
        <h2>Dashboard</h2>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-card elevation="2" class="rounded-lg" color="white">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <h4 class="text-grey">TOTAL USERS</h4>
                    <h2><strong>12</strong></h2>
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
                    <h4 class="text-grey">PENDING APPOINTMENTS</h4>
                    <h2><strong>12</strong></h2>
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
                    <h4 class="text-grey">MEDICINE STOCKS</h4>
                    <h2><strong>12</strong></h2>
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
                    <h2><strong>12</strong></h2>
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
                    <h2><strong>12</strong></h2>
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
    import Doctor_NavBar from '@/components/Doctor/Doctor_NavBar.vue'
    export default {
        name: 'Doctor_Dashboard',
        components: {
            Doctor_NavBar,
        },
        data: () => ({
        isDrawerOpen: true,
        dialog: false,
      }),
    }
    </script>