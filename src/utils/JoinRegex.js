import Validator from './Validator'

class JoinRegex {

  /**
   * @description id 검증 Regex
   *
   * @param {String} id 값
   *
   * @return {Boolean} 검증 관련 true or false
   * */
  static isValidId(value){
    let idReg = /^[a-zA-Z][a-zA-Z0-9\_]{5,11}$/g;
    // console.log(value)
    // console.log(idReg)
    // console.log(Validator.isValid(idReg , value))
    return Validator.isValid(idReg , value)
  }

  /**
   * @description 대소문자, 숫자, 특수문자 !@#$%^&*()_+-= 까지만 포함되는 8 ~ 16 자리 비밀번호
   *
   * @param {String} password 값
   *
   * @return {Boolean} 검증 관련 true or false
   * */
  static isValidPassword(value){

    let passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,16}$/;
    return Validator.isValid(passwordReg , value)
  }

  /**
   * @description 비밀번호 일치 여부 .
   *
   * */
  static isValidPasswordConfirm (value , confirmValue){
    let password = this.isValidPassword(value);
    let confirmPassword = this.isValidPassword(confirmValue);

    return password === confirmPassword;
  }
}


export default JoinRegex;
