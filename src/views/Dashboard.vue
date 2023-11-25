<template>
  <div>
    <NavBar />

      <v-container>
        <v-row>
          <v-col>
            <h1>Appointment Schedules</h1>
          </v-col>
          <v-col class="text-right">
            <v-dialog
              v-model="dialog"
              transition="dialog-top-transition"
              persistent
              width="1024"
            >
              <template v-slot:activator="{ props }">
                <v-btn color="teal-accent-4" prepend-icon="mdi-plus" v-bind="props">Add Appointment</v-btn>
              </template>

              <v-card>
                <v-toolbar color="teal">
                  <v-card-title>
                    <span class="text-h5">User Profile</span>
                  </v-card-title>
                </v-toolbar>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        
      </v-container>

        <v-container>      
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-date-picker elevation="24" width="100%" color="teal-accent-4"></v-date-picker>
            </v-col>
          </v-row>
        </v-container>
  </div>

</template>
  
<script>
import NavBar from '@/components/User/NavBar.vue';
import SideNav from '@/components/User/SideNav.vue';
export default {
  name: 'Dashboard',
      components: {
        NavBar,
        SideNav,
      },
  data: () => ({
    isDrawerOpen: false,
    dialog: false,
  }),
}
</script>
