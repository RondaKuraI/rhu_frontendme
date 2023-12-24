<template>
  <div>
    <Staff_NavBar />

    <v-container>
            <h2>Patients</h2>
            <v-dialog v-model="dialog" width="700" transition="dialog-top-transition">
              <template v-slot:activator="{props}">
                <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                  Add Patients
                </v-btn>
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
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.first_name" label="First Name*" required variant="solo-filled" density="comfortable"></v-text-field>        
                        <v-text-field v-model="editedItem.birthdate" label="Birthdate" placeholder="Ex. January 01, 2001" required variant="solo-filled" density="comfortable"></v-text-field>                                                                          
                        <v-text-field v-model="editedItem.email" label="Email*" required variant="solo-filled" density="comfortable"></v-text-field>                                                                          
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.middle_name" label="Middle Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.age" label="Age" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.contact_num" label="Contact No." required variant="solo-filled" density="comfortable"></v-text-field>
                      </v-col>
  
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.last_name" label="Last Name*" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-select v-model="editedItem.sex" :items="sexs" density="comfortable" label="Sex" variant="solo-filled"></v-select>
                        <v-select v-model="editedItem.barangay" :items="barangays" density="comfortable" label="Barangay" variant="solo-filled"></v-select>
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

        <!-- List of Medicines -->
        <v-card elevation="10" class="mt-2">        
          <v-data-table
            :headers="headers"
            :items="desserts"
            :sort-by="[{ key: 'ndc', order: 'asc' }]"
            >
            <template v-slot:top>
              <v-toolbar color="teal-accent-4">
                <v-toolbar-title></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-text-field :loading="loading" density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" class="mr-2"></v-text-field>
              </v-toolbar>
            </template>             

            <template v-slot:item.actions="{ item }">
                  <v-btn density="comfortable" color="teal-darken-4" class="me-2" @click="editItem(item)">Edit</v-btn>
            </template>

            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Reset
              </v-btn>
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
        dialog: false,
        selectedProduct: null,
        stocksToAdd: 0,
        search: '',
        dialogDelete: false,
        sex: 'Male',
        sexs: [
          'Male',
          'Female',
          'Others',
        ],
        barangay: 'Bigaan',
        barangays: [
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
          { title: 'ID', key: 'id',  },
          { title: 'First Name', key: 'first_name', sortable: false, },
          { title: 'Last Name', key: 'last_name', sortable: false, },
          { title: 'Birthdate', key: 'birthdate', },
          { title: 'Age', key: 'age', },
          { title: 'Sex', key: 'sex', },
          { title: 'Contact No.', key: 'contact_num', },
          { title: 'Barangay', key: 'barangay', },
          { title: 'Actions', key: 'actions', },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          id: '',
          first_name: '',
          last_name: '',
          birthdate: '',
          age: '',
          sex: null,
          contact_num: '',
          barangay: null,
        },
        defaultItem: {
          id: '',
          first_name: '',
          last_name: '',
          birthdate: '',
          age: '',
          sex: null,
          contact_num: '',
          barangay: null,
        },
      }),
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Add Patient' : 'Edit Item'
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

        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },

        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
        },

        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },

        closeDelete () {
          this.dialogDelete = false
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
            
            const response = await axios.post('api/newpatient', this.editedItem);
            console.log(response.data);
            this.desserts.push(this.editedItem)
          }
          this.close()
        },
      },
  }
</script>