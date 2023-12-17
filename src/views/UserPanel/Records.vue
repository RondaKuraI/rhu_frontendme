<template>
  <div>
    <NavBar />
    
    <v-container>
        <h2>Prescription Records</h2>
      
        <v-card elevation="10" class="mt-2">
          <v-data-table
            :headers="headers"
            :items="user_records"
            item-key="reference_id">

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
      user_records: [],
      isDrawerOpen: true,
      dialog: false,
      headers: [
      { title: 'Reference ID', align: 'start', sortable: false, key: 'reference_id' },
      { title: 'Reason', key: 'reason' },
      { title: 'Doctor', key: 'doctor' },
      { title: 'Review Date ', key: 'review_date' },
      { title: 'Prescription Date', key: 'prescription_date' },
      { title: 'Status', key: 'status' },
    ],
    }),
    created() {
      this.getUser_Records();
    },
    methods: {
      async getUser_Records(){
        try {
          const user_rec = await axios.get('getData2');
          this.user_records = user_rec.data;
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
          case 'cancelled':
            return 'red';
          case 'completed':
            return 'green';
          default:
            return 'grey';
        }
      }
    }
  }
</script>

<style scoped>

</style>