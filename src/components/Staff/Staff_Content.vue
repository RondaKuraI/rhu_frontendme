<template>
    <div>

        
        
        <!-- List of Patients -->
        <v-container>
            <h2 class="mb-2">Appointment Schedule</h2>
            <v-card elevation="10">
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <v-date-picker elevation="24" width="100%" color="teal-accent-4"></v-date-picker>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
    </div>
  </template>
  
  <script>
  import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
    export default {
        name: 'Records',
        components: {
            Admin_NavBar,
        },
        data: () => ({
          date: '',
          time: '',
          dialog: false,
          items: [
            'Bigaan',
            'Calangatan',
            'Ilag',
            'Lumangbayan',
            'Tacligan',
            'Poblacion',
            'Caagutayan',
          ],
          doctors: [
            'Dr. Kwak Kwak',
          ],
          loaded: false,
          loading: false,
        }),
      }
  </script>