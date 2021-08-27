const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("loginBtn");

function onLogin(event) {
  const mbrId = document.getElementById("mbrId");
  const mbrPw = document.getElementById("mbrPw");

  let id = mbrId.value;
  let pw = mbrPw.value;

  const member = JSON.parse(localStorage.getItem("__user__" + id));

  // localstorage에 입력한 id가 없을 경우
  if (!member) {
    alert("없는 ID 입니다. 다시 입력해주세요.");
    mbrId.focus();
    mbrId.value = null;
    mbrPw.value = null;
    event.preventDefault();
  }

  // 로그인 성공시
  if (id === member.id && pw === member.pw) {
    alert(`${member.name}님 안녕하세요🙂`);
    location.href("main_home.html");
  } else if (pw !== member.pw) {
    alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
    event.preventDefault();
    mbrPw.focus();
  }
}

loginForm.addEventListener("submit", onLogin);
