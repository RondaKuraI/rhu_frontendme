<template>
  <div>
    <NavBar />
    
    <v-container>
        <h1>Prescription Records</h1>
      
        <v-card elevation="10">
          <v-data-table
            :headers="headers"
            :items="records"
            item-key="name">
          </v-data-table>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/User/NavBar.vue';
  export default {
    name: 'Appointment',
    components: {
      NavBar
    },
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
      headers: [
      { title: 'Reference ID', align: 'start', sortable: false, key: 'name' },
      { title: 'Reason', align: 'end', key: 'light' },
      { title: 'Doctor', align: 'end', key: 'height' },
      { title: 'Review Date ', align: 'end', key: 'petFriendly' },
      { title: 'Prescription Date', align: 'end', key: 'price' },
      { title: 'Status', align: 'end', key: 'price' },
    ],
    records: [
      { name: 'Fern', light: 'Low', height: '20cm', petFriendly: 'Yes', price: 20, price: 233 },
    ]
    }),
  }
</script>

<style scoped>

</style>