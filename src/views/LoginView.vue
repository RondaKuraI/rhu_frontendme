<template>
    <v-app>
        <div class="background"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4" elevation="10">
                    <div class="text-center">
                        <v-avatar size="100" color="teal-darken-2">
                            <v-img aspect-ratio="30" src="https://scontent.fmnl33-3.fna.fbcdn.net/v/t1.15752-9/400642690_872617371223316_946465565951057917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHcFbNT1CcZuq-nKiDa8OaoebRNIrwIGd95tE0ivAgZ3wL-kLw_vY0jWTOZrIEChbtxoYn6z6jWsLyI_R6FqTlm&_nc_ohc=CSqGffAX6eMAX8IIsJ8&_nc_ht=scontent.fmnl33-3.fna&oh=03_AdSpcjOhbd70zvJYKbZMWFlQ_L562Hf3KiqJspBsGd4EpA&oe=65A3F9B5"/>
                        </v-avatar>
                        <h2 class="text-teal-darken-4">Login to your Account</h2>
                    </div>
                    <v-form fast-fail @submit.prevent="login">
                        <v-card-text>
                            <v-text-field
                                type="email"
                                v-model="email"
                                label="Email"
                                placeholder="Email"
                                prepend-inner-icon="mdi-email"
                                variant="outlined"
                                color="teal-darken-4"
                            />
                            <v-text-field
                                :type=" passwordShow ? 'text' : 'password' "
                                v-model="password"
                                label="Password"
                                placeholder="Password"
                                prepend-inner-icon="mdi-key"
                                variant="outlined"
                                color="teal-darken-4"
                                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-inner="passwordShow = !passwordShow"
                            />
                            <!-- <v-switch label="Remember Me" color="teal-darken-4"></v-switch> -->
                            <v-btn type="submit" block color="teal-darken-4">Login</v-btn>
                        </v-card-text>
                        <h4> Dont have an account yet?
                        <a href="/register">Sign Up</a>
                        </h4>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
</template>
<script>
import axios from 'axios';
import router from '@/router';
export default {
    name: 'LoginView',

    data: () => ({
        isLoading: false,
        email: "",
        password: "",
        errorMsg: "",
        passwordShow: false,
    }),
    methods: {
        // async login(){
        //     const d = await axios.post("api/login", {
        //         email: this.email,
        //         password: this.password,
        //     });
        //     if(d.data.msg === 'okay'){
        //         sessionStorage.setItem("token", d.data.token);
        //         router.push('/dashboard');
        //     }
        // }
        async login() {
        try {
            this.isLoading = true;
            const response = await axios.post("api/login", {
                email: this.email,
                password: this.password,
            });

            if (response.data.msg === 'okay') {
                sessionStorage.setItem("token", response.data.token);
                console.log('Role from response:', response.data.role);
                switch (response.data.role) {
                    case 'admin':
                        router.push('/admin-dashboard');
                        break;
                    case 'staff':
                        router.push('/staff-dashboard');
                        break;
                    case 'doctor':
                        router.push('/doctor-dashboard');
                        break;
                    case 'user':
                        router.push('/dashboard');
                        break;
                    default:
                        router.push('/doctor-dashboard');
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
            this.errorMsg = "An error occurred during login. Please try again.";
        } finally {
            this.isLoading = false;
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