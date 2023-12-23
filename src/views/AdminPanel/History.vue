<template>
    <v-card flat
      title="Nutrition"
    >
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
      </template>
  
      <v-data-table
        :headers="headers" :items="desserts" :search="search">
    </v-data-table>
    </v-card>
  </template>
 <script>
 import axios from 'axios'
   export default {
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