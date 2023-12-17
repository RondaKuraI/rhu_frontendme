<template>
  <div>
    <v-container>
      <!-- <v-row>
          <v-col class="text-md-h2 text-sm-h5 text-lg-h4">
              <h4>Patients</h4>
          </v-col>
      </v-row> -->
      <h2>Appointment Schedule</h2>
          <v-dialog v-model="dialog" width="900" transition="dialog-top-transition">
            <template v-slot:activator="{props}">
              <v-btn color="orange" size="small" v-bind="props" class="mt-2" prepend-icon="mdi-plus">
                Add Appointment
              </v-btn>
            </template>
            <v-card color="teal-accent-1">
              <v-toolbar color="orange">
                <v-card-title>
                  <span><h3>Appointment</h3></span>
                </v-card-title>
              </v-toolbar>

              <v-card-text>
                <v-container>
                  <v-form @submit.prevent="save">
                    <h3 class="mb-2">Personal Information</h3>       
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="first_name" label="First Name*" required variant="solo-filled" density="comfortable"></v-text-field>        
                        <v-text-field v-model="birthdate" label="Birthdate" required variant="solo-filled" density="comfortable" type="date"></v-text-field>                                                                          
                        <v-text-field v-model="email" label="Email*" required variant="solo-filled" density="comfortable"></v-text-field>                                                                          
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="middle_name" label="Middle Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="age" label="Age" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="contact_num" label="Contact No." required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="last_name" label="Last Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-select v-model="sex" :items="sexs" density="comfortable" label="Sex" variant="solo-filled"></v-select>
                        <v-select v-model="barangay" :items="barangays" density="comfortable" label="Barangay" variant="solo-filled"></v-select>
                      </v-col>

                      
                    </v-row>
                    <h3 class="mb-2">Add Appointment</h3> 
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="date" label="Date of Appointment" required variant="solo-filled" density="comfortable" type="date"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="time" label="Time of Appointment" required variant="solo-filled" density="comfortable" type="time"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select v-model="doctor" label="Doctor" :items="doctors" density="comfortable" variant="solo-filled"></v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="12">
                        <v-textarea v-model="reason" label="Reason" required variant="solo-filled" density="comfortable"></v-textarea>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>
              <v-card-actions class="justify-end">
                    <v-btn color="red-accent-4" variant="elevated" @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="teal-darken-4" variant="elevated" @click="save" >
                      Save
                    </v-btn>
                  </v-card-actions>
            </v-card>
          </v-dialog>
      </v-container>


        <!-- List of Patients -->
        <v-container>
          <v-card elevation="10">
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-date-picker elevation="24" width="100%" color="teal-accent-4"></v-date-picker>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
  export default {
      name: 'Records',
      components: {
          Admin_NavBar,
      },
      data: () => ({
        first_name: '',
        middle_name: '',
        last_name: '',
        birthdate: '',
        age: '',
        sex: 'Male',
        email: '',
        contact_num: '',
        barangay: 'Bigaan',
        date: '',
        time: '',
        doctor: 'Dr. Kwak Kwak',
        reason: '',
        dialog: false,
        barangays: [
          'Bigaan',
          'Calangatan',
          'Ilag',
          'Lumangbayan',
          'Tacligan',
          'Poblacion',
          'Caagutayan',
        ],
        sexs: [
          'Male',
          'Female',
        ],
        doctors: [
          'Dr. Kwak Kwak',
        ],
        loaded: false,
        loading: false,
      }),
      methods: {
        async save(){
          try {
            const response = await axios.post('save', {
              first_name: this.first_name,
              middle_name: this.middle_name,
              last_name: this.last_name,
              birthdate: this.birthdate,
              age: this.age,
              sex: this.sex,
              email: this.email,
              contact_num: this.contact_num,
              barangay: this.barangay,
              date: this.date,
              time: this.time,
              doctor: this.doctor,
              reason: this.reason,
            });
            // Assuming the server responds with a success message
            console.log('Save successful:', response.data);
            
            // Optionally, you can reset the form fields or close the dialog
            this.resetForm();
          } catch (error) {
            // Log the detailed error information to the console
            console.error('Save failed:', error);
          }
        },
        resetForm() {
          // Reset form fields or close the dialog
          this.first_name = '';
          this.middle_name = '';
          this.last_name = '';
          this.birthdate = '';
          this.age = '';
          this.sex = '';
          this.email = '';
          this.contact_num = '';
          this.barangay = '';
          this.date = '';
          this.time = '';
          this.doctor = '';
          this.reason = '';
          
          this.dialog = false;
        },
      }
    }
</script>