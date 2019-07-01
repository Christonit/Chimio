import MySecrets from './components/my-secrets.vue';
import HotSecrets from './components/hot-secrets.vue';
import Favorites from './components/favorites.vue';

const routes =[
  {path:'/', name:'hot', component: HotSecrets,props:true},
  {path:'/my-secrets',name:'my-secrets', component: MySecrets},
  {path:'/favorites',name:'favorites', component: Favorites}
];

export default routes;
// export default new VueRouter(routes);
