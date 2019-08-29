import {mapState} from 'vuex'
export default {
  name: 'snb',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  beforeCreate: function () {
      // console.log(this.$session.has('jwt'));
  },

  computed: {
    ...mapState(['userAccessToken' , 'isLogin'])
  },
  mounted () {

  },
  methods: {
    onLogoutEvent() {
      this.$store.dispatch('LOGOUT').then(() => {this.$router.push('/')})
    }
  }
}
