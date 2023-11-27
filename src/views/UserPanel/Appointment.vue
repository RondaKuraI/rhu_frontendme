<template>
  <div>
    <NavBar />
    
    <v-container>
        <h1>Appointments</h1>
      
        <v-card elevation="10">        
          <v-data-table
            :headers="headers"
            :items="appointment"
            
            item-key="name">
          </v-data-table>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/User/NavBar.vue';
  export default {
    name: 'Appointment',
    components: {
      NavBar
    },
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
      headers: [
      { title: 'Patient Name', align: 'start', sortable: false, key: 'pName' },
      { title: 'Appointment Schedule', align: 'start', key: 'schedule' },
      { title: 'Reason', align: 'start', key: 'reason' },
      { title: 'Status', align: 'start', key: 'status' },
      ],
    appointment: [
      { pName: 'Fern', schedule: 'Low', reason: '20cm', status: 'Yes', },
    ]
    }),
  }
</script>

<style scoped>

</style>