var getGamesTime = 0;

setGames();
getGames();
//取游戏
function getGames() {
  getGamesTime++;
  ajax({
    type: "post",
    data: getGamesTime,
    url: "games/getGames",
    success(msg) {
      console.log(msg);
      renderGames(msg);
    },
  });
}

//存游戏
function setGames() {
  class Game {
    constructor(src, title, releasedDate, price, plat) {
      this.src = src;
      this.title = title;
      this.releasedDate = releasedDate;
      this.price = price;
      this.plat = plat;
    }
  }
  const commonSrc = "images/gameStoreImages/";
  let g1 = new Game(
    commonSrc + "Switch_BravelyDefault2-Demo_box_eShop.png",
    "Bravely Default™ II",
    "Releases 2020",
    "Free",
    "Nintendo Switch"
  );
  let g2 = new Game(
    commonSrc + "paper-mario-the-origami-king-switch-box.png",
    "Paper Mario™:The Origami King",
    "Reeleases Jul 17,2020",
    "$59.99",
    "Nintendo Switch"
  );
  let g3 = new Game(
    commonSrc + "Switch_PokemonCafeMix_box_eShop.png",
    "Pokémon Café Mix",
    "Reeleased Jun 23,2020",
    "$59.99",
    "Nintendo Switch"
  );
  let g4 = new Game(
    commonSrc + "Switch_JumpRopeChallenge_box_eShop.png",
    "Jump Rope Challenge",
    "Reeleased Jun 15,2020",
    "Free",
    "Nintendo Switch"
  );
  let g5 = new Game(
    commonSrc + "3DS_KirbysExtraEpicYarn_box.png",
    "Kirby's Extra Epic Yarn",
    "Reeleased Jun 7,2020",
    "Free",
    "Nintendo 3DS"
  );
  let g6 = new Game(
    commonSrc + "Switch_SuperKirbyClash_box_eShop.png",
    "Super Kirby Clash™",
    "Reeleased Sep 04,2019",
    "Free",
    "Nintendo Switch"
  );
  let g7 = new Game(
    commonSrc + "Switch_SuperMarioParty_box_bundle.png",
    "Super Mario Party",
    "Reeleased jul 26,2019",
    "￥99.99",
    "Nintendo Switch"
  );
  let g8 = new Game(
    commonSrc + "Switch_FireEmblem-3Houses_bundle_box.png",
    "Fire Emblem：Three Houses-Seasons of Warfare Edition",
    "Reeleased Feb 01,2019",
    "Free",
    "Nintendo Switch"
  );
  let g9 = new Game(
    commonSrc + "Switch_FEWarriors_box_bundle.png",
    "Fire Emblem Warriors Special Edition",
    "Reeleased Oct 20,2017",
    "Free",
    "Nintendo Switch"
  );
  let g10 = new Game(
    commonSrc + "Switch_Zelda-BOTW_ExplorersEdition_box.png",
    "The Legend of Zelda:Breath of the Wild Explorer's Edition",
    "Reeleased Oct 20,2017",
    "Free",
    "Nintendo Switch"
  );
  let games = [
    g1,
    g4,
    g5,
    g2,
    g6,
    g7,
    g8,
    g9,
    g3,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g8,
    g9,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g6,
    g7,
    g8,
    g9,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g6,
    g7,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g8,
    g9,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g1,
    g10,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
  ];

  setlocalStorage("games", JSON.stringify(games));
}
//渲染游戏
function renderGames(arr) {
  let gameCardContainer = document.querySelector(".gameCard-container");

  arr.forEach((item, index) => {
    setTimeout(() => {
      let a = document.createElement("a");
      a.onclick = () => {
        let gameName = a.getAttribute("data-gameName");
        setlocalStorage("gameClicked", gameName);
      };
      a.href = "gameDetail.html";
      a.classList.add("gameCard");
      a.setAttribute("data-gameName", item.title);
      a.innerHTML = `
                <div class="img-container">
                    <img src=${item.src} alt="" width="100%">
                </div>
                <p class="game-title" >${item.title}</p>
                <p class="game-released-date" >${item.releasedDate}</p>
                <p class="game-price" >${item.price}</p>
                <p class="game-plat" >${item.plat}</p>
            `;
      gameCardContainer.appendChild(a);
    }, index * 40);
  });
}

//存游戏详情
class GameDetails {
  constructor(name, streamer, plat, carousel, introduce, table, price) {
    this.name = name;
    this.streamer = streamer;
    this.plat = plat;
    this.carousel = carousel;
    this.introduce = introduce;
    this.table = table;
    this.price = price;
  }
}
setGameDetails();
function setGameDetails() {
  const pSrc = "images/gameDetailImages/pokemon/";
  const bSrc = "images/gameDetailImages/Bravely-Default2/";
  const kSrc = "images/gameDetailImages/kirby/";
  let pokemon = new GameDetails(
    "Pokémon Café Mix",
    {
      bg: "url(images/gameDetailImages/pokemon/Switch_PokemonCafeMix_bg.jpg)",
      img: pSrc + "pokemon-cafe-mix-switch-hero.jpg",
      thumbnail: "images/gameStoreImages/Switch_PokemonCafeMix_box_eShop.png",
    },
    "Nintendo Switch",
    {
      pages: 2,
      big: [pSrc + "screenshot00.png", pSrc + "screenshot10.png"],
      small: [
        pSrc + "screenshot01.png",
        pSrc + "screenshot02.png",
        pSrc + "screenshot03.png",
        pSrc + "screenshot04.png",
      ],
    },
    {
      title:
        "Complete touch-based puzzles to serve dishes and drinks to adorable Pokémon customers!",
      content: ` Link together Pokémon™ icons to clear puzzles as you work to build up your very own café in Pokémon
            Café Mix, a free-to-start game for the Nintendo Switch™ system! Meet the goals for each puzzle
            before you run out of turns—link a certain number of icons, get a high score, or even destroy sugar
            cubes to serve up Pokémon themed menu items.<br>
            <br>
            Meet and grow your café staff of charming Pokémon eager to help<br>
            <br>
            Recruit Pokémon to help out at the café (in their adorable uniforms) by building friendship and
            expand your café and menu offerings by completing puzzles. Each Pokémon staff member has a Café
            Skill that will come in handy during puzzles!<br>
            <br>
            Golden Acorns can help you complete puzzles and recruit more Pokémon!<br>
            <br>
            Earn or purchase Golden Acorns, the in-game currency, and redeem them to regain hearts, continue
            puzzles, and get helpful items.<br>
            <br>
            As you complete puzzles to build a world-class café, you’ll face obstacles such as sugar cubes,
            dollops of whipped cream, and tomatoes! Use your puzzle skills to clear them and employ the help of
            Pokémon’s Café Skills for some extra oomph! In addition to Café Skills, each Pokémon staff member
            has a specialty. Match a Pokémon’s specialty with the dish or drink you are making for bonuses in
            puzzles.<br>
            <br>
            In addition to recruiting more Pokémon staff members and growing your collection of menu items, the
            café itself will expand as you play! Getting new tools or having areas added to your café may even
            draw in more customers. All the action in Pokémon Café Mix unfolds in a playful art style that
            brings out the cuteness of your Pokémon pals and patrons. It’s time to become a café owner, solve
            puzzles, and bring joy to Pokémon patrons!<br>`,
    },
    pSrc + "game-tips.png",
    "$59.99"
  );

  let bravelyDefault = new GameDetails(
    "Bravely Default™ II",
    {
      bg: "black",
      img: bSrc + "Switch_BravelyDefault2_1200x675.jpg",
      thumbnail: "images/gameStoreImages/Switch_BravelyDefault2-Demo_box_eShop.png",
    },
    "Nintendo Switch",
    {
      pages: 3,
      big: [bSrc + "big01.png", bSrc + "big02.png", bSrc + "big03.png"],
      small: [
        bSrc + "sm01.png",
        bSrc + "sm02.png",
        bSrc + "sm03.png",
        bSrc + "sm04.png",
        bSrc + "sm05.png",
        bSrc + "sm06.png",
        bSrc + "sm07.png",
        bSrc + "sm08.png",
        bSrc + "sm09.png",
        bSrc + "sm10.png",
        bSrc + "sm11.png",
        bSrc + "sm12.png",
      ],
    },
    {
      title: "Step into a brand-new world with four brand-new heroes.",
      content: `A new world, a new story, and all-new Heroes of Light await in an original RPG experience arriving on the Nintendo Switch system in 2020! This successor to the original Bravely Default game comes from the team that brought you the Bravely series and Octopath Traveler, and features music from Revo (Sound Horizon/Linked Horizon), acclaimed composer of the Bravely Default soundtrack.<br>
            <br>Brand-new entry in Square Enix’s Bravely Series.<br><br>Travel the world in search of the four Crystals with the latest incarnation of the brave band known as the Heroes of Light<br><br>Latest creation from Team Asano, creators of the Bravely series and Octopath Traveler.<br><br>New world filled with new characters, but with the atmosphere and excitement the Bravely series is known for`,
    },
    bSrc + "table.png",
    "$99.99"
  );

  let kirby = new GameDetails(
    "Super Kirby Clash™",
    {
      bg: "url(images/gameDetailImages/kirby/BG-Super-Kirby-Clash.png) repeat",
      img: kSrc + "super-kirby-clash-switch-hero.jpg",
      thumbnail: "images/gameStoreImages/Switch_SuperKirbyClash_box_eShop.png",
    },
    "Nintendo Switch",
    {
      pages: 2,
      big: [kSrc + "big01.png", kSrc + "big02.png"],
      small: [
        kSrc + "sm01.png",
        kSrc + "sm02.png",
        kSrc + "sm03.png",
        kSrc + "sm04.png",
        kSrc + "sm05.png",
      ],
    },
    {
      title: "Power through bosses on a team of four!",
      content: `To defeat bosses this wicked, it’ll take a whole team of Kirbys! In this free-to-start multiplayer* action game, you can choose from four unique Roles and join up to three other players to take down tough bosses. Puff up your power by crafting weapons and spending materials at the shop to receive even MORE weapons, not to mention armor and items. Pass a Joy-Con™ controller to a friend to play locally, and if you have a Nintendo Switch Online membership, you can even play online**!<br>
            Are you a Sword Hero? Hammer Lord? Beam Mage? Or Doctor Healmore?! No matter what, each mighty role offers up a unique way to play. Story Quest lets players team-up locally* by sharing Joy-Con controllers, while Party Quest enables users to play together on one system, via local wireless, or online**. Plus, tapping compatible amiibo™ figures/accessories *** will earn you extra fragments to help craft new gear! Are you ready? For Kirby, the answer is always fight and flight.`,
    },
    kSrc + "table.png",
    "Free"
  );

  let GameDetailsList = [pokemon, bravelyDefault, kirby];
  setlocalStorage("gameDetails", JSON.stringify(GameDetailsList));
}
//过滤器点击事件
filterClick();
function filterClick() {
  let titles = document.querySelectorAll(".item-filter .title");
  for (let item of titles) {
    item.addEventListener("click", (e) => {
      item.nextElementSibling.classList.toggle("item-content-show");
      let arrow = item.lastElementChild;

      arrow.classList.toggle("upArrow");
      console.log(e.target.nextElementSibling);
    });
  }
}
//过滤器绝对定位
filterPositionFixed();
function filterPositionFixed() {
  let filter = document.querySelector(".sort-list");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 280) {
      filter.style.top = "50px";
    } else {
      filter.style.top = "230px";
    }
  });
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