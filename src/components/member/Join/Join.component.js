import JoinMsg from '../../../utils/JoinMsg'
import JoinRegex from '../../../utils/JoinRegex'
import Validator from '../../../utils/Validator';

export default {

  name: 'join',
  components: {},
  props: [

  ],
  data () {
    return {
      userId : '',
      userPw : '',
      userPwConfirm:'',
      userNm : '',
      msgOption : [-1 , -1 , -1 , -1],
      JoinMsg
    }
  },
  computed: {

  },
  mounted () {

  },
  watch: {
  },
  methods: {
    onSubmit(e){
      e.preventDefault();

    },

    onBlur(target) {
      let msg = 0;

      switch (target) {
        case 0 :
          if (!Validator.isSet(this.userId)){
            msg =  1;
          }else if(!JoinRegex.isValidId(this.userId)){
            msg = 2;
          }else {

          }
          this.$set(this.msgOption,target , msg)
          break;


        case 1 :
          if (!Validator.isSet(this.userPw)){
            msg =  1;
          }else if(!JoinRegex.isValidPassword(this.userPw)){
            msg = 2;
          }
          this.$set(this.msgOption,target , msg)
          break;

        case 2 :
          if (!Validator.isSet(this.userPwConfirm)){
            msg =  1;
          }else if(!JoinRegex.isValidPasswordConfirm(this.userPw,this.userPwConfirm)){
            msg = 2;
          }
          this.$set(this.msgOption,target , msg)
          break;

        case 3 :
          if (!Validator.isSet(this.userNm)){
            msg =  1;
          }
          this.$set(this.msgOption,target , msg)
          break;
      }
    }
  }
}
