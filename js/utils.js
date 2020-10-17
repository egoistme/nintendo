function ajax(options) {
	const { type = "get", url, data, success } = options;
	const xhr = new XMLHttpRequest();
	xhr.open(type, url);
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			// 判断服务器返回的数据是否有值
			if(xhr.responseText) {
				// 如果有值，就将该字符串通过 JSON.parse 方法进行转换
				const msg = JSON.parse(xhr.responseText);
				success(msg);
			} else {
				success(xhr.responseText);
			}
		}
	}
}

//将'a=b&c=d'转为对象
function strParseObj(str) {
	let arr = str.split('&');
	let obj = {};
	arr.forEach(item=>{
		let [key,value] = item.split('=');
		obj[key] = value;
	})
	return obj
}
//获取sessionStorage中的值并返回数组
function getSessionStorage(attr) {
	const data = sessionStorage.getItem(attr);
	let arr = [];
	if (data) {
		arr = JSON.parse(data);
	}
	return arr
}
//存储sessionStorage
function setSessionStorage(attr,data){
	SessionStorage.setItem(attr,data);
}
//获取
function getlocalStorage(attr) {
	const data = localStorage.getItem(attr);
	let arr = [];
	if (data) {
		arr = JSON.parse(data);
	}
	return arr
}
//存储localStorage
function setlocalStorage(attr,data){
	localStorage.setItem(attr,data);
}

//添加页面加载完毕才执行的函数
function addLoadEvent(func) {
	let oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func()
		}
	}
}
//获取单个元素
function getElem(choose){
    return document.querySelector(choose);
}