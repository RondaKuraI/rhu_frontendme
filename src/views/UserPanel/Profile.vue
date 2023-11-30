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