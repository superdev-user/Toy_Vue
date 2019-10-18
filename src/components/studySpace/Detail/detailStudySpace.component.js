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
      category1 : '',
      category2 : '',
      category3 : '',
      masterId : '',
      requests : '',
      loginUserId : localStorage.loginUserId
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
          this.category1 = data.category1;
          this.category2 = data.category2;
          this.category3 = data.category3;
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
      }).then(({status})=> {
        if (status == 200) {
          alert("스터디 신청 되었습니다.");
          this.getStudySpaceDetail();
        }
      }).catch(err => {
        console.log(err)
      })

    },
    studyRequestCancel(e) {
      e.preventDefault()

      this.$store.dispatch("REQUEST_CANCLE_STUDY_SPACE" , {
        studySpaceId: this.$route.params.studyRoomId
      }).then(({status})=> {
        if (status == 200) {
          alert("스터디 신청 취소 되었습니다.");
          this.getStudySpaceDetail();
        }

      }).catch(err => {
        console.log(err)
      })

    },
    studyApprove(e, userId) {

      e.preventDefault()

      this.$store.dispatch("REQUEST_APPROVE_STUDY_SPACE" , {
        studySpaceId: this.$route.params.studyRoomId,
        attendantNm : userId
      }).then(({status})=> {
        if (status == 200) {
          alert("스터디 가입승인 되었습니다.");
          this.getStudySpaceDetail();
        }

      }).catch(err => {
        console.log(err)
      })

    },
    studyApproveCancel(e, userId) {
      e.preventDefault()

      this.$store.dispatch("REQUEST_APPROVE_CANCLE_STUDY_SPACE" , {
        studySpaceId: this.$route.params.studyRoomId,
        attendantNm : userId
      }).then(({status})=> {
        if (status == 200) {
          alert("스터디 가입승인 취소 되었습니다.");
          this.getStudySpaceDetail();
        }

      }).catch(err => {
        console.log(err)
      })

    },
    moveEditPage(e) {
      e.preventDefault()

      //기존 게시물 정보 객체 세팅
      var studySpaceInfo = {};
      studySpaceInfo.title = this.$data.title;
      studySpaceInfo.description = this.$data.description;
      studySpaceInfo.category1 = this.$data.category1;
      studySpaceInfo.category2 = this.$data.category2;
      studySpaceInfo.category3 = this.$data.category3;

      this.$router.push({ name: 'editStudySpace', params : studySpaceInfo });
    },



  }
}
