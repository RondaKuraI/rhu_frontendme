<template>
  <div>
      <Staff_NavBar />        
      <v-container>
          <h2 class="mb-2">Appointment List</h2>

          <v-dialog v-model="dialog" width="700" transition="dialog-top-transition">
              <template v-slot:activator="{props}">
                <!-- <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                  Add Patients
                </v-btn> -->
              </template>
              <v-card>
                <v-toolbar color="orange">
                  <v-card-title>
                    <!-- <span>Add Medicine</span> -->
                    <span>{{formTitle}}</span>
                  </v-card-title>
                </v-toolbar>

                <v-card-text>       
                  <v-container density="comfortable">
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field v-model="editedItem.first_name" label="First Name" required variant="solo-filled" density="comfortable"></v-text-field> 
                        <v-text-field v-model="editedItem.last_name" label="Last Name" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.date" label="Appointment Schedule" placeholder="Ex. January 01, 2001" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.doctor" label="Doctor" required variant="solo-filled" density="comfortable" ></v-text-field>
                        <v-text-field  v-model="editedItem.reason" label="Reason" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field  v-model="editedItem.status" label="Status" required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red-accent-4" variant="elevated" @click="close">
                    Close
                  </v-btn>
                  <v-btn color="teal-darken-4" variant="elevated" @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          <v-card elevation="10" class="mt-2">        
              <v-data-table
              :headers="headers"
              :items="desserts"
              item-key="patient_name">

              <!-- Custom slot for the 'status' column -->
          <template v-slot:item.status="{ item }">
            <v-chip :color="getStatusColor(item.status)" color="white" variant="flat" size="small">
              {{ item.status.toLowerCase() }}
            </v-chip>
          </template>

              <template v-slot:top>
                  <v-toolbar color="teal-accent-4">
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-text-field :loading="loading" density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="mr-2"></v-text-field>
                  </v-toolbar>
              </template>

              <template v-slot:item.action="{ item }">
                    <v-btn density="comfortable" color="teal-darken-4" class="me-2" @click="editItem(item)">Edit</v-btn>
                </template>
              <!-- <template v-slot:item.action="{ item }">
                  <v-btn density="comfortable" color="teal-darken-4" class="me-2">View</v-btn>
              </template> -->
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
        dialog: false,
          desserts: [],
          editedIndex: -1,
          editedItem: {
            first_name: '',
            last_name: '',
            date: null,
            doctor: '',
            reason: '',
            status: '',
          },
          defaultItem: {
            first_name: '',
            last_name: '',
            date: null,
            doctor: '',
            reason: '',
            status: '',
          },
          loaded: false,
          loading: false,
          headers: [
          { title: 'First Name', align: 'start', sortable: false, key: 'first_name' },
          { title: 'Last Name', align: 'start', sortable: false, key: 'last_name' },
          { title: 'Appointment Schedule', key: 'date', },
          { title: 'Doctor', key: 'doctor' },
          { title: 'Reason', key: 'reason' },
          { title: 'Status', key: 'status' },
          { title: 'Action', key: 'action' },
        ],
      }),

      computed: {
          formTitle () {
            return this.editedIndex === -1 ? 'Add Medicine' : 'Edit Item'
          }
        },

        watch: {
          dialog (val) {
            val || this.close()
          },
          dialogDelete (val) {
            val || this.closeDelete()
          },
        },

        created () {
          this.initialize()
        },

    //   created() {
    //     this.getPatient_Records();
    //   },
      methods: {
          onClick () {
          this.loading = true

          setTimeout(() => {
            this.loading = false
            this.loaded = true
          }, 2000)
        },

        async initialize () {
            const data = await axios.get('api/getAllAppointment_Data');
            this.desserts = data.data;
          },

          editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
          },

          close () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
          },

          async save () {
            if (this.editedIndex > -1) {
              // edit
              const response = await axios.put(`api/updateMedicine/${this.editedItem.id}`, this.editedItem);
              console.log(response.data);
              Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
              
              const response = await axios.post('api/newmedicine', this.editedItem);
              console.log(response.data);
              this.desserts.push(this.editedItem)
            }
            this.close()
          },

        //   async getPatient_Records() {
        //       try{
        //           const patient_rec = await axios.get('api/getAllAppointment_Data');
        //           this.patient_records = patient_rec.data;
        //       } catch(error){
        //           console.error('Error fetching patient records:', error);
        //       }
        //   },
          // Function to determine the color of the status chip based on status value
          getStatusColor(status){
              switch(status.toLowerCase()){
              case 'pending':
                  return 'yellow';
              case 'approved':
                  return 'green';
              case 'cancelled':
                  return 'red';
              default:
                  return 'grey';
              }
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