ajax({
  type: "post",
  data: requestData(),
  url: "games/getData",
  success(gamedetail) {
    renderHtml(gamedetail[0]);
    addWishList(gamedetail[0]);
    carouselMove();
  },
});

function addWishList(game) {
  const link = document.getElementById("link-wish-list");
  //清除超链接
  link.onclick = () => false;
  const btn = document.querySelector(".add-wish-list");

  btn.onclick = () => {
    ajax({
      url: "users/isSignIn",
      success(msg) {
        if (msg != "") {
          const img = btn.firstElementChild.firstElementChild;
          const span = btn.lastElementChild;
          if (img.getAttribute("data-isAdd") == "false") {
            img.setAttribute("src", "images/gameDetailImages/fullHeart.svg");
            img.setAttribute("data-isAdd", "true");
            span.innerText = "On Wish List";
          } else {
            link.onclick = null;
          }
          link.addEventListener("click", () => {
            let gameName = document.querySelector(".game-title").innerText;
            ajax({
              type: "post",
              data: gameName,
              url: "game/addWish",
              success(msg) {
                console.log(msg);
              },
            });
          });
        } else {
          alert("请先登录");
        }
      },
    });
  };
  //被点击之后将该游戏发送至服务器;

  //   link.onclick = (game)=>{

  //   }
}

var dotNum = 0;
function moveRight(elem) {
  let margin = elem.style.marginLeft;
  margin = margin.substring(0, margin.length - 2);
  let width = elem.style.width.substring(0, elem.style.width.length - 2);
  if (margin == -width + 1200) {
    return;
  }
  elem.style.marginLeft = margin - 1200 + "px";
  dotNum++;
}
function moveLeft(elem) {
  let margin = elem.style.marginLeft;
  if (margin == "0px") {
    return;
  }
  margin = margin.substring(0, margin.length - 2);

  elem.style.marginLeft = margin - 0 + 1200 + "px";
  dotNum--;
}
//轮播图
function carouselMove() {
  const content = document.querySelector(".carousel-content");
  const dots = document.querySelectorAll(".dot");
  const controlBox = document.querySelector(".carousel-control-box");
  controlBox.addEventListener("click", function (e) {
    let id = e.target.id;
    switch (id) {
      case "left-arrow":
        moveLeft(content);
        break;
      case "right-arrow":
        moveRight(content);
    }
    for (let dot of dots) {
      dot.setAttribute("src", "images/gameDetailImages/dot1.svg");
    }
    dots[dotNum].setAttribute("src", "images/gameDetailImages/dot2.svg");
    dotControl(content);
  });
}
function dotControl(c) {
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].setAttribute("data-index", i);
    dots[i];
  }
  const dotsBox = document.querySelector(".dots");
  dotsBox.addEventListener("click", (e) => {
    let index = -1;
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].getAttribute("src") == "images/gameDetailImages/dot2.svg") {
        index = i;
      }
    }
    let clickIndex = e.target.getAttribute("data-index");
    let num = clickIndex - index;
    if (num > 0) {
      for (let i = num; i--; ) {
        moveRight(c);
      }
    }
    if (num < 0) {
      num = -num;
      for (let i = num; i--; ) {
        moveLeft(c);
      }
    }
  });
}

function requestData() {
  return localStorage.getItem("gameClicked");
}

function renderHtml(obj) {
  const [
    streamerContainer,
    streamerImg,
    gameTitle,
    gamePlat,
    introCarousel,
    carouselContent,
    dots,
    introTitle,
    introContent,
    gameMsgTable,
  ] = [
    getElem(".streamer-container"),
    getElem(".img-container img"),
    getElem(".game-title"),
    getElem(".game-plat"),
    getElem(".intro-carousel"),
    getElem(".carousel-content"),
    getElem(".dots"),
    getElem(".game-introduce .title"),
    getElem(".game-introduce p"),
    getElem(".game-msg-table img"),
  ];
  streamerContainer.style.background = obj.streamer.bg;
  streamerImg.setAttribute("src", obj.streamer.img);
  gameTitle.innerText = obj.name;
  gamePlat.innerText = obj.plat;
  introTitle.innerText = obj.introduce.title;
  introContent.innerHTML = obj.introduce.content;
  gameMsgTable.setAttribute("src", obj.table);
  introCarousel.style.background = obj.streamer.bg;
  const [page, bigs, smalls] = [
    obj.carousel.pages,
    obj.carousel.big,
    obj.carousel.small,
  ];
  carouselContent.style.gridTemplateColumns = `repeat(${page},600px 300px 300px)`;
  carouselContent.style.width = page * 1200 + "px";
  let [bigIndex, smallIndex] = [0, 0];
  //controlBox--dots
  for (let i = page; i--; ) {
    let img = document.createElement("img");
    img.classList.add("dot");
    if (i == page - 1) {
      img.setAttribute("src", "images/gameDetailImages/dot2.svg");
    } else {
      img.setAttribute("src", "images/gameDetailImages/dot1.svg");
    }
    img.style.width = "26px";
    dots.appendChild(img);
  }

  for (let i = 0; i < page * 3; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    if (i % 3 == 0) {
      if (bigIndex > bigs.length) {
        return;
      }
      div.classList.add("big-item");
      const img = document.createElement("img");
      img.setAttribute("src", bigs[bigIndex]);
      div.appendChild(img);
      bigIndex++;
    } else {
      div.classList.add("small-item");
      for (let j = 2; j--; ) {
        if (smallIndex > smalls.length) {
          return;
        }
        const img = document.createElement("img");
        img.setAttribute("src", smalls[smallIndex]);

        smallIndex++;
        div.appendChild(img);
      }
    }
    carouselContent.appendChild(div);
  }
}
