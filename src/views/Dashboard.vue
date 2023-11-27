<template>
  <div>
    <NavBar />
    <Content />
  </div>

</template>
  
<script>
import NavBar from '@/components/User/NavBar.vue';
import Content from '@/components/User/Content.vue';
export default {
  name: 'Dashboard',
      components: {
        NavBar,
        Content,
      },
  data: () => ({
    isDrawerOpen: false,
    dialog: false,
  }),
}
</script>
