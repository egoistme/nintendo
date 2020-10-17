//注册
Mock.mock(/users\/regUser/, "post", (options) => {
  let regUser = JSON.parse(options.body);
  let users = getlocalStorage("users");
  let flag = users.every((item) => item.mail != regUser.mail);
  if (flag) {
    users.push(regUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  } else {
    return false;
  }
});

//登录
Mock.mock(/users\/signInUser/, "post", (options) => {
  let signInUser = JSON.parse(options.body);
  let users = getlocalStorage("users");
  let flag = false;
  users.forEach((item) => {
    if (item.mail == signInUser.mail && item.password == signInUser.password) {
      signInUser.username = item.username;
      signInUser.gender = item.gender;
      flag = true;
    }
  });
  if (flag) {
    setlocalStorage("isSignIn", JSON.stringify(signInUser));
    return signInUser;
  } else {
    return flag;
  }
});
//判断是否登录
Mock.mock(/users\/isSignIn/,"get",()=>getlocalStorage("isSignIn"))

//取游戏
Mock.mock(/games\/getGames/, "post", (options) => {
  let flag = parseInt(options.body);
  let games = getlocalStorage("games");
  let returnGames = games.slice(flag * 20, (flag + 1) * 20);
  return returnGames;
});

//向gamedetail发送数据
Mock.mock(/games\/getData/, "post", (options) => {
  const gameDetails = getlocalStorage("gameDetails");
  const game = gameDetails.filter((item) => item.name == options.body);
  return game;
});

//添加游戏至心愿单
Mock.mock(/game\/addWish/, "post", (options) => {
  const wishGame = options.body;

  const wishList = getlocalStorage("wishList");
  if (wishList != "" && wishList.some((item) => item.name == wishGame)) {
    return "心愿单已有该游戏";
  }

  // if(wishList.every(item=>item.name != wishGame)){
  const gameDetails = getlocalStorage("gameDetails");
  let gameDetail = gameDetails.filter((item) => item.name == wishGame);
  wishList.push(gameDetail[0]);
  console.log(wishGame,wishList)
  setlocalStorage("wishList", JSON.stringify(wishList));
  return "添加成功";

});
//向wish list html发送数据
Mock.mock(/games\/requestWishList/,"get",()=> getlocalStorage("wishList"))

// //回答OntheWish
// Mock.mock(/games\/isOnWish/,"post",(options)=>{
//   let wish = getlocalStorage("wishList");
//   return wish.some(value=>{
//     value.name = options.body;
//   })
// })