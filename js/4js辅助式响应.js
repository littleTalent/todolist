// 可以做到响应式,判断用户设备,和屏幕大小
(function() { //立即执行匿名函数(function(){})(),好处是不会产生全局变量(window的属性和方法)
	function myXys() {
		var userAgent = navigator.userAgent;
		//console.log(userAgent);
		var html = document.querySelector("html");
		html.className = "";
		// 通过indexof查找(字符串)数组指定字符串,不能存在则返回-1,存在返回下标
		if (userAgent.indexOf("iPhone") != -1) {
			html.classList.add("iPhone");
		} else if (userAgent.indexOf("iPad") != -1) {
			html.classList.add("iPad");
		} else if (userAgent.indexOf("Android") != -1) {
			html.classList.add("Android");
		} else {
			html.classList.add("PC");
		}
		// window.innerWidth可以获取屏幕宽度,所以可以根据宽度设置html的样式(lt600,gt600)
		if (window.innerWidth < 375) {
			html.classList.add("lt375");
		} else if (window.innerWidth < 600) {
			html.classList.add("lt600");
		} else {
			html.classList.add("gt600");
		}
		console.log(html.className);
	}
	myXys();
	// 窗口调整 切换时
	window.onresize = function() {
		console.log("onresize");
		// var userAgent = navigator.userAgent;//实际上获得的userAgent是切换前的userAgent
		// console.log(userAgent);
		myXys();
		setRem();
	}
	// 1rem=屏幕的宽/(设计稿的宽/100)
	function setRem() {
		var screenWidth = window.innerWidth;
		// var rem1=screenWidth/10;// 设计稿为1000px,那么1rem为屏幕宽度的1/10
		// var rem1=screenWidth/7.5;// 设计稿为750px,那么1rem为屏幕宽度的1/7.5
		var rem1 = screenWidth / 3.75; // 设计稿为375px,那么1rem为屏幕宽度的1/3.75
		console.log(rem1);
		var html = document.querySelector("html");
		if (html.classList.contains("PC")) { // 如果设备是PC,内容展示区最宽为600px
			html.style.fontSize = "100px";
		} else {
			html.style.fontSize = rem1 + "px";
		}
	}
	setRem();
})()
