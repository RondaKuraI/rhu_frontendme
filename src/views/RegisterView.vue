<template>
    <v-app>
        <div class="background"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4" elevation="10">
                    <div class="text-center">
                        <h2 class="text-teal-darken-4">Register</h2>
                    </div>
                    <v-form @submit.prevent="register">
                        <v-card-text>
                            <v-text-field
                                v-model="first_name"
                                type="text"
                                label="First Name"
                                required
                                placeholder="First Name"
                                prepend-inner-icon="mdi-account"
                                variant="outlined"
                                color="teal-darken-4"
                                density="comfortable"
                            />
                            <v-text-field
                                v-model="last_name"
                                type="text"
                                label="Last Name"
                                required
                                placeholder="Last Name"
                                prepend-inner-icon="mdi-account"
                                variant="outlined"
                                color="teal-darken-4"
                                density="comfortable"
                            />
                            <v-text-field
                                v-model="email"
                                type="email"
                                label="Email"
                                required
                                placeholder="Email"
                                prepend-inner-icon="mdi-email"
                                variant="outlined"
                                color="teal-darken-4"
                                density="comfortable"
                            />
                            <v-text-field
                                v-model="password"
                                :type=" passwordShow ? 'text' : 'password' "
                                label="Password"
                                required
                                placeholder="Password"
                                prepend-inner-icon="mdi-key"
                                variant="outlined"
                                color="teal-darken-4"
                                density="comfortable"
                                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-inner="passwordShow = !passwordShow"
                            />
                            <v-text-field
                                v-model="confpassword"
                                type="password"
                                label="Confirm Password"
                                required
                                placeholder="Confirm Password"
                                prepend-inner-icon="mdi-key"
                                variant="outlined"
                                color="teal-darken-4"
                                density="comfortable"
                            ></v-text-field>
                            <!-- Role selection dropdown -->
                            <v-select v-model="role" :items="roles" label="Role" variant="outlined" color="teal-darken-4" density="comfortable"></v-select>
                            <v-btn type="submit" block color="teal-darken-4">Register</v-btn>
                        </v-card-text>
                        <h4> Already have an account?
                        <a href="/">Sign In</a>
                        </h4>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RegisterView',
    data: () => ({
        passwordShow: false,
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confpassword: '',
        role: 'user',
        roles: [
            'admin',
            'user',
            'staff',
            'doctor',
        ],
        message: '',
    }),
    methods: {
        // submitForm(){
        //     axios.post('/api/register', this.formData)
        //         .then(response => {
        //             if (response.data.success) {
        //                 console.log('Registration successful:', response.data.message);
        //                 // Redirect to the login page
        //                 this.$router.push('/');
        //             } else {
        //                 this.$vuetify.snackbar.error(response.data.message);
        //             }
        //         })
        //         .catch(error => {
        //             this.$vuetify.snackbar.error('Error submitting form. Please try again.');
        //             console.error('Error submitting form:', error.message);
        //         })
        // }
        async register(){
            if(this.password === this.confpassword){
                try {
                    const response = await axios.post('/api/register', {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        password: this.password,
                        confpassword: this.confpassword,
                        role: this.role,
                    });

                    if(response.data.msg === 'okay'){
                        alert('Registration successful');
                        this.$router.push('/');
                    } else {
                        this.message = 'Registration Failed';
                        console.error('Registration Failed', error);
                    }
                } catch (error) {
                    console.error('There was an error during registration', error);
                    this.message = 'error';
                }
            } else {
                this.message = "Password Mismatched";
            }
        }
    }
}

</script>
<style>
.background {
    background-image: url(@/assets/pxfuel.jpg) !important;
    height: 300px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
}
</style>