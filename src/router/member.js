import Member from '@/components/member/Join'
import Login from '@/components/member/Login'
import Logout from '@/components/member/Logout'

export default [
  {
    path: '/member/join',
    name: 'join',
    component: Member
  },
  {
    path: '/member/login',
    name: 'login',
    component: Login
  },
  {
    path: '/member/logout',
    name: 'logout',
    component: Logout
  }
]