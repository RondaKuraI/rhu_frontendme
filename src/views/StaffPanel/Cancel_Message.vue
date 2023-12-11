<template>
    <div>
        <Staff_NavBar />

        <v-container>
            <h2 class="mb-2">Message</h2>
            <v-card color="teal-accent-4">
                <v-card-title>Cancel Message to Patient</v-card-title>
                <v-form>
                    <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6" md="12">
                                    <v-text-field label="Patient Name" required variant="solo-filled" density="comfortable" v-model="patient"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="12">
                                    <v-text-field label="Contact Number" required variant="solo-filled" density="comfortable" v-model="contact_num"></v-text-field>
                                </v-col>
    
                                <v-col cols="12" sm="6" md="12">
                                    <v-textarea label="Message" required variant="solo-filled" density="comfortable"></v-textarea>
                                </v-col>
                            </v-row>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn color="orange" variant="elevated" to="/staff-dashboard/pending_appointments">
                          Back
                        </v-btn>
                        <v-btn color="teal-darken-4" variant="elevated" @click="submit" >
                          Submit
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import Staff_NavBar from '@/components/Staff/Staff_NavBar.vue'
    export default {
        name: 'Cancel_Message',
        components: {
            Staff_NavBar,
        },
        methods: {
            submit() {
                console.log('Clicked');
            }
        }
    }
</script>

<style>

</style>