class Validator{

  /**
   * @description value가 사용 가능한 값인지 정규표현식은 통과되었는지에대한 여부
   *
   * @param {RegExp} 해당되는 정규 표현식
   * @param {String} 정규표현식으로 검사할 값
   *
   * @return {Boolean} 검증 여부 true or false
   * */
  static isValid(regex , value) {
    return Validator.isSet(value) && regex.test(value)
  }


  static isSet(value){
    return !this.isUndefined(value) && (value.length >0 || value > 0)
  }

  static isUndefined (value) {
    return typeof value === 'undefined';
  }
}



export default Validator
