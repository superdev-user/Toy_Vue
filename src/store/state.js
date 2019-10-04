import db from '@/store/db'

const state = {
    userAccessToken : undefined,
    isLogin : !!localStorage.userAccessToken,
    category1: db.category1,
    category2: db.category2,
    category3: db.category3,
}

export default state
