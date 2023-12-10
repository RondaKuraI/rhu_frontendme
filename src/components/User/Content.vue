<template>
  <div>
    <v-container>
      <!-- <v-row>
          <v-col class="text-md-h2 text-sm-h5 text-lg-h4">
              <h4>Patients</h4>
          </v-col>
      </v-row> -->
      <h2>Appointment Schedule</h2>
          <v-dialog v-model="dialog" width="500" transition="dialog-top-transition">
            <template v-slot:activator="{props}">
              <v-btn color="orange" size="small" v-bind="props" class="mt-2" prepend-icon="mdi-plus">
                Add Appointment
              </v-btn>
            </template>
            <v-card>
              <v-toolbar color="orange">
                <v-card-title>
                  <span>Appointment</span>
                </v-card-title>
              </v-toolbar>

              <v-card-text>       
                <v-container>
                  <v-form>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Date of Appointment" required variant="solo-filled" density="comfortable" v-model="date"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Time of Appointment" required variant="solo-filled" density="comfortable" v-model="time"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="12">
                        <v-select :items="doctors" density="comfortable" label="Doctor" variant="solo-filled"></v-select>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="12">
                        <v-textarea label="Reason" required variant="solo-filled" density="comfortable"></v-textarea>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>
              <v-card-actions class="justify-end">
                    <v-btn color="orange" variant="elevated" @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="teal-darken-4" variant="elevated" @click="submit" >
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
                <v-date-picker elevation="24" width="100%" color="teal-accent-1"></v-date-picker>
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
        patient_records: [],
        dialog: false,
        items: [
          'Bigaan',
          'Calangatan',
          'Ilag',
          'Lumangbayan',
          'Tacligan',
          'Poblacion',
          'Caagutayan',
        ],
        doctors: [
          'Dr. Kwak Kwak',
        ],
        loaded: false,
        loading: false,
        headers: [
          { title: 'ID', align: 'start', sortable: false, key: 'id' },
          { title: 'First Name', key: 'first_name' },
          { title: 'Middle Name', key: 'middle_name' },
          { title: 'Last Name', key: 'last_name' },
          { title: 'Birthdate', key: 'birthdate' },
          { title: 'Age', key: 'age' },
          { title: 'Sex', key: 'sex' },
          { title: 'Contact No.', key: 'contact_num' },
          { title: 'Barangay', key: 'brgy' },
        ],
      }),
      methods: {
        submit() {
          console.log(this.first_name);
        }
      }
  }
</script>