<template>
  <div>
    <Staff_NavBar />

    <v-container>
      <h2>Patients</h2>
      <v-form>
            <v-dialog v-model="dialog" width="900" transition="dialog-top-transition">
              <template v-slot:activator="{props}">
                <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                  Add Patient
                </v-btn>
              </template>
              <v-card>
                <v-toolbar color="orange">
                  <v-card-title>
                    <span>Add Patient</span>
                  </v-card-title>
                </v-toolbar>

                <v-card-text>       
                  <v-container density="comfortable">
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="First Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Middle Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Last Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Birthdate" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Age" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-radio-group label="Sex">
                          <v-radio label="Male" value="one"></v-radio>
                          <v-radio label="Female" value="two"></v-radio>
                        </v-radio-group>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Contact No." required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="6">
                        <v-select :items="items" density="comfortable" label="Barangay"></v-select>
                      </v-col>
  
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red-accent-4" variant="elevated" @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="teal-darken-4" variant="elevated" @click="dialog = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-form>


        <!-- List of Patients -->
        <v-card elevation="10" class="mt-2">        
          <v-data-table
            :headers="headers"
            :items="patient_full_name"
            item-key="id">
            <template v-slot:top>
              <v-toolbar color="teal-accent-4">
                <v-toolbar-title>List of Records</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-text-field :loading="loading" density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="mr-2"></v-text-field>
              </v-toolbar>
            </template>
            <!-- <template v-slot:item.actions="{ item }">
              <v-btn class="me-2" color="blue">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </template> -->
            <template v-slot:item.action="{ item }">
                  <v-btn density="comfortable" color="teal-darken-4" class="me-2">View</v-btn>
                  <v-btn density="comfortable" color="orange" class="me-2" to="/staff-dashboard/add_appointment">Add Appointment</v-btn>
              </template>
          </v-data-table>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import Staff_NavBar from '@/components/Staff/Staff_NavBar.vue';
  export default {
      name: 'StaffPatient',
      components: {
          Staff_NavBar,
      },
      data: () => ({
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
        loaded: false,
        loading: false,
        headers: [
          // { title: 'First Name', key: 'first_name' },
          // { title: 'Middle Name', key: 'middle_name' },
          // { title: 'Last Name', key: 'last_name' },
          { title: 'Patient Name', key: 'full_name', sortable: false, },
          { title: 'Contact Number', key: 'contact_num', },
          { title: 'Barangay', key: 'brgy', },
          { title: 'Action', key: 'action', },
        ],
      }),
      computed: {
        patient_full_name() {
          return this.patient_records.map(patient => ({
            ...patient,
            full_name: `${patient.first_name} ${patient.last_name}`,
          }));
        }
      },
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

        async getPatient_Records(){
          try {
            const patient_rec = await axios.get('getpatrecData');
            this.patient_records = patient_rec.data;
          } catch(error){
            console.log(error);
          }
        },
      },
  }
</script>