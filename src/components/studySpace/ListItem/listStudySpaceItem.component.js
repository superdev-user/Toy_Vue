export default {
  name: 'listStudySpaceItem',
  components: {

  },
  props: ["data"],
  data () {
    return {};
  },
  created(){

  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // detail 이벤트.
    detail() {
      this.$router.push('/studySpace/' + this.data.studyRoomId);
    }
  }
}
