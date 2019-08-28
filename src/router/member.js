import Member from '@/components/member/Join'
import Login from '@/components/member/Login'
import Logout from '@/components/member/Logout'

const authCheck = () => (from, to, next) => {
  console.log(123123123123123);
  const isAuthCheck = false;
  if (isAuthCheck) {
    return next()
  }
  next('/login?returnPath=test')
}

export default [
  {
    path: '/member/join',
    name: 'join',
    component: Member,
  },
  {
    path: '/member/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/member/logout',
    name: 'logout',
    component: Logout,
  }
]
