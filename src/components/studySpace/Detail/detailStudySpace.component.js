export default {
  name: 'detailStudySpace',
  components: {},

  data() {

    if(!localStorage.userAccessToken){
      this.$router.push('/');
    }

    return {
      title : '',
      description : '',
      masterId: '',
      requests: ''
    }
  },
  created(){
    this.getStudySpaceDetail()
  },
  computed: {
  },
  methods: {
    getStudySpaceDetail() {
      this.$store.dispatch("DETAIL_STUDY_SPACE", {
        studySpaceId: this.$route.params.studyRoomId
      }).then(({data: {code, data}}) => {
        if (code === 20000) {
          this.title = data.title;
          this.description = data.description;
          this.masterId = data.masterId;
          this.requests = data.requests;
        }
      }).catch(err => {
        console.log(err)
      })
    },
    studyRequest(e) {
      e.preventDefault()

      this.$store.dispatch("REQUEST_STUDY_SPACE" , {
        studySpaceId: this.$route.params.studyRoomId
      }).then(({data:{code} })=> {

        if (code === 20000){
          alert("스터디 신청 되었습니다.")
        }

      }).catch(err => {
        console.log(err)
      })

    },
    studyRequestCancel(e) {
      e.preventDefault()

      this.$store.dispatch("REQUEST_CANCLE_STUDY_SPACE" , {
        studySpaceId: this.$route.params.studyRoomId
      }).then(({data:{code} })=> {

        if (code === 20000){
          alert("스터디 신청 취소 되었습니다.")
          this.$router.push('/studySpaceList');
        }

      }).catch(err => {
        console.log(err)
      })

    }
  }
}
