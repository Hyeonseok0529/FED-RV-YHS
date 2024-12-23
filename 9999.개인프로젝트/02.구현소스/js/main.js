// 메인 JS

// 햄버거 버튼 클릭시 서브메뉴 호출 //
$(".hambtn").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  let isOn = $(this).is(".on");
  $(".smenu").css({ translate: isOn ? "0" : "0 -150%" });
  $("body").toggleClass("on");
});

// 장바구니 버튼 클릭시 미니카트 호출 //
const $cartBox = $(".minicart");
let protSts = false;
$(".right-menu").click(function (e) {
  if(protSts) return;
  protSts = true;
  setTimeout(() => { protSts = false; }, 800);


  e.preventDefault();
  let isOn = $cartBox.css("translate");
  console.log(isOn);
  $cartBox.css({ translate: isOn == "100%" ? "0" : "100%" });
  $("body").toggleClass("on");
});

// 서브메뉴 서브 카테고리 클릭시 이동 //
$(".smenu a").click((e) => {
  let txt = $(e.currentTarget).text();
  if (txt == "HOME") location.href = "index.html";
  else if (txt == "LOOKBOOK") location.href = "sub-lookbook.html";
  else if (txt == "CONTACT") location.href = "contact.html";
});

// 로고 클릭시 홈페이지 이동 //
$("svg").click(function () {
  location.href = "index.html";
});

// 장바구니 close 클릭시 나가기 //
$(".close").click(function (e) {
  e.preventDefault();
  let isOn = $cartBox.css("translate");
  console.log(isOn);
  $cartBox.css({ translate: isOn == "100%" ? "0" : "100%" });
  $("body").toggleClass("on");
});
// CONTINUE SHOPPING 버튼 클릭시 나가기 //
$(".conshop").click(function (e) {
  e.preventDefault();
  let isOn = $cartBox.css("translate");
  console.log(isOn);
  $cartBox.css({ translate: isOn == "100%" ? "0" : "100%" });
  $("body").toggleClass("on");
});

// 메인 페이지 SEE LOOKBOOK 버튼 //
$(".lbbtn").click(() => {
  location.href = "sub-lookbook.html";
});



$('.total-wrap').delay(2000).slideDown(1000);
$('.in-wrap').delay(2000).animate({paddingTop:'0'},1000);
$('#top-area').hide().delay(3000).fadeIn(1000);
// $('.page,#footer-area').hide().delay(3000).fadeIn(1000);
