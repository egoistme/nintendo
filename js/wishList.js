ajax({
  url: "games/requestWishList",
  success(msg) {
      console.log(msg)
    renderWishListHTML(msg);
  },
});

ajax({
  url: "users/isSignIn",
  success(msg) {
    renderUserMsg(msg);
  },
});

//渲染游戏部分
function renderWishListHTML(arr) {
    const cart = getElem(".cart");
  arr.forEach((value) => {
    let div = document.createElement("div");
    div.classList.add("item-game");
    div.innerHTML = `
      <div class="pic-container">
      <img src=${value.streamer.thumbnail} alt="" width="100%" >
  </div>
  <div class="game-content">
      <p>${value.introduce.title}.</p>
  </div>
  <div class="btn-download-container">
      <button>Download for <span class="price">${value.price}</span></button>
  </div>
      `;
      cart.appendChild(div);

  });
  let linkDivs = document.querySelectorAll(".pic-container");
  for(let item of linkDivs){
    item.onclick = ()=>{
      window.location.href = "Game-Store.html"
    }
  }
}

//渲染用户信息部分
function renderUserMsg(obj) {
  const userMsg = getElem(".userMsg");
  userMsg.innerHTML = `
    <div class="user-head-container">
    <img src="images/indexImages/头像-${obj.gender}.svg" alt="" width="100%">
</div>
<div class="name-gender">
   ${obj.username}
    <div class="gender-container"><img src="images/indexImages/${obj.gender}.svg" alt="" width="100%">
    </div>
</div>
    `;
}

particle()
function particle() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const dots = [];
  const distance = 100;
  var mouseX = 0;
  var mouseY = 0;
  canvas.addEventListener('mousemove', function (e) {
      mouseY = e.clientY;
      mouseX = e.clientX;
  })
  class Dot {
      constructor(x, y, radius, color) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.color = color
          this.speedX = Math.random() * 10 - 5;
          this.speedY = Math.random() * 10 - 5;
      }
      move() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
              this.speedX = -this.speedX
              this.speedY = -this.speedY
          }
      }
  }
  for (let i = 0; i < 600; i++) {
      let red = parseInt(Math.random() * 255);
      let blue = parseInt(Math.random() * 255);
      let yellow = parseInt(Math.random() * 255);
      let radius = parseInt(Math.random() * 5 + 1);
      let opc = Math.random();
      let x = parseInt(Math.random() * canvas.width);
      let y = parseInt(Math.random() * canvas.height);
      let color = `rgba(${red},${blue},${yellow},${opc})`;
      dots.push(new Dot(x, y, radius, color))
  }
  function renderLine(dot) {
      dots.forEach((item) => {
          if (checkMouseDotDistance(dot, item) && dot != item && dot.radius > item.radius) {
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(item.x, item.y);
              ctx.lineTo(mouseX, mouseY)

              ctx.strokeStyle = dot.color;
              ctx.stroke();
          }
      })
  }

  function renderDots(dots) {
      dots.forEach((item) => {
          ctx.beginPath();
          ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
          ctx.fillStyle = item.color;
          ctx.closePath();
          ctx.fill();
          item.move();
          renderLine(item);
      })
  }
  //判断点是否在鼠标范围内
  function checkMouseDotDistance(dot1, dot2) {
      let flag1 = Math.sqrt(Math.pow(dot1.x - mouseX, 2) + Math.pow(dot1.y - mouseY, 2)) < 2 * distance;
      let flag2 = Math.sqrt(Math.pow(dot2.x - mouseX, 2) + Math.pow(dot2.y - mouseY, 2)) < 2 * distance;
      let flag3 = Math.sqrt(Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)) < 2 * distance;
      return flag1 && flag2 && flag3;
  }
  // setInterval(() => {
  function show() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderDots(dots);
      requestAnimationFrame(show)
  }
  show()

  // }, 16.7);
}