<template>
  <!--
    <v-navigation-drawer v-model="isDrawerOpen" color="blue-grey-darken-4">
      <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
              cover>
            <div class="text-center mt-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                </v-avatar>
                <h2 class="text-yellow-lighten-5">User Panel</h2>
            </div>
        </v-img>

        <v-divider></v-divider>

      <v-list>
        <v-list-item to="/dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
        <v-list-item to="/dashboard/appointment" prepend-icon="mdi-calendar">Appointment</v-list-item>
        <v-list-item to="/dashboard/records" prepend-icon="mdi-folder">Records</v-list-item>
      </v-list>
        
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block color="teal-darken-1" href="/">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
  -->
  
</template>

<script>
export default {
  data: () => ({
    isDrawerOpen: false,
  }),
}
</script>