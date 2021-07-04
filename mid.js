/*헤더*/ 
$(function() { 

    var lastScrollTop = 0, delta = 15;

    $(window).scroll(function(){
    var scrollTop = $(this).scrollTop() /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
    // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
    if(Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
    return; // ~ 리턴
    
    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
        $(".scroll_01").css("top","-100px");
    } else {
        $(".scroll_01").css("top","0px");
    }
    lastScrollTop = scrollTop;
    });
    


});



/*헤더*/ 
$(function() { 

// Making an array of points.
let xs = []
for (var i = 0; i <= 500; i++) {
  xs.push(i)
} 

// time
let t = 0

function animate() {
  
  // calculating where every 'point' should be.
  let points = xs.map(x => {
    
    let y = 100 + 50 * Math.sin((x + t) / 50)
    
    return [x, y]
  })
  
  // Turning 'points' into an HTML atribute. 
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  // replaces the current 'path' with a new one.
  document.querySelector("path").setAttribute("d", path)
  
  // +1 to time
  t += 1
  
  // looping the 'animate' function
  requestAnimationFrame(animate)
}

// strats the 'animation' function
animate()


});




