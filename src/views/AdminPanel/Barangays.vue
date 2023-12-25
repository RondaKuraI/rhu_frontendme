<template>
    <Admin_NavBar />
    <v-container>
        <v-card>
          <v-tabs v-model="tab" bg-color="teal-accent-1" fixed-tabs>
            <v-tab value="Bigaan">Bigaan</v-tab>
            <v-tab value="Calangatan">Calangatan</v-tab>
            <v-tab value="Calsapa">Calsapa</v-tab>
            <v-tab value="Ilag">Ilag</v-tab>
            <v-tab value="Lumangbayan">Lumangbayan</v-tab>
            <v-tab value="Tacligan">Tacligan</v-tab>
            <v-tab value="Poblacion">Poblacion</v-tab>
            <v-tab value="Caagutayan">Caagutayan</v-tab>
          </v-tabs>
      
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="Bigaan">
                <v-card>
                  <v-card-title><h2>Brgy. Bigaan</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Bigaan, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Rhoda A. Apolinar</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09293411701</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>
      
              <v-window-item value="Calangatan">
                <v-card>
                  <v-card-title><h2>Brgy. Calangatan</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Paspasin, Calangatan, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Viajoy M. Medina</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09563726220</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>
      
              <v-window-item value="Calsapa">
                <v-card>
                  <v-card-title><h2>Brgy. Calsapa</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Calsapa, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Marissa Dimaculangan</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09393801541</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>

              <v-window-item value="Ilag">
                <v-card>
                  <v-card-title><h2>Brgy. Ilag</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Ilag, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Maricel A. Isar</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09209729366</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>

              <v-window-item value="Lumangbayan">
                <v-card>
                  <v-card-title><h2>Brgy. Lumangbayan</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p>Lumangbayan, San Teodoro, Oriental Mindoro<strong>Address:</strong></p>
                      <p></p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Arleth Yabes Balmes</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09091056433</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>

              <v-window-item value="Tacligan">
                <v-card>
                  <v-card-title><h2>Brgy. Tacligan</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Tacligan, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Jerry A. Singian</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09453449547</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>

              <v-window-item value="Poblacion">
                <v-card>
                  <v-card-title><h2>Brgy. Poblacion</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Poblacion, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Wennie Rafael</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09067106969</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>

              <v-window-item value="Caagutayan">
                <v-card>
                  <v-card-title><h2>Brgy. Caagutayan</h2></v-card-title>
                  <v-card-text>
                    <v-card-title>
                      <p><strong>Address:</strong></p>
                      <p>Caagutayan, San Teodoro, Oriental Mindoro</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>BHW:</strong></p>
                      <p>Bryan Ramos</p>
                    </v-card-title>
                    <v-card-title>
                      <p><strong>Contact No.:</strong></p>
                      <p>09301363788</p>
                    </v-card-title>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
    </v-container>
</template>
<script>

import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue';
    export default {
        name: 'Barangay',
        components: {
            Admin_NavBar,
        },
      data: () => ({
        tab: null,
      }),
    }
</script>