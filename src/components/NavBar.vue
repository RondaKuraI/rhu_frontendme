<template>
    <v-app-bar app color="teal-accent-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Hello, User</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-heart"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        drawer: null
    }),
}
</script>

<style>

</style>