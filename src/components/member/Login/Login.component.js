export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {
      userId: null,
      userPw: null,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onLoginSubmit () {
      console.log(`${this.userId},  ${this.userPw}`);
      this.$store.dispatch("LOGIN" , {userId:this.userId , userPw:this.userPw}).then(({data:{statusCode}}) => {

        if (statusCode === 200){
          this.$router.push('/');
        }else {
          alert ("아이디 또는 비밀번호가 틀렸습니다.")
        }
      })
    }
  }
}
