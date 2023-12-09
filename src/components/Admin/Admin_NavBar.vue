<template>
  <nav> 
    <v-toolbar app color="teal-darken-4" scroll-behavior="inverted">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Medi</span>
        <span>Cord</span>
      </v-toolbar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="error">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
        </v-btn>
        
        
        <v-menu>
          <template #activator="{props}">
            <span class="font-weight-light pa-2">Admin</span>
            <v-avatar v-bind="props">
              <v-img cover src="https://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item to="/dashboard/profile" prepend-icon="mdi-heart-outline">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>

              <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
                <v-list-item-title>Change Password</v-list-item-title>
              </v-list-item>

              <v-list-item to="/" prepend-icon="mdi-account-outline">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-toolbar>

    <v-navigation-drawer v-model="isDrawerOpen" color="teal-darken-4">
      <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
              cover>
            <div class="text-center mt-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                </v-avatar>
                <h2 class="text-yellow-lighten-5">Admin Panel</h2>
            </div>
        </v-img>

        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/admin-dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/admin-dashboard/patient" prepend-icon="mdi-account-circle">Patients</v-list-item>
          <v-list-item to="/admin-dashboard/barangay" prepend-icon="mdi-account-circle">Barangays</v-list-item>
          <v-list-item to="/admin-dashboard/appointment" prepend-icon="mdi-calendar">Appointments</v-list-item>
          <!-- <v-list-item to="/admin-dashboard/doctor" prepend-icon="mdi-account-circle">Doctors</v-list-item> -->
          <v-list-item to="/admin-dashboard/staff" prepend-icon="mdi-account-circle">Staffs</v-list-item>
          
          <!-- <v-list-group value="Hakdog">
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
          </v-list-group> -->

          <v-list-group value="Hakddog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-folder">Inventory</v-list-item>
            </template>
            <v-list-item to="/" prepend-icon="mdi-pill">Medicine</v-list-item>
          </v-list-group>
        </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    name: 'Admin_NavBar',
    data: () => ({
        isDrawerOpen: true,
    }),
}
</script>

