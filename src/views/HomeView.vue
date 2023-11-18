<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login to your Account</h4>
                    <h6 class="text-center grey--text">Login to your account so youfwihfowejfo
                      <br> and watashi wa
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field label="Email" variant="outlined" dense color="teal-accent-4" autocomplete="false" class="mt-16"></v-text-field>
                        <v-text-field label="Password" variant="outlined" dense color="teal-accent-4" autocomplete="false" type="password"></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="Remember me" class="mt-n1" color="teal-accent-4"></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="text-caption text-teal-accent-4">Forget Password</span>
                          </v-col>
                        </v-row>
                        <v-btn color="teal-accent-4" dark block tile class="mb-10">Login</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="bg-teal-accent-4">
                  <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="text-white">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data: () => ({
      step: 1
    }),
    propos: {
      source: String
    }
  }

</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-bl-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
