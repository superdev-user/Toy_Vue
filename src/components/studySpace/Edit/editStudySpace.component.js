import { mapGetters } from 'vuex';
import Validator from '@/utils/Validator';

export default {
  name: 'EditStudySpace',
  components: {},

  data() {

    if(!localStorage.userAccessToken){
      this.$router.push('/');
    }

    return {
      title : '',
      description : '',
      masterId : '',
      loginUserId : localStorage.loginUserId,
      selectedGrandParent: '',
      selectedParent: '',
      selectedChild: ''
    }
  },
  created(){
    this.init()
  },
  computed: {
    getParent() {
      let returnVal = this.parent.filter(item => item.parent_id == this.selectedGrandParent)
      return returnVal
    },
    getChild() {
      let returnVal = this.child.filter(item => item.parent_id == this.selectedParent)
      return returnVal
    },
    ...mapGetters({
      grandParent: 'getGrandParent',
      parent: 'getParent',
      child: 'getChild',
    })
  },
  methods: {
    init() {
      this.title = this.$route.params.title;
      this.description = this.$route.params.description;
      this.selectedGrandParent = this.$route.params.category1;
      this.selectedParent = this.$route.params.category2;
      this.selectedChild = this.$route.params.category3;
    },
    onSubmit(e) {
      e.preventDefault();

      let {userId: writer} = JSON.parse(localStorage.userAccessToken);

      let titleCheck = Validator.isSet(this.title);
      let descriptionCheck = Validator.isSet(this.description);
      let writerCheck = Validator.isSet(this.writer);

      let categoryCheck= Validator.isSet(this.selectedGrandParent);

      if(writerCheck){
        // 작성자가 없거나 비었다는
      } else if(titleCheck && descriptionCheck && categoryCheck){
        this.$store.dispatch("EDIT_STUDY_SPACE" , {
          studySpaceId: this.$route.params.studyRoomId,
          title : this.title,
          description : this.description,
          category1:  this.selectedGrandParent,
          category2: this.selectedParent,
          category3: this.selectedChild,
        }).then(({data:{code} })=> {

          if (code === 20000){
            alert("스터디가 수정되었습니다.")
            this.$router.push('/studySpace/' + this.$route.params.studyRoomId);
          };

        }).catch(err => {
          console.log(err)
        })
      }else {

      }


    },
  },
}
