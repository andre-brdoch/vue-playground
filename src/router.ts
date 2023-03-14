import VueRouter from 'vue-router'
import { VpNameInfoPage } from '@/components/pages/NameInfo'
import { VpSpecificNameInfoPage } from '@/components/pages/SpecificNameInfo'
import { VpAboutPage } from '@/components/pages/About'

export const routes = [
  { path: '/', component: VpNameInfoPage },
  { path: '/names/:name', component: VpSpecificNameInfoPage },
  { path: '/about', component: VpAboutPage },
]

export const router = new VueRouter({
  routes,
})
