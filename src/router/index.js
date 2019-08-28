import Vue from 'vue'
import Router from 'vue-router'
import mains from './main'
import members from './member'

const routers = []
const routerExcute = (router) => {
  for (let i = 0; router.length > i; i += 1) {
    routers.push(router[i])
  }
}

routerExcute(mains);
routerExcute(members);

Vue.use(Router);

// const authCheck = () => (from , to , next) => {
//   console.log(123123123123123);
//   const isAuthCheck = false;
//   if(isAuthCheck){
//     return next()
//   }
//   next('/login?returnPath=test')
// }

export default new Router({
  mode: 'history',
  routes: routers,
})
