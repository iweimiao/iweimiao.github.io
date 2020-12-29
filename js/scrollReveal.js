// 懒加载动画
!function(){
  const reveal = {
    delay: 200,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom', // 从下开始
    interval: 200 // 每项间隔
  }
  ScrollReveal().reveal('.feature',reveal )
  ScrollReveal().reveal('.service-item',reveal)
  ScrollReveal().reveal('.left',reveal)
  //data区域
  ScrollReveal().reveal('.data', {
    // 滚到前触发的函数
    beforeReveal: () => {
      // 数字增长动画
      anime({
        targets: '.data-piece .num',
        innerHTML: (el) => { // 0到目标值动画
          return [0, el.innerHTML]
        },
        duration: 1000,
        round: 1, // 整数变
        easing: 'easeInExpo'
      })}})
}.call()