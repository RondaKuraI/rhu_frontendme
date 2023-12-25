<template>
  <div>
    <Admin_NavBar />

    <v-container>
            <h2>Staffs</h2>
            <v-dialog v-model="dialog" width="500" transition="dialog-top-transition">
              <template v-slot:activator="{props}">
                <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                  Add Staff
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
                      <v-col cols="12" sm="6" md="12" >
                        <v-text-field v-model="editedItem.staff_id" label="Staff ID" variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.first_name" label="First Name" variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.middle_name" label="Middle Name" variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.last_name" label="Last Name" variant="solo-filled" density="comfortable"></v-text-field>
                        <v-select v-model="editedItem.gender" :items="genders" density="comfortable" label="Gender" variant="solo-filled"></v-select>
                        <v-text-field v-model="editedItem.age" label="Age" variant="solo-filled" density="comfortable"></v-text-field>
                        <v-text-field v-model="editedItem.contact_num" label="Contact No." variant="solo-filled" density="comfortable"></v-text-field>
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
            :sort-by="[{ key: 'staff_id', order: 'asc' }]"
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
import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
  export default {
      name: 'StaffPatient',
      components: {
          Admin_NavBar,
      },
      data: () => ({
        dialog: false,
        selectedProduct: null,
        stocksToAdd: 0,
        search: '',
        dialogDelete: false,
        gender: 'Male',
        genders: [
          'Male',
          'Female',
          'Others',
        ],
        loaded: false,
        loading: false,
        headers: [
            {
              align: 'start',
              key: 'staff_id',
              sortable: false,
              title: 'Staff ID',
            },
            { key: 'first_name', title: 'First Name' },
            { key: 'middle_name', title: 'Middle Name' },
            { key: 'last_name', title: 'Last Name' },
            { key: 'gender', title: 'Gender' },
            { key: 'age', title: 'Age' },
            { key: 'contact_num', title: 'Contact No.' },
            { title: 'Actions', key: 'actions', sortable: false },
          ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          staff_id: '',
          first_name: '',
          middle_name: '',
          last_name: '',
          gender: null,
          age: '',
          contact_num: '',
        },
        defaultItem: {
          staff_id: '',
          first_name: '',
          middle_name: '',
          last_name: '',
          gender: null,
          age: '',
          contact_num: '',
        },
      }),
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Add Staff' : 'Edit Item'
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
          const data = await axios.get('api/getStaffs');
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
          const response = await axios.put(`api/updatestaff/${this.editedItem.id}`, this.editedItem);
          console.log(response.data);
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          
          const response = await axios.post('api/newstaff', this.editedItem);
          console.log(response.data);
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      },
  }
</script>