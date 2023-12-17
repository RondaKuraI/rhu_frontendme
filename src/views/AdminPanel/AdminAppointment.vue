<!-- <template>
  <div>
    <Admin_NavBar />

    <v-container>
      <h1>Appointment List</h1>
      <v-card>
        <v-data-table :headers="headers" :items="appointments" item-key="name">
          <template v-slot:item.actions="{ item }">
            <v-btn @click="editItem(item)" class="mx-2" color="teal-accent-4">Edit</v-btn>
            <v-btn @click="deleteItem(item)" color="red">Delete</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template> -->
<template>
  <div>
    <Admin_NavBar />
    
    <v-container>
        <h1>Appointments</h1>
      
        <v-card elevation="10">        
          <v-data-table
            :headers="headers"
            :items="appointments"
            item-key="name">
            <template v-slot:top>
              <v-toolbar color="teal-accent-4">
                <v-toolbar-title>List of Records</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn class="me-2" color="blue">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </template>
          </v-data-table>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
  export default {
    name: 'AdminAppointment',
    components: {
      Admin_NavBar,
    },
    data: () => ({
      headers: [
      { title: 'ID', align: 'start', sortable: false, key: 'id' },
      { title: 'Appointment Schedule', key: 'schedule' },
      { title: 'Reason', key: 'reason' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions' },
    ],
    appointments: [
      {
        // id: 'Fern',
        // schedule: 'Low',
        // reason: '20cm',
        // status: 'Yes',
        // actions: {},
        
      },
    ],
    }),
  }
</script>

<style>

</style>