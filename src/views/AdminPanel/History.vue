<template>
  <div>
    <Admin_NavBar />
    <v-container>
      <v-row>
      <v-col>
        <span>
          <h2 class="headline">History</h2>
        </span>
      </v-col>
      <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
      <v-col>
        <v-btn color="red-accent-4" variant="elevated" density="comfortable" to="/admin-dashboard/inventory/medicine">Back</v-btn>
      </v-col>
    </v-row>
      <v-card elevation="10" class="mt-2">
        <template v-slot:text>
          <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" single-line variant="outlined" hide-details></v-text-field>
        </template>
    
        <v-data-table
        :headers="headers" 
        :items="desserts" 
        :search="search">
        </v-data-table>
      </v-card>
    </v-container>
    </div>
  </template>
 <script>
 import axios from 'axios'
 import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
   export default {
    name: 'History',
        components: {
            Admin_NavBar,
        },
     data () {
       return {
         stocksModal: false,
         selectedProduct: null,
         stocksToAdd: 0,
         search: '',
         ndc: null,
         auditData: null,
         headers: [
           {
             align: 'start',
             key: 'ndc',
             sortable: false,
             title: 'NDC',
           },
           { key: 'med_name', title: 'Medicine Name' },
           { key: 'med_type', title: 'Medicine Type' },
           { key: 'oldStocks', title: 'Old Stocks' },
           { key: 'stocks', title: 'Stocks' },
           { key: 'type', title: 'type' },
         ],
         desserts: [],
       }
     },
     
  mounted() {
    // Access the NDC parameter passed in the route
    this.ndc = this.$route.params.ndc;
    this.getAudit();
  },
     
     methods:{
       async getAudit(){
        const data = await axios.get(`api/audit/${this.ndc}`);
         this.desserts = data.data;
       }
     }
   }
 </script>