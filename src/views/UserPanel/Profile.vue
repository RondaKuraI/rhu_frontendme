<template>
    <div>
        <NavBar />

        <v-container>
          <v-row>
            <v-col class="hidden-md-only text-sm-h5 text-lg-h4">
              <p>Profile</p>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
            <v-card>
                <v-card-title>
                    Profile
                </v-card-title>
                <v-card-text>
                    <v-form fast-fail @submit.prevent="createProduct">
                        <v-row>
                            <v-col cols="12">
                                <v-file-input  density="comfortable" label="Select an image"></v-file-input>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field  density="comfortable" v-model="first_name" label="First Name"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field  density="comfortable" v-model="middle_name" label="Middle Name"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field  density="comfortable" v-model="last_name" label="Last Name" ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field  density="comfortable" v-model="birthdate" label="Birthdate"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field  density="comfortable" v-model="age" label="Age"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-radio-group label="Sex">
                                    <v-radio label="Male" value="one"></v-radio>
                                    <v-radio label="Female" value="two"></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field label="Contact No." required variant="solo-filled" density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-select :items="items" density="comfortable" label="Barangay"></v-select>
                            </v-col>

                            <v-col cols="12">
                                <v-btn  density="comfortable" type="submit" block class="mt-2">Submit</v-btn>
                            </v-col>
                            
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import NavBar from '@/components/User/NavBar.vue'
    export default {
        name: 'Profile',
        components: {
            NavBar,
        }
    }
</script>

<style>

</style>