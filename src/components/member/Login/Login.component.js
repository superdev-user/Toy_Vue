export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {
      user_id: null,
      user_pw: null,
    }
  },
  computed: {
 
  },
  mounted () {
 
  },
  methods: {
    userInfoCheck () {
      this.$http.post(`/api/user/login`, {
            user_id : this.user_id,
            user_pw : this.user_pw
        }).then((response) => {
            if (response.status === 200) {
                alert('정상적으로 로그인하였습니다.');
                this.$session.start()
                this.$session.set('userInfo', response.data.user);
                this.$session.set('jwt', response.data.token);
                this.$router.push('/board/list');
            }
        }).catch((err) => {
            alert('아이디 또는 패스워드가 틀렸습니다.');
            console.log(err);
        });
    }
  }
}