<template>
    <div>  
        <v-container>
          <v-row>
            <v-col class="hidden-md-only text-sm-h5 text-lg-h4">
              <p>Appointment Schedules</p>
            </v-col>
            <v-col class="text-right">
              <Dialog />
            </v-col>
          </v-row>
        </v-container>
  
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-date-picker elevation="24" width="100%" color="teal-accent-4"></v-date-picker>
              </v-col>
            </v-row>
          </v-container>
        
          <!--
          <v-container>
            <v-card class="pa-3 ma-2" v-for="project in projects" :key="project.title">
              <v-row :class="`project ${project.status}`">
                <v-col cols="6">
                  <div class="text-caption">Project Title</div>
                  <div>{{ project.title }}</div>
                </v-col>
                <v-col cols="2">
                  <div class="text-caption">Person</div>
                  <div>{{ project.person }}</div>
                </v-col>
                <v-col cols="2">
                  <div class="text-caption">Due by</div>
                  <div>{{ project.due }}</div>
                </v-col>
                <v-col cols="2">
                  <div class="text-right">
                    <v-chip size="small" :class="`${project.status}`">{{ project.status }}</v-chip>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        --> 
    </div>
  </template>
    
  <script>
  import Dialog from '@/components/User/Dialog.vue'
  export default {
    name: 'Content',
    components: {
      Dialog,
    },
    data: () => ({
      isDrawerOpen: false,
      dialog: false,
      projects: [
        { title: 'Design a new website', person: 'Net Ninja', due: 'January', status: 'Completed', content: 'lorem iefwifweoifewhfiofhweiofwehfweiofh' },
        { title: 'Design a new website', person: 'Net Ninja', due: 'January', status: 'Pending', content: 'lorem iefwifweoifewhfiofhweiofwehfweiofh' },
        { title: 'Design a new website', person: 'Net Ninja', due: 'January', status: 'Cancelled', content: 'lorem iefwifweoifewhfiofhweiofwehfweiofh' },
        { title: 'Design a new website', person: 'Net Ninja', due: 'January', status: 'Completed', content: 'lorem iefwifweoifewhfiofhweiofwehfweiofh' },
      ]
    }),
  }
  </script>
<style>
.project.Completed {
  border-left: 4px solid cyan;
}
.project.Pending {
  border-left: 4px solid orange;
}
.project.Cancelled {
  border-left: 4px solid tomato;
}
.v-chip.Completed {
  background: cyan;
  color: antiquewhite;
}
.v-chip.Pending {
  background: orange;
  color: antiquewhite;
}
.v-chip.Cancelled {
  background: tomato;
  color: antiquewhite;
}
</style>
  