<template>
    <div>
        <Staff_NavBar />        
        <v-container>
            <h2 class="mb-2">Pending Appointments</h2>
            <transition name="fade">
                <v-alert v-if="isAlertVisible" color="info" icon="$success" text="Appointment Approved Successfully!">
                </v-alert>
            </transition>
            <v-card elevation="10" class="mt-2">        
                <v-data-table
                :headers="headers"
                :items="patient_records"
                item-key="patient_name">

                <!-- Custom slot for the 'status' column -->
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" color="white" variant="flat" size="small">
                {{ item.status.toLowerCase() }}
              </v-chip>
            </template>

                <template v-slot:top>
                    <v-toolbar color="teal-accent-4">
                    <!-- <v-toolbar-title>List of Records</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-divider class="mx-4" inset vertical></v-divider> -->
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-text-field :loading="loading" density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="mr-2"></v-text-field>
                    </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                    <v-btn density="comfortable" color="teal-darken-4" class="me-2" @click="showAlert">Approve</v-btn>
                    <v-btn to="/staff-dashboard/cancel_message" density="comfortable" color="orange">Cancel</v-btn>
                </template>

                </v-data-table>
            </v-card>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios';
import Staff_NavBar from '@/components/Staff/Staff_NavBar.vue'
    export default {
        name: 'Pending_Appointments',
        components: {
            Staff_NavBar,
        },
        data: () => ({
            patient_records: [],
            isAlertVisible: false,
            loaded: false,
            loading: false,
            headers: [
            { title: 'Patient Name', align: 'start', sortable: false, key: 'patient_name' },
            { title: 'Appointment Schedule', key: 'schedule' },
            { title: 'Doctor', key: 'doctor' },
            { title: 'Reason', key: 'reason' },
            { title: 'Status', key: 'status' },
            { title: 'Action', key: 'action' },
          ],
        }),
        created() {
          this.getPatient_Records();
        },
        methods: {
            onClick () {
            this.loading = true

            setTimeout(() => {
              this.loading = false
              this.loaded = true
            }, 2000)
          },

            async getPatient_Records() {
                try{
                    const patient_rec = await axios.get('getData');
                    this.patient_records = patient_rec.data;
                } catch(error){
                    console.error('Error fetching patient records:', error);
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
            },
            showAlert() {
                this.isAlertVisible = true;

                // Hide the alert after 3000 milliseconds (3 seconds)
                setTimeout(() => {
                    this.hideAlert();
                }, 3000);
            },
            hideAlert() {
                this.isAlertVisible = false;
            },
        }
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>