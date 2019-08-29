import Member from '@/components/member/Join'
import Login from '@/components/member/Login'


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
]
