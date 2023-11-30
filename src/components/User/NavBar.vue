<template>
  <!--
  <v-app-bar app class="border-b" color="blue-grey-darken-4" scroll-behavior="elevate">
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
          <v-list-item to="/profile" prepend-icon="mdi-heart-outline">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
            <v-list-item-title>Change Password</v-list-item-title>
          </v-list-item>

          <v-list-item to="/" prepend-icon="mdi-account-outline">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </template>
  </v-app-bar>
  -->
  <nav>
    
    <v-toolbar app color="teal" scroll-behavior="inverted">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Medi</span>
        <span>Cord</span>
      </v-toolbar-title>

      <template #append>
        <!-- <v-btn icon class="mr-2">
          <v-badge dot color="error">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
        </v-btn> -->
        
        
        <v-menu>
          <template #activator="{props}">
            <span class="font-weight-light pa-2">User</span>
            <v-avatar v-bind="props">
              <v-img cover src="https://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item to="/dashboard/profile" prepend-icon="mdi-heart-outline">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>

              <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
                <v-list-item-title>Change Password</v-list-item-title>
              </v-list-item>

              <v-list-item to="/" prepend-icon="mdi-account-outline">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-toolbar>

    <v-navigation-drawer v-model="isDrawerOpen" color="teal">
      <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
              cover>
            <div class="text-center mt-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                </v-avatar>
                <h2 class="text-yellow-lighten-5">User Panel</h2>
            </div>
        </v-img>

        <v-list>
            <v-list-item v-for="(link, l) in links" :key="l" :value="link" router :to="link.route">
              <template v-slot:prepend>
                <v-icon :icon="link.icon"></v-icon>
              </template>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        isDrawerOpen: true,
        links: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { text: 'Appointment', icon: 'mdi-calendar', route: '/dashboard/appointment' },
        { text: 'Records', icon: 'mdi-folder', route: '/dashboard/records' },
      ],
    }),
}
</script>