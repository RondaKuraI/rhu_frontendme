<template>
    <v-app theme="light">
      <v-navigation-drawer v-model="isDrawerOpen" color="teal-accent-4">
        <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
                cover>
              <div class="text-center mt-4">
                  <v-avatar class="mb-4" color="grey-darken-1" size="64">
                      <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                  </v-avatar>
                  <h2 class="text-yellow-lighten-5">Admin Panel</h2>
              </div>
          </v-img>
  
          <v-divider></v-divider>
  
        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/admin-dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/admin-dashboard/appointment" prepend-icon="mdi-calendar">Appointments</v-list-item>
          <v-list-item to="/admin-dashboard/doctor" prepend-icon="mdi-account-circle">Doctors</v-list-item>
          <v-list-item to="/admin-dashboard/staff" prepend-icon="mdi-account-circle">Staffs</v-list-item>
          <v-list-item to="/admin-dashboard/patient" prepend-icon="mdi-account-circle">Patients</v-list-item>
          
          <v-list-group value="Hakdog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-home-account">Barangays</v-list-item>
            </template>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Bigaan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Calangatan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Calsapa</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Ilag</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Lumangbayan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Tacligan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Poblacion</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker">Caagutayan</v-list-item>
          </v-list-group>

          <v-list-group value="Hakddog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-folder">Inventory</v-list-item>
            </template>
            <v-list-item to="/" prepend-icon="mdi-pill">Medicine</v-list-item>
          </v-list-group>
          
        </v-list>
          
        <template v-slot:append>
            <div class="pa-2">
              <v-btn block color="teal-darken-1" href="/">
                Logout
              </v-btn>
            </div>
          </template>
      </v-navigation-drawer>
  
      <v-app-bar flat class="border-b" color="teal-accent-4" scroll-behavior="elevate">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-app-bar-title><h3>MEDICORD</h3></v-app-bar-title>
  
        <template #append>
          <v-btn icon class="mr-2">
            <v-badge dot color="error">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
          </v-btn>
          
          <v-menu>
            <template #activator="{props}">
              <v-avatar v-bind="props">
                <v-img cover src="https://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
              </v-avatar>
            </template>
  
            <v-card min-width="200px">
              <v-list :lines="false" density="compact" nav>
                <v-list-item to="/favorites" prepend-icon="mdi-heart-outline">
                  <v-list-item-title>Favorites</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
                  <v-list-item-title>Settings</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/" prepend-icon="mdi-account-outline">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
          
        </template>
      </v-app-bar>
  
      <v-main>
      <v-container>
        <!--<h1 class="hidden-md-only text-h4 text-lg-h3 text-black px-4 py-2 mb-2">Dashboard</h1>-->
        <h1>Dashboard</h1>
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
                  <h4 class="text-grey">TOTAL DOCTORS</h4>
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
                  <h4 class="text-grey">TOTAL STAFFS</h4>
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
                  <h4 class="text-grey">TOTAL MEDICINE</h4>
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
    </v-main>
    </v-app>
</template>
    
  <script>
  export default {
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
    }),
  }
  </script>