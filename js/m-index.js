
mCarouselMove();
function mCarouselMove(){
    const carouselContent = document.querySelector(".carousel-content");
    var x = 0;
    carouselContent.addEventListener("touchstart",(e)=>{
        x =  e.changedTouches[0].clientX -carouselContent.offsetLeft
    })
    carouselContent.addEventListener("touchmove",(e)=>{
        let distance =   e.changedTouches[0].clientX -x;
        if(distance<0 && distance>-3780){
            carouselContent.style.marginLeft = distance + "px";

        }
        console.log(distance) 
    })
}

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