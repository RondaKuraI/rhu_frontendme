<template>
    <div>
      <Admin_NavBar />
  
      <v-container>
        <h2>Medicines</h2>
        <v-form>
              <v-dialog v-model="dialog" width="500" transition="dialog-top-transition">
                <template v-slot:activator="{props}">
                  <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                    Add Medicine
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar color="orange">
                    <v-card-title>
                      <span>Add Medicine</span>
                    </v-card-title>
                  </v-toolbar>
  
                  <v-card-text>       
                    <v-container density="comfortable">
                      <v-form>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Medicine Name" required variant="solo-filled" density="comfortable" v-model="med_name"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="12">
                        <v-select :items="med_type" density="comfortable" label="Medicine Type" variant="solo-filled" v-model="selected_med_type"></v-select>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Amount" required variant="solo-filled" density="comfortable" v-model="amount"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Expiry Date" required variant="solo-filled" density="comfortable" v-model="expiry" type="date"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
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
  
  
          <!-- List of Medicines -->
          <v-card elevation="10" class="mt-2">        
            <v-data-table
              :headers="headers"
              :items="medicine"
              item-key="id">
              <template v-slot:top>
                <v-toolbar color="teal-accent-4">
                  <v-toolbar-title></v-toolbar-title>
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
  import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
    export default {
        name: 'StaffPatient',
        components: {
            Admin_NavBar,
        },
        data: () => ({
          patient_records: [],
          selected_med_type: '',
          dialog: false,
          med_type: [
            'Tablets',
            'Capsules',
            'Syrups',
            'Drops',
          ],
          loaded: false,
          loading: false,
          headers: [
            // { title: 'First Name', key: 'first_name' },
            // { title: 'Middle Name', key: 'middle_name' },
            // { title: 'Last Name', key: 'last_name' },
            { title: 'Medicine Name', key: 'full_name', sortable: false, },
            { title: 'Medicine Type', key: 'contact_num', },
            { title: 'Stock Available', key: 'brgy', },
            { title: 'Expiry Date', key: 'brgy', },
            { title: 'Status', key: 'brgy', },
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