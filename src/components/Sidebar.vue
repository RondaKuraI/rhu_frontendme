<template>
    <v-navigation-drawer v-model="drawer" app color="teal-accent-4">
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
</template>

<script>
export default {
    data: () => ({
        selectedItem: 3,
        drawer: null,
        links: [
          ['mdi-view-dashboard', 'Dashboard'],
          ['mdi-calendar-multiselect', 'Appointment'],
          ['mdi-folder', 'Records'],
        ],
    })
}
</script>

<style>

</style>