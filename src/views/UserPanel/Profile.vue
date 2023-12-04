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
                <v-form fast-fail @submit.prevent="createProduct">
                    <v-text-field v-model="email" label="Email" :rules="emailRules"></v-text-field>
                    <v-file-input label="Select an image"></v-file-input>
                    <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
                    <v-text-field v-model="middleName" label="Middle name" :rules="middleNameRules"></v-text-field>
                    <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>
                    <v-select label="Gender" :items="['Male', 'Female', 'Goat', 'Athiest']"></v-select>
                    <v-select label="Civil Status" :items="['Single', 'Married', 'Divorced', 'Widowed', 'in a civil partnership or being a former civil partner in a civil partnership that has ended by death or, been dissolved']"></v-select>
                    <v-textarea label="Address"></v-textarea>
                    <v-text-field v-model="contactNum" label="Contact Number" :rules="contactNumRules"></v-text-field>
                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
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