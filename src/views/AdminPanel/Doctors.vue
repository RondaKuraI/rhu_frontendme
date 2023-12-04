<template>
  <div>
    <Admin_NavBar />

    <v-container>
          <v-card>
            <v-card-title>
                <v-btn color="teal-accent-4" prepend-icon="mdi-plus">Add Doctor</v-btn>
            </v-card-title>
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
import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
  export default {
    name: 'AdminAppointment',
    components: {
      Admin_NavBar,
    },
    data: () => ({
      headers: [
      { title: 'ID', align: 'start', sortable: false, key: 'name' },
      { title: 'Schedule', align: 'end', key: 'light' },
      { title: 'Reason', align: 'end', key: 'height' },
      { title: 'Status', align: 'end', key: 'petFriendly' },
      { title: 'Actions', align: 'end', key: 'price' },
    ],
    }),
  }
</script>

<style>

</style>