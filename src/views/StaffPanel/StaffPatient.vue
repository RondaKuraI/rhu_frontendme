<template>
    <v-app theme="light">
      <v-navigation-drawer v-model="isDrawerOpen" color="teal-accent-4">
        <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
                cover>
              <div class="text-center mt-4">
                  <v-avatar class="mb-4" color="grey-darken-1" size="64">
                      <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                  </v-avatar>
                  <h2 class="text-yellow-lighten-5">Staff Panel</h2>
              </div>
          </v-img>
  
          <v-divider></v-divider>
  
        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/staff-dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/staff-dashboard/appointment" prepend-icon="mdi-calendar">Appointment</v-list-item>
          <v-list-item to="/staff-dashboard/patient" prepend-icon="mdi-folder">Patient</v-list-item>
          <v-list-item to="/staff-dashboard/service" prepend-icon="mdi-folder">Service</v-list-item>
        </v-list>
          
        <template v-slot:append>
            <div class="pa-2">
              <v-btn block color="teal-darken-4" href="/">
                Logout
              </v-btn>
            </div>
          </template>
      </v-navigation-drawer>
  
      <v-app-bar flat class="border-b" color="teal-accent-4" scroll-behavior="elevate">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-app-bar-title>Hakdog</v-app-bar-title>
  
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
        Patient
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