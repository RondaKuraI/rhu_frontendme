<template>
  <div>
    <Staff_NavBar />
    <Staff_Content />
  </div>
</template>

<script>
import Staff_NavBar from '@/components/Staff/Staff_NavBar.vue'
import Staff_Content from '@/components/Staff/Staff_Content.vue'
  export default {
    name: 'StaffDashboard',
    components: {
      Staff_NavBar,
      Staff_Content,
    }
  }
</script>

<style>

</style>