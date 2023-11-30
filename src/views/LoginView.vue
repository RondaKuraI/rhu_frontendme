<template>
    <v-app>
        <div class="background"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                    <div class="text-center">
                        <v-avatar size="100" color="teal-accent-2">
                            <v-icon size="40" color="teal-accent-4">mdi-account</v-icon>
                        </v-avatar>
                        <h2 class="text-teal-accent-4">Login to your Account</h2>
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
                                color="teal-accent-4"
                            />
                            <v-text-field
                                :type=" passwordShow ? 'text' : 'password' "
                                v-model="password"
                                label="Password"
                                placeholder="Password"
                                prepend-inner-icon="mdi-key"
                                variant="outlined"
                                color="teal-accent-4"
                                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-inner="passwordShow = !passwordShow"
                            />
                            <v-switch label="Remember Me" color="teal-accent-4"></v-switch>
                            <v-btn type="submit" block color="teal-accent-4">Login</v-btn>
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
        email: "",
        password: "",
        errorMsg: "",
        passwordShow: false,
    }),
    methods: {
        async login(){
            const d = await axios.post("api/login", {
                email: this.email,
                password: this.password
            });
            if(d.data.msg === 'okay'){
                sessionStorage.setItem("token", d.data.token);
                router.push('/dashboard');
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