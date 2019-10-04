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
      category1: [
        {
          label: 'history',
          id: '1',
          parent_id: '',
        } ,
        {
          label: 'todo',
          id: '2',
          parent_id: '',
        }
      ],
      category2: [
        {
          label: '첫번째 스터디',
          id: '1',
          parent_id: '1',
        } ,
        {
          label: '두번째 스터디',
          id: '2',
          parent_id: '1',
        },
        {
          label: '세번째 스터디',
          id: '3',
          parent_id: '1',
        } ,
        {
          label: '네번째 스터디',
          id: '4',
          parent_id: '1',
        },
        {
          label: '첫번째 고려사항',
          id: '5',
          parent_id: '2',
        } ,
        {
          label: '두번째 해야할 일',
          id: '6',
          parent_id: '2',
        }
      ],
      category3: [
        {
          label: '주제 선정',
          id: '1',
          parent_id: '1',
        } ,
        {
          label: '서비스 구조',
          id: '2',
          parent_id: '1',
        },
        {
          label: '환경',
          id: '3',
          parent_id: '3',
        } ,
        {
          label: '알고리즘',
          id: '4',
          parent_id: '4',
        },
        {
          label: 'test',
          id: '5',
          parent_id: '5',
        } ,
        {
          label: 'test coverage',
          id: '6',
          parent_id: '6',
        }
      ],
      selectedGrandParent: -1,
      selectedParent: -1,
      selectedChild: -1,
    }
  },
  computed: {
    getGrandParent() {
      return this.category1
    },
    getParent() {
      let returnVal = this.category2.filter(parent => parent.parent_id == this.selectedGrandParent)
      return returnVal
    },
    getChild() {
      let returnVal = this.category3.filter(child => child.parent_id == this.selectedParent)
      return returnVal
    },
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
