<template>
    <div>
        <v-dialog v-model="dialog" transition="dialog-top-transition" persistent width="400">
            <template v-slot:activator="{ props }">
                <v-btn color="teal-accent-4" prepend-icon="mdi-plus" v-bind="props" density="comfortable" class="sm-x-small">Add Appointment</v-btn>
            </template>
  
            <v-card>
                <v-toolbar app color="teal" scroll-behavior="elevate">
                    <v-card-title>
                      <span class="text-h5">Appointment</span>
                    </v-card-title>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-form>
                          <v-text-field label="Title" v-model="title"></v-text-field>
                          <v-textarea label="Reason" v-model="content"></v-textarea>
                          <!--
                            <v-row>
                              <v-col cols="12">
                                <v-text-field label="Date of Appointment" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Time of Appointment" hint="example of helper text only on focus"></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Doctor" hint="example of persistent helper text" persistent-hint required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Reason" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-autocomplete
                                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                  label="Interests" multiple></v-autocomplete>
                              </v-col>
                            </v-row>
                          -->
                        </v-form>
                    </v-container>
                </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn color="red" variant="elevated" @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="elevated" @click="submit" >
                      Save
                    </v-btn>
                  </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Dialog',
        data: () => ({
            dialog: false,
            title: null,
            content: null,
        }),
        methods: {
          submit() {
            console.log(this.title, this.content)
          }
        }
    }
</script>

<style scoped>

</style>