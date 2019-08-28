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
      console.log(`${this.userId}+ ${this.userPw}`);
      this.$store.dispatch("LOGIN" , {userId : this.userId , userPw:this.userPw}).then(() => {
        console.log("success")
      })
    }
  }
}
