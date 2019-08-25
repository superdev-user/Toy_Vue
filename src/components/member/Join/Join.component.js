import JoinMsg from '../../../utils/JoinMsg'
import JoinRegex from '../../../utils/JoinRegex'
import Validator from '../../../utils/Validator';
import axios from 'axios';

const STATE_CODE = {
  SUCCESS : 0,
  REQUIRED : 1,
  NOT_VALID : 2,
};

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
      JoinMsg,
      STATE_CODE,
    }
  },
  computed: {

  },
  mounted () {

  },
  watch: {
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.idCheck(0);
      this.passCheck(1);
      this.passConfirmCheck(2);
      this.nameCheck(3);
      let flag = this.msgOption.filter(v => v == 0).length == 4;

      if (flag) {

        const {userId, userPw: userPwd, userNm} = this;
        //todo backend 전송 .
        axios.post(`http://localhost:9000/user/signup`, {
          headers: {
            'Content-type': 'application/json',
          },
          userId, userNm, userPwd
        }).then(result => {
          if (result.status == 200) {
            alert("회원가입이 되었습니다.")
            this.$router.push('/member/login')
          } else {
            alert("실패.")
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },

    idCheck (target) {
      let msg = 0;
      if (!Validator.isSet(this.userId)){
        msg = 1;
      }else if(!JoinRegex.isValidId(this.userId)){
        msg =  2;
      }

      this.$set(this.msgOption,target , msg)
    },

    passCheck (target){
      let msg = 0;
      if (!Validator.isSet(this.userPw)){
        msg =  1;
      }else if(!JoinRegex.isValidPassword(this.userPw)){
        msg = 2;
      }
      this.$set(this.msgOption,target , msg)
    },

    passConfirmCheck (target) {
      let msg = 0;
      if (!Validator.isSet(this.userPwConfirm)){
        msg =  1;
      }else if(!JoinRegex.isValidPasswordConfirm(this.userPw,this.userPwConfirm)){
        msg = 2;
      }
      this.$set(this.msgOption,target , msg)
    },

    nameCheck (target) {
      let msg = 0;
      if (!Validator.isSet(this.userNm)){
        msg =  1;
      }
      this.$set(this.msgOption,target , msg)
    },

    onBlur(target) {
      switch (target) {
        case 0 :
          this.idCheck(target);
          break;

        case 1 :
          this.passCheck(target);
          break;

        case 2 :
          this.passConfirmCheck(target);
          break;

        case 3 :
          this.nameCheck(target);
          break;
      }
    },

    onReset(e) {
      e.preventDefault()
      alert(123)
    }
  }
}
