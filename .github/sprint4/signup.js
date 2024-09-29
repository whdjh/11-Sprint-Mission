import {isValidEmail, validateInputFields} from "./sign_utils.js";

document.addEventListener('DOMContentLoaded', function() {
  const inputElements = document.querySelectorAll('input');

  // 타입별 입력값 형식 검사 함수
  const validationRules = {
    email: (value) => {
      if (value === '') {
        return '이메일을 입력해주세요.';
      } else if (!isValidEmail(value)) {
        return '잘못된 이메일 형식입니다.';
      }
    },
    nickname: (value) => {
      if (value === '') {
        return '닉네임을 입력해주세요';
      }
    },
    password: (value) => {
      if (value === '') {
        return '비밀번호를 입력해주세요.';
      } else if (value.length < 8) {
        return '비밀번호를 8자 이상 입력해주세요.';
      }
    },
    passwordConfirmation: (value) => {
      const passwordValue = document.getElementById('password').value.trim();
      if (value === '') {
        return '비밀번호를 입력해주세요';
      } else if (value !== passwordValue) {
        return '비밀번호가 일치하지 않습니다.';
      }
    }
  };

  // 입력값 형식 검사 함수 호출
  validateInputFields(inputElements, validationRules);
});