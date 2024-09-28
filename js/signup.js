const email = document.querySelector(".myEmail");
const nickname = document.querySelector(".myNickname");
const password = document.querySelector(".myPw");
const passwordCheck = document.querySelector(".checkMyPw");
const signupBtn = document.querySelector(".signup");
const emailEr = document.querySelector(".emailError");
const nicknameEr = document.querySelector(".nicknameError");
const passwordEr = document.querySelector(".passwordError");
const passwordCheckEr = document.querySelector(".checkPwError");

function renderOutline(value) {
  value.style.outline = "2px solid #3692ff";
}

function renderErOutline(value) {
  value.style.outline = "2px solid red";
}

function deleteOutline(value) {
  value.style.outline = "0";
}

email.addEventListener("focusout", function () {
  const emailValue = email.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue == "") {
    emailEr.textContent = "이메일을 입력해주세요";
    renderErOutline(email);
  } else if (emailPattern.test(emailValue)) {
    emailEr.textContent = "";
    deleteOutline(email);
  } else {
    emailEr.textContent = "잘못된 이메일 형식입니다";
    renderErOutline(email);
  }
});

email.addEventListener("focusin", function () {
  const emailValue = email.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailValue)) {
    renderOutline(email);
  }
});

nickname.addEventListener("focusout", function () {
  const nicknameValue = nickname.value;

  if (nicknameValue == "") {
    nicknameEr.textContent = "닉네임을 입력해주세요";
    renderErOutline(nickname);
  } else {
    nicknameEr.textContent = "";
    deleteOutline(nickname);
  }
});

nickname.addEventListener("focusin", function () {
  const nicknameValue = nickname.value;

  if (nicknameValue !== "") {
    renderOutline(nickname);
  }
});

password.addEventListener("focusout", function () {
  const passwordValue = password.value;

  if (passwordValue == "") {
    passwordEr.textContent = "비밀번호를 입력해주세요";
    renderErOutline(password);
  } else if (passwordValue.length >= 8) {
    passwordEr.textContent = "";
    deleteOutline(password);
  } else {
    passwordEr.textContent = "비밀번호를 8자 이상 입력해주세요";
    renderErOutline(password);
  }
});

password.addEventListener("focusin", function () {
  const passwordValue = password.value;

  if (passwordValue.length >= 8) {
    renderOutline(password);
  }
});

function checkPassword() {
  const passwordCheckValue = passwordCheck.value;
  const passwordValue = password.value;

  if (passwordCheckValue !== "") {
    if (passwordValue !== passwordCheckValue) {
      passwordCheckEr.textContent = "비밀번호가 일치하지 않습니다";
      renderErOutline(passwordCheck);
    } else {
      passwordCheckEr.textContent = "";
      deleteOutline(passwordCheck);
    }
  }
}

passwordCheck.addEventListener("focusin", function () {
  const passwordCheckValue = passwordCheck.value;
  const passwordValue = password.value;

  if (passwordValue == passwordCheckValue) {
    renderOutline(passwordCheck);
  }
});

password.addEventListener("focusout", checkPassword);
passwordCheck.addEventListener("focusout", checkPassword);

function signup() {
  const emailValue = email.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailValue !== "" && emailPattern.test(emailValue);

  const nicknameValue = nickname.value;
  const isNicknameValid = nicknameValue !== "";

  const passwordValue = password.value;
  const isPasswordValid = passwordValue.length >= 8;

  const passwordCheckValue = passwordCheck.value;
  const isPasswordCheckValid = passwordCheckValue == passwordValue;

  if (
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isPasswordCheckValid
  ) {
    signupBtn.disabled = false;
  } else {
    signupBtn.disabled = true;
  }
}

email.addEventListener("input", signup);
nickname.addEventListener("input", signup);
password.addEventListener("input", signup);
passwordCheck.addEventListener("input", signup);

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./signin.html";
});
