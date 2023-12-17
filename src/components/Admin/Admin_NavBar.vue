<template>
  <nav> 
    <v-toolbar app color="teal-darken-4" scroll-behavior="inverted">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <!-- <span class="font-weight-light">Medi</span>
        <span>Cord</span> -->
      </v-toolbar-title>

      <template #append>
        <!-- <v-btn icon class="mr-2">
          <v-badge dot color="error">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
        </v-btn> -->
        
        
        <v-menu>
          <template #activator="{props}">
            <span class="font-weight-light pa-2">Hello, Admin!</span>
            <v-avatar v-bind="props" color="teal-accent-1" icon="mdi-account">
                <v-img cover src="hhttps://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
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

              <v-list-item @click="logout" to="/" prepend-icon="mdi-account-outline">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-toolbar>

    <v-navigation-drawer v-model="isDrawerOpen" color="teal-darken-4">
      <v-img src="hhttps://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="150"
              cover>
            <div class="text-center mt-4">
                <v-avatar class="mb-2" color="grey-darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://scontent.fmnl33-3.fna.fbcdn.net/v/t1.15752-9/400642690_872617371223316_946465565951057917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHcFbNT1CcZuq-nKiDa8OaoebRNIrwIGd95tE0ivAgZ3wL-kLw_vY0jWTOZrIEChbtxoYn6z6jWsLyI_R6FqTlm&_nc_ohc=CSqGffAX6eMAX8IIsJ8&_nc_ht=scontent.fmnl33-3.fna&oh=03_AdSpcjOhbd70zvJYKbZMWFlQ_L562Hf3KiqJspBsGd4EpA&oe=65A3F9B5"/>
                </v-avatar>
                <h2 class="text-yellow-lighten-4">MediCord</h2>
            </div>
        </v-img>

        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/admin-dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/admin-dashboard/appointment" prepend-icon="mdi-calendar">Appointments</v-list-item>
          <v-list-item to="/admin-dashboard/patient" prepend-icon="mdi-account-circle">Patients</v-list-item>
          <v-list-item to="/admin-dashboard/barangay" prepend-icon="mdi-account-circle">Barangays</v-list-item>
          <!-- <v-list-item to="/admin-dashboard/doctor" prepend-icon="mdi-account-circle">Doctors</v-list-item> -->
          <v-list-item to="/admin-dashboard/staff" prepend-icon="mdi-account-circle">Staffs</v-list-item>

          <v-list-group value="Hakddog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-folder">Inventory</v-list-item>
            </template>
            <v-list-item to="/admin-dashboard/inventory/medicine" prepend-icon="mdi-pill">Medicine</v-list-item>
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
    methods: {
      async logout() {
          try {
              // Clear authentication-related information
              sessionStorage.removeItem("token");

              // Redirect to the login page or any other desired page
              router.push('/login');
          } catch (error) {
              console.error("Error during logout:", error);
              // Handle logout error if needed
          }
      }
  }
}
</script>

