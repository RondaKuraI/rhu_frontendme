<template>
    <div>
        <Staff_NavBar />

        <v-container>
            <h2 class="mb-2">Add Appointment</h2>
            <v-card color="teal-accent-1">
                <!-- <v-card-title>Add Appointment</v-card-title> -->
                <v-form>
                    <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6" md="12">
                                    <v-text-field label="Patient Name" required variant="solo-filled" density="comfortable" v-model="patient"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="12">
                                    <v-select label="Doctor" :items="items" density="comfortable" variant="solo-filled" v-model="doctor"></v-select>
                                </v-col>
    
                                <v-col cols="12" sm="6" md="12">
                                    <v-textarea label="Message" required variant="solo-filled" density="comfortable" v-model="message"></v-textarea>
                                </v-col>
                            </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn color="red-accent-4" variant="elevated" to="/staff-dashboard/patient">
                          Cancel
                        </v-btn>
                        <v-btn color="teal-darken-4" variant="elevated" type="submit">
                          Save Appointment
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
import Staff_NavBar from '@/components/Staff/Staff_NavBar.vue'
    export default {
        name: 'Add_Appointment',
        components: {
            Staff_NavBar,
        },
        data: () => ({
            items: [
                'Dr. Kwak Kwak',
            ],
            patient: '',
            doctor: null,
            message: '',
        }),
        methods: {
            submit() {
                console.log('Patient Name:', this.patient);
                console.log('Doctor:', this.doctor);
                console.log('Message:', this.message);

                // You can further send this data to your server using axios
                // For example, assuming you have an API endpoint to handle the data
                // axios.post('your_api_endpoint', {
                //     patient: this.patient,
                //     doctor: this.doctor,
                //     message: this.message,
                // }).then(response => {
                //     console.log('Data submitted successfully:', response.data);
                // }).catch(error => {
                //     console.error('Error submitting data:', error);
                // });
            },
            async getPatient_Records() {
              try{
                  const patient_rec = await axios.get('getpatrecData');
                  this.patient_records = patient_rec.data;
              } catch(error){
                  console.error('Error fetching patient records:', error);
              }
          },
        }
    }
</script>

<style>

</style>