import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Dashboard from '../views/Dashboard.vue'
import Appointment from '../views/UserPanel/Appointment.vue'

import StaffDashboard from '../views/StaffPanel/StaffDashboard.vue'
import StaffAppointment from '../views/StaffPanel/StaffAppointment.vue'
import StaffPatient from '../views/StaffPanel/StaffPatient.vue'
import StaffService from '../views/StaffPanel/StaffService.vue'

import AdminDashboard from '../views/AdminPanel/AdminDashboard.vue'
import AdminAppointment from '../views/AdminPanel/AdminAppointment.vue'
import AdminPatient from '../views/AdminPanel/AdminPatient.vue'
import AdminService from '../views/AdminPanel/AdminService.vue'

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
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/appointment',
    name: 'appointment',
    component: Appointment
  },
  {
    path: '/staff-dashboard',
    name: 'staff dashboard',
    component: StaffDashboard
  },
  {
    path: '/staff-dashboard/appointment',
    name: 'staff appointment',
    component: StaffAppointment
  },
  {
    path: '/staff-dashboard/patient',
    name: 'staff patient',
    component: StaffPatient
  },
  {
    path: '/staff-dashboard/service',
    name: 'staff service',
    component: StaffService
  },
  {
    path: '/admin-dashboard',
    name: 'admin dashboard',
    component: AdminDashboard
  },
  {
    path: '/admin-dashboard/appointment',
    name: 'admin appointment',
    component: AdminAppointment
  },
  {
    path: '/admin-dashboard/patient',
    name: 'admin patient',
    component: AdminPatient
  },
  {
    path: '/admin-dashboard/service',
    name: 'admin service',
    component: AdminService
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
