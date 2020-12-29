window.addEventListener("scroll", () => {
  //sticky header
  const wrapTop = document.querySelector(".contentWrap").offsetTop;
  const scrollToTop = document.querySelector(".scrollToTop");
  if (window.scrollY > wrapTop) {
    document.querySelector("header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
  // toTop
  if (window.scrollY > 1700) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
  // 根据页面位置高亮对应nav
  const disEls = document.querySelectorAll("[data-d]");
  const aTags = document.querySelectorAll(".nav a");
  disEls.forEach((el, index) => {
    // 如果接近某个板块
    if (Math.abs(disEls[index].getBoundingClientRect().top) <= 50) {
      aTags.forEach((el) => {
        el.classList.remove("active");
      });
      aTags[index].classList.add("active");
    }
  });
});
//isotope 按分类排版
const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",
  itemSelector: ".case-item",
});
const filterBtns = document.querySelectorAll(".filter-btns"); //[]
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let { target } = e;
    let btnOptions = target.getAttribute("data-filter");
    if (btnOptions) {
      document.querySelectorAll(".filter-btn.active").forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
      isotope.arrange({ filter: btnOptions });
    }
  });
});
// 点击锚点跳转动画
const theScroll = new SmoothScroll("a", {
  header: "header",
  //滑动到的位置的偏移量
  offset: -80,
  speed: 400,
});

//导航按钮
const barsEl = document.querySelector('.bars')
const headerEl = document.querySelector('header')
const nav = document.querySelector('header nav')
barsEl.addEventListener('click',()=>{
  headerEl.classList.toggle('open')
})
nav.addEventListener('click',()=>{
  headerEl.classList.remove('open')
})

// 图片懒加载
var imgs = document.querySelectorAll('img[data-img]');
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var winTop = window.innerHeight;
		for(var i=0;i < imgs.length;i++){
			if(imgs[i].offsetTop < scrollTop + winTop ){
        imgs[i].src = imgs[i].getAttribute('data-img');
			}
		}
  }