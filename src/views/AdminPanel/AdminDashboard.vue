<template>
  <div>
    <Admin_NavBar />
    <Content />
    <Chart />
  </div>
</template>
    
  <script>
  import Admin_NavBar from '@/components/Admin/Admin_NavBar.vue'
  import Content from '@/components/Admin/Content.vue'
  import Chart from '@/components/Admin/Chart.vue'
  export default {
    name: 'AdminDashboard',
    components: {
      Admin_NavBar,
      Content,
      Chart,
    },
    data: () => ({
      isDrawerOpen: true,
      dialog: false,
    }),
  }
  </script>