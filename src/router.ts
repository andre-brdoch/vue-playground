import VueRouter from 'vue-router'
import { VpNameInfoRoute } from '@/components/routes/NameInfo'
import { VpSpecificNameInfoRoute } from '@/components/routes/SpecificNameInfo'
import { VpAboutRoute } from '@/components/routes/About'
import { Vp404Route } from '@/components/routes/404'

export const routes = [
  { path: '/', component: VpNameInfoRoute },
  { path: '/names/:name', component: VpSpecificNameInfoRoute },
  { path: '/about', component: VpAboutRoute },
  { path: '/404', component: Vp404Route },
  { path: '/*', component: Vp404Route },
]

export const router = new VueRouter({
  mode: 'history',
  routes,
})
