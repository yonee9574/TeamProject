var _userkey = "__user__";
document.querySelector('input[name="radio"]').checked
document.querySelector('input[name="radio"]:checked').value;

function join() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  // 첫번째 비밀번호 입력창
  var pw1 = document.getElementById("pw1").value;
  // 두번째 비밀번호 입력창
  var pw2 = document.getElementById("pw2").value;
  var gender = document.getElementById("gender").value;
  console.log(id, name, pw1,gender);

  var userInfo = {
    id: id,
    name: name,
    pw: pw1,
    gender : gender
  };

  localStorage.setItem(_userkey + id, JSON.stringify(userInfo));

  alert("회원가입이 완료되었습니다.");
  location.replace("login.html");
}

function checkId() {
  document.getElementById("btnJoin").disabled = true;
  var id = document.getElementById("id").value;
  var userInfo = localStorage.getItem(_userkey + id);
  if (userInfo) {
    alert("ID가 중복되었습니다. 다시 입력해주세요.");
    document.getElementById("id").value = null;
    return;
  }
  alert("사용 가능한 아이디 입니다.");
}

function checkPw() {
  var pw1 = document.getElementById("pw1");
  var pw2 = document.getElementById("pw2");

  if (pw1.value.length < 6) {
    alert("비밀번호는 6글자 이상만 이용 가능합니다!");
    pw1.value = null;
    event.preventDefault();
  }

  if (pw1.value === pw2.value) {
    alert("비밀번호가 일치합니다!");
  } else {
    alert("다시 설정해주세요!");
    pw1.focus();
    pw1.value = "";
    pw2.value = "";
  }

  document.getElementById("btnJoin").disabled = false;
}
