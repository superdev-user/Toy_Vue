import { mapGetters } from 'vuex';
import Validator from '@/utils/Validator';

export default {
  name: 'addStudySpace',
  components: {},

  data() {

    if(!localStorage.userAccessToken){
      this.$router.push('/');
    }

    return {
      title : '',
      description : '',
      selectedGrandParent: -1,
      selectedParent: -1,
      selectedChild: -1,
    }
  },
  computed: {
    getParent() {
      let returnVal = this.parent.filter(item => item.parent_id == this.selectedGrandParent)
      return returnVal
    },
    getChild() {
      let returnVal = this.child.filter(item => item.parent_id == this.selectedGrandParent)
      return returnVal
    },
    ...mapGetters({
      grandParent: 'getGrandParent',
      parent: 'getParent',
      child: 'getChild',
    })
  },
  methods: {
    loadData:function() {
      this.items = [];
      let key = 'name';
      if(this.selectedOption === 'films') key = 'title';

      fetch('https://swapi.co/api/'+this.selectedOption)
          .then(res=>res.json())
          .then(res => {
            // "fix" the data to set a label for all types
            this.items = res.results.map((item) =>{
              item.label = item[key];
              return item;
            });

          });
    },
    onSubmit(e) {
      e.preventDefault();
      let {userId: writer} = JSON.parse(localStorage.userAccessToken);

      let titleCheck = Validator.isSet(this.title);
      let descriptionCheck = Validator.isSet(this.description);
      let writerCheck = Validator.isSet(this.writer);

      if(writerCheck){
        // 작성자가 없거나 비었다는
      }else if(titleCheck && descriptionCheck){
        this.$store.dispatch("ADD_STUDY_SPACE" , {
          title : this.title , description : this.description , masterId : writer
        }).then(({data:{code} })=> {

          if (code === 20000){
            alert("스터디가 등록되었습니다.")
            this.$router.push('/studySpaceList');
          };

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
