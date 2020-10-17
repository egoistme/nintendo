getSignInState();
secondNavClick()
//获取登录信息
function getSignInState() {
  const loginReg = document.querySelector(".login-reg");
  const userSignIn = document.querySelector(".user-signIn");

  const user = getlocalStorage("isSignIn");

  if (user != "") {
    loginReg.style.display = "none";
    userSignIn.style.display = "flex";
    userSignIn.firstElementChild.innerText = user.username;
    userSignIn.lastElementChild.src = `images/indexImages/头像-${user.gender}.svg`;
  } else {
    loginReg.style.display = "flex";
    userSignIn.style.display = "none";
  }
}

function secondNavClick(){
    const lis = document.querySelectorAll(".nav-main ul li");
    const navItems = document.querySelectorAll(".nav-second");
    const navContainer = document.querySelector(".nav-second-container");
    for(let i = lis.length;i--;){
        lis[i].onclick = function(){
            if(  navItems[i].style.display == "none"){
                navContainer.style.zIndex = 1
                for(let item of navItems){
                    item.style.display = "none";
                }
                for(let j = lis.length;j--;){
                    lis[j].style.backgroundColor = null;
                    lis[j].style.color = null
                }
                navItems[i].style.display = "block";
                lis[i].style.backgroundColor = getComputedStyle(navItems[i],null).backgroundColor;
                if(i == 1 || i ==2 ||i == 4 ||i==5 || i== 6){
                    lis[i].style.color = "#ffffff";
                }
            }else{
                navItems[i].style.display = "none"
                lis[i].style.backgroundColor = "";
                lis[i].style.color = null;
                navContainer.style.zIndex = -1

            }
        }
    }
}
// //滚动监听事件
// window.addEventListener("scroll",()=>{
//     const backTop = document.querySelector(".backTop");
//     if(document.documentElement.scrollTop >=200){
//         backTop.style.display = "block";
//     }else{
//         setTimeout(() => {
//         backTop.style.display = "none"
//         backTop.style.bottom = "50px"
//         }, 1000);
//     }
// })
// backTopEvent()
// function backTopEvent () {
//     const backTop = document.querySelector(".backTop");
//     backTop.addEventListener("click",()=>{
//        console.log(1)
//     backTop.style.bottom = "1000px"

//     let timer =  setInterval(() => {
//         let dis = document.body.scrollTop = document.documentElement.scrollTop
//           if( dis!=0 || dis > 0){
//             if(dis>1500){
//                 document.documentElement.scrollTop-=400;  
//             }else{
//                 document.documentElement.scrollTop-=200;  
//             }
//           }else(clearInterval(timer))
//           console.log(1)
//       }, 16.7);
//     })
// }