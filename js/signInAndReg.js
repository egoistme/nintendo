languagesChoose();
//语言选择
function languagesChoose() {
  const selector = document.querySelector(".language-selector");
  selector.addEventListener("click", function (e) {
    const chooseBox = document.querySelector(".languagesChooseBox");
    let display = getComputedStyle(chooseBox, null).display;
    console.log(display);
    if (display == "none") {
      chooseBox.style.display = "block";
    } else {
      chooseBox.style.display = "none";
    }
  });
  const span = document.querySelector(".language-selector >span");
  const jianti = document.getElementById("jianti");
  jianti.addEventListener("click", function (e) {
    const englishs = document.querySelectorAll(".english");
    const chineses = document.querySelectorAll(".chinese");
    const linkItem = document.querySelectorAll(".link-item");
    englishs.forEach((item) => item.setAttribute("class", "english hide"));
    chineses.forEach((item) => item.setAttribute("class", "chinese"));
    linkItem.forEach((item) => item.setAttribute("class", "link-item m-5"));
    span.innerText = "简体中文";
  });
  const english = document.getElementById("english");
  english.addEventListener("click", function (e) {
    const englishs = document.querySelectorAll(".english");
    const chineses = document.querySelectorAll(".chinese");
    const linkItem = document.querySelectorAll(".link-item");
    englishs.forEach((item) => item.setAttribute("class", "english"));
    chineses.forEach((item) => item.setAttribute("class", "chinese hide"));
    linkItem.forEach((item) => item.setAttribute("class", "link-item"));
    span.innerText = "English";
  });
}

//注册
//判断
function getInputElem(id) {
  return document.getElementById(id);
}
function judgeInput(elem, reg) {
  elem.addEventListener("keyup", function (e) {
    if (!reg.test(elem.value)) {
      elem.parentElement.classList.remove("right-wrapper");
      elem.parentElement.classList.add("wrongInput-wrapper");
    } else {
      elem.parentElement.classList.remove("wrongInput-wrapper");
      elem.parentElement.classList.add("right-wrapper");
    }
  });
}
const [username, mail, password, repassword, gender] = [
  getInputElem("username"),
  getInputElem("mail"),
  getInputElem("password"),
  getInputElem("repassword"),
  getInputElem("gender"),
];
judgeInput(username, /^.{0,9}$/);
judgeInput(
  mail,
  /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
);
judgeInput(password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
judgeInput(repassword, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
repassword.addEventListener("keyup", function (e) {
  if (repassword.value != password.value) {
    this.parentElement.classList.remove("right-wrapper");
    this.parentElement.classList.add("wrongInput-wrapper");
  } else {
    this.parentElement.classList.remove("wrongInput-wrapper");
    this.parentElement.classList.add("right-wrapper");
  }
});

//复选框 下拉框
const checkbox = document.querySelectorAll(".checkbox");
function judgeCheckBox() {
  if (checkbox[0].checked == true) {
    checkbox[0].parentElement.classList.add("right-wrapper");
  } else {
    checkbox[0].parentElement.classList.remove("right-wrapper");
  }
  if (checkbox[1].checked == true) {
    checkbox[1].parentElement.classList.add("right-wrapper");
  } else {
    checkbox[1].parentElement.classList.remove("right-wrapper");
  }
}

function judgeGender() {
  if (gender.value != "nochoose") {
    gender.parentElement.classList.remove("wrongInput-wrapper");
    gender.parentElement.classList.add("right-wrapper");
  } else {
    gender.parentElement.classList.remove("right-wrapper");
  }
}
//总判断
function judgeAll() {
  const inputs = document.querySelectorAll("input");
  let flag = 0;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].parentElement.classList.contains("right-wrapper")) {
      flag++;
    }
  }
  if (flag == inputs.length) {
    return true;
  } else {
    return false;
  }
}
const regBtn = document.getElementById("regBtn");
setInterval(() => {
  judgeGender();
  judgeCheckBox();
  mailRepeatJudge()
  if (judgeAll()) {
    regBtn.classList.add("regBtn");
    regBtn.disabled = false;
  } else {
    regBtn.classList.remove("regBtn");
    regBtn.disabled = true;
  }
}, 200);
//判断邮箱
function mailRepeatJudge(){
    if(mail.parentElement.classList.contains("right-wrapper")){
        let tip = document.querySelector(".mail-wrong");
        tip.style.display = "none"
    }
}
//注册行为
function reg() {
  const user = {
    username: username.value,
    mail: mail.value,
    password: password.value,
    gender: gender.value,
  };

  ajax({
    type: "post",
    data: JSON.stringify(user),
    url: "users/regUser",
    success(msg) {
      if (msg) {
        alert("注册成功！");
        window.location.href = "signIn.html";
      }else{
          let tip = document.querySelector(".mail-wrong");
          mail.parentElement.classList.remove("right-wrapper");
          mail.parentElement.classList.add("wrongInput-wrapper");
          tip.style.display = "block"
      }
    },
  });
}
