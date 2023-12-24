<template>
    <div>
      <Admin_NavBar />
  
      <v-container>
              <h2>Medicines</h2>
              <v-dialog v-model="dialog" width="500" transition="dialog-top-transition">
                <template v-slot:activator="{props}">
                  <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-2" prepend-icon="mdi-plus">
                    Add Medicine
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
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field v-model="editedItem.ndc" label="National Drug Code" required variant="solo-filled" density="comfortable"></v-text-field> 
                        <v-text-field v-model="editedItem.med_name" label="Medicine Name" required variant="solo-filled" density="comfortable"></v-text-field>
                        <v-select v-model="editedItem.med_type" :items="med_types" density="comfortable" label="Medicine Type" variant="solo-filled"></v-select>
                        <v-text-field v-model="editedItem.stocks" label="Stocks" required variant="solo-filled" density="comfortable" ></v-text-field>
                        <v-text-field  v-model="editedItem.expiry_date" label="Expiry Date" required variant="solo-filled" density="comfortable" type="date"></v-text-field>
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
              <!-- <template v-slot:item.action="{ item }">
                    <v-btn density="comfortable" color="teal-darken-4" class="me-2">View</v-btn>
                    <v-btn density="comfortable" color="orange" class="me-2" to="/staff-dashboard/add_appointment">Add Appointment</v-btn>
                </template> -->
                

              <template v-slot:item.actions="{ item }">
                    <v-btn density="comfortable" color="teal-darken-4" class="me-2" @click="editItem(item)">Edit</v-btn>
                    <v-btn density="comfortable" color="orange" class="me-2" @click="openStocksModal(item)">Add</v-btn>
                    <router-link :to="{ name: 'History', params: { ndc: item.ndc } }">
                      <v-icon size="small">mdi-history</v-icon>
                    </router-link>
              </template>

              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                  Reset
                </v-btn>
              </template>

            </v-data-table>
            <v-dialog v-model="stocksModal" max-width="400">
              <v-card>
                <v-card-title>Add Stocks</v-card-title>
                <v-card-text>
                  <!-- Your stocks input field and other necessary fields go here -->
                  <v-text-field v-model="stocksToAdd" label="Stocks"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn variant="elevated" color="red-accent-4" @click="closeStocksModal">Close</v-btn>
                  <v-btn variant="elevated" color="teal-darken-4" @click="addStocks">Add</v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
      </v-container>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
    export default {
        name: 'Medicines',
        components: {
            Admin_NavBar,
        },
        data: () => ({
          dialog: false,
          stocksModal: false,
          selectedProduct: null,
          stocksToAdd: 0,
          search: '',
          dialogDelete: false,
          med_type: 'Tablets',
          med_types: [
            'Tablets',
            'Capsules',
            'Syrups',
            'Drops',
          ],
          loaded: false,
          loading: false,
          headers: [
            { title: 'NDC', key: 'ndc',  },
            { title: 'Medicine Name', key: 'med_name', sortable: false, },
            { title: 'Medicine Type', key: 'med_type', },
            { title: 'Stock Available', key: 'stocks', },
            { title: 'Expiry Date', key: 'expiry_date', },
            { title: 'Status', key: 'status', },
            { title: 'Actions', key: 'actions', },
          ],
          desserts: [],
          editedIndex: -1,
          editedItem: {
            ndc: '',
            med_name: '',
            med_type: null,
            stocks: 0,
            expiry_date: null,
            status: '',
          },
          defaultItem: {
            ndc: '',
            med_name: '',
            med_type: null,
            stocks: 0,
            expiry_date: null,
            status: '',
          },
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
        methods: {
          onClick () {
            this.loading = true
  
            setTimeout(() => {
              this.loading = false
              this.loaded = true
            }, 2000)
          },

          openStocksModal(item){
            this.selectedProduct = item;
            this.stocksToAdd = 0;
            this.stocksModal = true;
          },

          closeStocksModal() {
            this.selectedProduct = null;
            this.stocksToAdd = 0;
            this.stocksModal = false;
          },

          async addStocks() {
            const updatedProduct = { ...this.selectedProduct };
            updatedProduct.stocks += parseInt(this.stocksToAdd);
            await axios.post('api/updateStocks', {
              ndc: updatedProduct.ndc,
              stocks: this.stocksToAdd,
            });
            const index = this.desserts.findIndex((product) => product.ndc === updatedProduct.ndc);
            this.initialize();
            this.closeStocksModal();
          },

          async initialize () {
            const data = await axios.get('api/getMedicines');
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
              
              const response = await axios.post('api/newmedicine', this.editedItem);
              console.log(response.data);
              this.desserts.push(this.editedItem)
            }
            this.close()
          },
        },
    }
  </script>