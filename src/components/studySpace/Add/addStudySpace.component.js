import Validator from '@/utils/Validator';

export default {
  name: 'addStudySpace',
  components: {},

  data() {

    return {
      title : '',
      description : '',
    }
  },
  computed: {},
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let {userId: writer} = JSON.parse(localStorage.userAccessToken);
      //
      let titleCheck = Validator.isSet(this.title);
      let descriptionCheck = Validator.isSet(this.description);
      let writerCheck = Validator.isSet(this.writer);

      if(writerCheck){
        // 작성자가 없거나 비었다는
      }else if(titleCheck && descriptionCheck){
        this.$store.dispatch("ADD_STUDY_SPACE" , {
          title : this.title , description : this.description , masterId : writer
        }).then(({data:{code} })=> {

          if (code === 20000) alert("스터디가 등록되었습니다.");

        }).catch(err => {
          console.log(err)
        })
      }else {

      }


    },

    reset(e) {
      e.preventDefault()
      if(confirm("지금까지 작성한 내용이 모두 사라집니다.")){
        this.title = '';
        this.description = '';
      }
    }
  },
}
