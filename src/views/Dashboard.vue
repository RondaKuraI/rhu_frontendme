<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" color="teal-accent-4">
        <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
              cover>
            <div class="text-center mt-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                </v-avatar>
                <h2 class="text-yellow-lighten-5">User Panel</h2>
            </div>
        </v-img>

        
  
        <v-divider></v-divider>
  
        <v-list>
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            :prepend-icon="icon"
            :title="text"
            link
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        color="teal-accent-4"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Hello, User</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-heart"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>
  
      <v-main>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card"
              cols="12"
            >
              <v-card>
                <v-list lines="two">
                  <v-list-subheader :title="card"></v-list-subheader>
  
                  <template v-for="n in 6" :key="n">
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-avatar color="grey-darken-1"></v-avatar>
                      </template>
  
                      <v-list-item-title :title="`Message ${n}`"></v-list-item-title>
  
                      <v-list-item-subtitle title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique"></v-list-item-subtitle>
                    </v-list-item>
  
                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                    ></v-divider>
                  </template>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: null,
        links: [
          ['mdi-view-dashboard', 'Dashboard'],
          ['mdi-calendar-multiselect', 'Appointment'],
          ['mdi-folder', 'Records'],
        ],
      }),
    }
  </script>