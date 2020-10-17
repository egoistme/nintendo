// function navSecondShow() {
//   let navItems = document.querySelectorAll(".nav-main ul li");
//   let navSecondItems = document.querySelectorAll(".banner .nav-second");
//   for (let i = navItems.length; i--; ) {
//     navItems[i].addEventListener("click", function (e) {
//       for (let item of navSecondItems) {
//         item.style.display = "none";
//       }
//       navSecondItems[i].style.display = "block";
//       let bgColor = getComputedStyle(navSecondItems[i]).backgroundColor;
//       this.style.backgroundColor = bgColor;
//     });
//   }
//   document.body.addEventListener('click', function(e) {
//     for(let i = navItems.length; i--; ){
//         navItems[i].style.backgroundColor = null
//     }
//   },true)
//   console.log(navItems, navSecondItems);
// }
// navSecondShow();
// $(document).ready(function () {
// $(".nav-main ul li").click(function () {
//     $(".banner .nav-second").toggleClass("d-block");
// });
// });

function copyCarousel() {}
copyCarousel();

window.onload = function () {
  const carousel = document.querySelector(
    ".carousel-container .carousel-window .carousel-content"
  );
  const traceline = document.querySelector(".traceline");
  carousel.onselectstart = carousel.ondrag = function(){
    return false
  }
  const carouselChild = document.querySelectorAll( ".carousel-container .carousel-window .carousel-content .carousel-item")
  for(let item of carouselChild){
    item.ondragstart = function(){
      return false;
    }
  }

  carousel.onmousedown = function (e) {
    let x = e.clientX - carousel.offsetLeft;

    carousel.onmousemove = function (e) {
      let distance = e.clientX - x;

      if (distance < 0 && distance > -2240) {
        carousel.style.marginLeft = distance + "px";
        let percent = (-carousel.offsetLeft / 4150) * 100;
        traceline.style.marginLeft = percent + "%";
      }
    };
    carousel.onmouseup = function () {
      carousel.onmousemove = null;
    };
  };

  //鼠标抓手
};



//滚动监听事件
window.addEventListener("scroll",()=>{
  const backTop = document.querySelector(".backTop");
  if(document.documentElement.scrollTop >=200){
      backTop.style.display = "block";
  }else{
      setTimeout(() => {
      backTop.style.display = "none"
      backTop.style.bottom = "50px"
      }, 1000);
  }
})
backTopEvent()
function backTopEvent () {
  const backTop = document.querySelector(".backTop");
  backTop.addEventListener("click",()=>{
     console.log(1)
  backTop.style.bottom = "1200px"

  let timer =  setInterval(() => {
      let dis = document.body.scrollTop = document.documentElement.scrollTop
        if( dis!=0 || dis > 0){
          if(dis>1500){
              document.documentElement.scrollTop-=400;  
          }else{
              document.documentElement.scrollTop-=200;  
          }
        }else(clearInterval(timer))
        console.log(1)
    }, 16.7);
  })
}