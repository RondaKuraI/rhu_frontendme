import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Dashboard from '../views/Dashboard.vue'
import Appointment from '../views/UserPanel/Appointment.vue'
import Records from '../views/UserPanel/Records.vue'
import Profile from '../views/UserPanel/Profile.vue'

import StaffDashboard from '../views/StaffPanel/StaffDashboard.vue'
import StaffAppointment from '../views/StaffPanel/StaffAppointment.vue'
import StaffPatient from '../views/StaffPanel/StaffPatient.vue'
import StaffService from '../views/StaffPanel/StaffService.vue'
import Pending_Appointments from '../views/StaffPanel/Pending_Appointments.vue'
import Cancel_Message from '../views/StaffPanel/Cancel_Message.vue'
import Add_Appointment from '../views/StaffPanel/Add_Appointment.vue'

import AdminDashboard from '../views/AdminPanel/AdminDashboard.vue'
import AdminAppointment from '../views/AdminPanel/AdminAppointment.vue'
import AdminPatient from '../views/AdminPanel/AdminPatient.vue'
import Doctors from '../views/AdminPanel/Doctors.vue'
import Patients from '../views/AdminPanel/Patients.vue'
import Barangays from '../views/AdminPanel/Barangays.vue'
import Staffs from '../views/AdminPanel/Staffs.vue'
import Settings from '../views/AdminPanel/Settings.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/',
    name: 'login',
    component: LoginView
  },
  { path: '/register',
    name: 'register',
    component: RegisterView 
  },
  { path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { path: '/dashboard/appointment',
    name: 'appointment',
    component: Appointment 
  },
  { path: '/dashboard/records',
    name: 'records',
    component: Records 
  },
  { path: '/dashboard/profile',
    name: 'profile',
    component: Profile 
  },
  {path: '/staff-dashboard',
    name: 'staff dashboard',
    component: StaffDashboard 
  },
  { path: '/staff-dashboard/appointment',
    name: 'staff appointment',
    component: StaffAppointment 
  },
  { path: '/staff-dashboard/patient',
    name: 'staff patient',
    component: StaffPatient 
  },
  { path: '/staff-dashboard/service',
    name: 'staff service',
    component: StaffService 
  },
  { path: '/staff-dashboard/pending_appointments',
    name: 'pending_appointments',
    component: Pending_Appointments
  },
  { path: '/staff-dashboard/cancel_message',
    name: 'Cancel_Message',
    component: Cancel_Message
  },
  { path: '/staff-dashboard/add_appointment',
    name: 'Add_Appointment',
    component: Add_Appointment
  },
  { path: '/admin-dashboard',
    name: 'admin dashboard',
    component: AdminDashboard 
  },
  { path: '/admin-dashboard/patient',
    name: 'admin dashboard patients',
    component: Patients 
  },
  { path: '/admin-dashboard/appointment',
    name: 'admin appointment',
    component: AdminAppointment 
  },
  { path: '/admin-dashboard/barangay',
    name: 'admin dashboard barangays',
    component: Barangays 
  },
  { path: '/admin-dashboard/patient',
    name: 'admin patient',
    component: AdminPatient 
  },
  { path: '/admin-dashboard/staff',
    name: 'admin staffs',
    component: Staffs 
  },
  { path: '/admin-dashboard/setting',
    name: 'admin settings',
    component: Settings 
  },
  { path: '/admin-dashboard/doctor',
    name: 'admin doctor',
    component: Doctors 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedin = checkUserLogin();
  if(to.matched.some((record)  => record.meta.requiresAuth)){
    if(!isLoggedin){
      next("/");
    }else{
      next();
    }
  }else{
    next();
  }
});

function checkUserLogin(){
  const userToken = sessionStorage.getItem("token");
  return !!userToken;
}
export default router
