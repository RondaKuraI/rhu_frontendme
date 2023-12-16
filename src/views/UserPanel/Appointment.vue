<template>
  <div>
    <NavBar />
    
    <v-container>
        <h2>Appointments</h2>
      
        <v-card elevation="10" class="mt-2">
          <v-data-table
            :headers="headers"
            :items="user_appointments"          
            item-key="first_name">

            <!-- Custom slot for the 'status' column -->
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" color="white" variant="flat" size="small">
                {{ item.status.toLowerCase() }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/User/NavBar.vue';
  export default {
    name: 'Appointment',
    components: {
      NavBar
    },
    data: () => ({
      user_appointments: [],

      isDrawerOpen: true,
      dialog: false,
      headers: [
      { title: 'Patient Name', align: 'start', sortable: false, key: 'first_name' },
      { title: 'Appointment Schedule', align: 'start', key: 'date' },
      { title: 'Doctor', align: 'start', key: 'doctor' },
      { title: 'Reason', align: 'start', key: 'reason' },
      { title: 'Status', 
        align: 'start', 
        key: 'status' },
      ],
    // appointment: [
    //   { pName: 'Fern',
    //     schedule: '',
    //     reason: '',
    //     status: '', },
    // ]
    }),
    created() {
      this.getUser_Appointments();
    },
    methods: {
      async getUser_Appointments(){
        try {
          const user_app = await axios.get('getAppointment_Data');
          this.user_appointments = user_app.data;
        } catch (error) {
          console.log(error);
        }
      },
      // Function to determine the color of the status chip based on status value
      getStatusColor(status){
        switch(status.toLowerCase()){
          case 'pending':
            return 'yellow';
          case 'confirmed':
            return 'green';
          case 'Cancelled':
            return 'red';
          default:
            return 'grey';
        }
      }
    }
  }
</script>

<style scoped>

</style>