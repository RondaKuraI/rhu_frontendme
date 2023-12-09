<template>
    <div>
      <Admin_NavBar />

      <v-container>
        <v-row>
            <v-col class="hidden-md-only text-sm-h5 text-lg-h4">
                <h4>Patients</h4>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col cols="auto">
                <v-btn class="mb-2" size="small" variant="elevated" color="orange">Add Patient</v-btn>
            </v-col>
        </v-row> -->

          <v-dialog v-model="dialog" width="800" transition="dialog-top-transition">
            <template v-slot:activator="{props}">
              <v-btn color="orange" size="small" v-bind="props" class="mt-2 mb-4" prepend-icon="mdi-plus">
                Add Patient
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span>Add Patient</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="First Name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Middle Name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Last Name*" required></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>


          <!-- List of Patients -->
          <v-card elevation="10">        
            <v-data-table
              :headers="headers"
              :items="documents"
              item-key="name">
              <template v-slot:top>
                <v-toolbar color="teal-accent-1">
                  <v-toolbar-title>List of Records</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn class="me-2" color="blue">Edit</v-btn>
                <v-btn color="red">Delete</v-btn>
              </template>
            </v-data-table>
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
          dialog: false,
        }),
    }
</script>