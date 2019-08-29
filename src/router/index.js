import Vue from 'vue'
import Router from 'vue-router'
import mains from './main'
import members from './member'
import studySpace from './studySpace'

const routers = []
const routerExcute = (router) => {
  for (let i = 0; router.length > i; i += 1) {
    routers.push(router[i])
  }
}

routerExcute(mains);
routerExcute(members);
routerExcute(studySpace);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: routers,
})
