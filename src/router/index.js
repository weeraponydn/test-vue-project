import { createRouter, createWebHistory } from 'vue-router'
import ItemLists from '../views/ItemLists.vue'
import CreateItem from '../views/CreateItem.vue'
import EditItem from '../views/EditItem.vue'

const routes = [
  {
    path: '/',
    name: 'ItemLists',
    component: ItemLists
  },
  {
    path: '/create',
    name: 'CreateItem',
    component: CreateItem
  },
  {
    path: '/edit/:item_id',
    name: 'EditItem',
    component: EditItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
