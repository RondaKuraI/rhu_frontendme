<template>
    <NavBar />

      <v-container>
        <v-row>
          <v-col>
            <h1>Appointment Schedules</h1>
            
          </v-col>
          <v-col class="text-right">
            <v-btn color="teal-accent-4" prepend-icon="mdi-plus">Add Appointment</v-btn>
            
          </v-col>
        </v-row>
      </v-container>

        <v-container>      
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-date-picker elevation="24" width="100%" color="teal-accent-4"></v-date-picker>

            </v-col>
          </v-row>
        </v-container>

</template>
  
<script>
import NavBar from '@/components/User/NavBar.vue';
import SideNav from '@/components/User/SideNav.vue';
export default {
  name: 'Dashboard',
      components: {
        NavBar,
        SideNav,
      },
  data: () => ({
    isDrawerOpen: false,
  }),
}
</script>
