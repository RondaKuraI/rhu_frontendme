<template>
  <div>
    <NavBar />
    
    <v-container>
        <h1>Appointment List</h1>
      
        <v-card>        
          <v-data-table
            :headers="headers"
            :items="plants"
            
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
      { title: 'Plant', align: 'start', sortable: false, key: 'name' },
      { title: 'Light', align: 'end', key: 'light' },
      { title: 'Height', align: 'end', key: 'height' },
      { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
      { title: 'Price ($)', align: 'end', key: 'price' },
    ],
    }),
  }
</script>

<style scoped>

</style>