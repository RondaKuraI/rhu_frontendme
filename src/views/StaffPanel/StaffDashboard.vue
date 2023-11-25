<template>
  <v-container>
    <v-navigation-drawer v-model="isDrawerOpen" color="teal-accent-4">
        <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
                cover>
              <div class="text-center mt-4">
                  <v-avatar class="mb-4" color="grey-darken-1" size="64">
                      <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                  </v-avatar>
                  <h2 class="text-yellow-lighten-5">Staff Panel</h2>
              </div>
          </v-img>
  
          <v-divider></v-divider>
  
        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/staff-dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/staff-dashboard/appointment" prepend-icon="mdi-calendar">Appointment</v-list-item>
          <v-list-item to="/staff-dashboard/patient" prepend-icon="mdi-folder">Patient</v-list-item>

          <v-list-group value="Hakddog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-folder">Inventory</v-list-item>
            </template>
            <v-list-item to="/staff-dashboard/medicine" prepend-icon="mdi-pill">Medicine</v-list-item>
          </v-list-group>
        </v-list>
          
        <template v-slot:append>
            <div class="pa-2">
              <v-btn block color="teal-darken-4" href="/">
                Logout
              </v-btn>
            </div>
          </template>
      </v-navigation-drawer>
  
      <v-app-bar flat class="border-b" color="teal-accent-4" scroll-behavior="elevate">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-app-bar-title>Hakdog</v-app-bar-title>
  
        <template #append>
          <v-btn icon class="mr-2">
            <v-badge dot color="error">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
          </v-btn>
          
          <v-menu>
            <template #activator="{props}">
              <v-avatar v-bind="props">
                <v-img cover src="https://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
              </v-avatar>
            </template>
  
            <v-card min-width="200px">
              <v-list :lines="false" density="compact" nav>
                <v-list-item to="/favorites" prepend-icon="mdi-heart-outline">
                  <v-list-item-title>Favorites</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
                  <v-list-item-title>Settings</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/" prepend-icon="mdi-account-outline">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
          
        </template>
      </v-app-bar>
    <v-app theme="dark">

  
      <v-main>
      <v-container>
        <h1 class="hidden-md-only text-h5 text-lg-h3 text-black px-4 py-2 mb-2">Dashboard</h1>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/5b/bc/32/5bbc3213195438ef9d35fca126aaf02c.jpg" cover>
                <v-card-title>Krankenhaus</v-card-title>
              </v-img>
              <v-card-text>
                <div>hôpital</div>
                <div>Omae wa mu shindeiru! Naniiiiiiiiiiiiiiiiiiii!!!!</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">Like</v-btn>
                <v-btn prepend-icon="mdi-thumb-down" color="error" variant="tonal">Dislike</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/5b/bc/32/5bbc3213195438ef9d35fca126aaf02c.jpg" cover>
                <v-card-title>Krankenhaus</v-card-title>
              </v-img>
              <v-card-text>
                <div>hôpital</div>
                <div>Omae wa mu shindeiru! Naniiiiiiiiiiiiiiiiiiii!!!!</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">Like</v-btn>
                <v-btn prepend-icon="mdi-thumb-down" color="error" variant="tonal">Dislike</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/5b/bc/32/5bbc3213195438ef9d35fca126aaf02c.jpg" cover>
                <v-card-title>Krankenhaus</v-card-title>
              </v-img>
              <v-card-text>
                <div>hôpital</div>
                <div>Omae wa mu shindeiru! Naniiiiiiiiiiiiiiiiiiii!!!!</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">Like</v-btn>
                <v-btn prepend-icon="mdi-thumb-down" color="error" variant="tonal">Dislike</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/5b/bc/32/5bbc3213195438ef9d35fca126aaf02c.jpg" cover>
                <v-card-title>Krankenhaus</v-card-title>
              </v-img>
              <v-card-text>
                <div>hôpital</div>
                <div>Omae wa mu shindeiru! Naniiiiiiiiiiiiiiiiiiii!!!!</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">Like</v-btn>
                <v-btn prepend-icon="mdi-thumb-down" color="error" variant="tonal">Dislike</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  
        <v-card class="border mt-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Table</v-card-title>
  
            <v-card-title>
              <v-dialog width="1024" v-model=dialog>
                <template #activator="{ props }">
                  <v-btn v-bind="props" variant="tonal" size="small">Add User</v-btn>
                </template>
  
                <v-card>
                  <v-card-title>
                    <span class="text-h5">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Legal first name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests" multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
  
                  <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn
                      color="blue-darken-1" variant="text" @click="dialog = false">
                      Save
                    </v-btn>
                </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>
          
          <v-table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!--<tr v-for="user in users">-->
              <tr>
                <td>Zaha</td>
                <td>Sanko</td>
                <td>zahasanko@gmail.com</td>
                <td>14</td>
                <td>
                  <v-btn variant="elevated" color="teal-darken-4" class="mr-2" >Edit</v-btn>
                  <v-btn variant="elevated" color="red-accent-4" >Delete</v-btn>
                </td>
              </tr>
              <tr>
                <td>Shimada</td>
                <td>Death</td>
                <td>shimada@gmail.com</td>
                <td>Unknown</td>
                <td>
                  <v-btn variant="elevated" color="teal-darken-4" class="mr-2" >Edit</v-btn>
                  <v-btn variant="elevated" color="red-accent-4" >Delete</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
  </v-container>
  </template>
    
  <script>
  export default {
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
    }),
  }
  </script>