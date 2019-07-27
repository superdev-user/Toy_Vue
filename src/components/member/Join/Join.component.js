export default {
  name: 'join',
  components: {},
  props: [
 
  ],
  data () {
    return {
      error : [null,null,null],
      user_id : null,
      user_pw1 : null,
      user_pw2 : null,
    }
  },
  computed: {
 
  },
  mounted () {
 
  },
  watch: {
    user_id() {
      if (this.checkSpace(this.user_id) || this.checkSpecial(this.user_id)) {
        this.error[0] = true;
      } else {
        this.error[0] = false;
      }
    },
    user_pw1() {
      if (this.checkPasswordPattern(this.user_pw1)) {
        this.error[1] = true;
      } else {
        this.error[1] = false;
      }
    },
    user_pw2() {
      if(this.user_pw1 !== this.user_pw2) {
        this.error[2] = true;
      } else {
        this.error[2] = false;
      }
    }
  },
  methods: {
    /* 빈공간 체크 */
    checkSpace(str){
      if(str.search(/\s/) != -1) {
        return true;
      } else {
        return false;
      }
    },
    /* 특수기호 체크 */
    checkSpecial(str) {
      let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
 
      if(special_pattern.test(str) == true) {
        return true;
      } else {
        return false;
      }
    },
    /* 패스워드 체크 숫자, 문자, 특수문자. 8자 이상 */
    checkPasswordPattern(str) {
      let pattern1 = /[0-9]/;
      let pattern2 = /[a-zA-Z]/;
      let pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
      if(!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str) || str.length < 8) {
        return true;
      } else {
        return false;
      }
    },
    onSubmit () {
      const validate = () => {
        let errorValue = null;
        this.error.forEach((v) => {
          if(v === true || v === null) return errorValue = true;
        });
 
        if (errorValue) {
          return false;
        } else {
          return true;
        }
      };
    
      if (validate()) {
          this.$http.post('/api/user/', {  
              id : this.user_id,
              password : this.user_pw1
          }).then((response) => {
              alert('회원가입을 축하드립니다.');
              this.$router.push('/')
          }).catch((err) => {
              alert('실패');
          })
      } else {  
          alert("일치하지않습니다.");
      }
    }
  }
}