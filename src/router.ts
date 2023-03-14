import VueRouter from 'vue-router'
import { VpNameInfoRoute } from '@/components/routes/NameInfo'
import { VpSpecificNameInfoRoute } from '@/components/routes/SpecificNameInfo'
import { VpAboutRoute } from '@/components/routes/About'

export const routes = [
  { path: '/', component: VpNameInfoRoute },
  { path: '/names/:name', component: VpSpecificNameInfoRoute },
  { path: '/about', component: VpAboutRoute },
]

export const router = new VueRouter({
  routes,
})
