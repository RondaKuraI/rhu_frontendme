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
        <h1>Appointment List</h1>
      
        <v-card>        
          <v-data-table
            :headers="headers"
            :items="plants"
            
            item-key="name">
          </v-data-table>
        </v-card>
    </v-container>
    </v-main>
  </v-app>
</template>
    
  <script>
  export default {
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
      headers: [
      { title: 'ID', align: 'start', sortable: false, key: 'name' },
      { title: 'Schedule', align: 'end', key: 'light' },
      { title: 'Reason', align: 'end', key: 'height' },
      { title: 'Status', align: 'end', key: 'petFriendly' },
      { title: 'Actions', align: 'end', key: 'price' },
    ],
    /*
    plants: [
      {
        name: 'Fern',
        light: 'Low',
        height: '20cm',
        petFriendly: 'Yes',
        price: 20,
      },
      {
        name: 'Snake Plant',
        light: 'Low',
        height: '50cm',
        petFriendly: 'No',
        price: 35,
      },
      {
        name: 'Monstera',
        light: 'Medium',
        height: '60cm',
        petFriendly: 'No',
        price: 50,
      },
      {
        name: 'Pothos',
        light: 'Low to medium',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
      },
      {
        name: 'ZZ Plant',
        light: 'Low to medium',
        height: '90cm',
        petFriendly: 'Yes',
        price: 30,
      },
      {
        name: 'Spider Plant',
        light: 'Bright, indirect',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15,
      },
      {
        name: 'Air Plant',
        light: 'Bright, indirect',
        height: '15cm',
        petFriendly: 'Yes',
        price: 10,
      },
      {
        name: 'Peperomia',
        light: 'Bright, indirect',
        height: '25cm',
        petFriendly: 'Yes',
        price: 20,
      },
      {
        name: 'Aloe Vera',
        light: 'Bright, direct',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15,
      },
      {
        name: 'Jade Plant',
        light: 'Bright, direct',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
      },
    ],
    */
    }),
  }
  </script>