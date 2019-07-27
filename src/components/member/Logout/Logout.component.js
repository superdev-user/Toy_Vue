export default {
  name: 'logout',
  components: {}, 
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  beforeCreate: function(){
    this.$session.destroy();
    this.$router.push('/member/login');
  },
  mounted () {

  },
  methods: {

  }
}
