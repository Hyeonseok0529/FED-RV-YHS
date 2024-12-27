// 메인 JS

// 햄버거 버튼 클릭시 서브메뉴 호출 //
$(".hambtn").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  let isOn = $(this).is(".on");
  $(".smenu").css({ translate: isOn ? "0" : "0 calc(-100% - 104px)" });
  $("body").toggleClass("on");
});

// 장바구니 버튼 클릭시 미니카트 호출 //
const $cartBox = $(".minicart");
let protSts = false;
$(".right-menu").click(function (e) {
  if (protSts) return;
  protSts = true;
  setTimeout(() => {
    protSts = false;
  }, 800);

  e.preventDefault();
  let isOn = $cartBox.css("translate");
  console.log(isOn);
  $cartBox.css({ translate: isOn == "100%" ? "0" : "100%" });
  $("body").toggleClass("on");
});

// 서브메뉴 서브 카테고리 클릭시 이동 //
$(".smenu a,.footcatInbox a").click((e) => {
  e.preventDefault();
  let txt = $(e.currentTarget).text().toUpperCase();
  if (txt == "HOME") location.href = "index.html?key=nope";
  else if (txt == "SHOP") location.href = "sub-shop.html";
  else if (txt == "LOOKBOOK") location.href = "sub-lookbook.html";
  else if (txt == "CONTACT") location.href = "sub-contact.html";
});

// 하단영역 서브메뉴 클릭시 이동 //
// $(".footcatInbox a").click((e) => {
//   e.preventDefault();
//   let txt = $(e.currentTarget).text();
//   console.log(e);
//   if (txt == "Home") location.href = "index.html";
//   else if (txt == "Lookbook") location.href = "sub-lookbook.html";
//   else if (txt == "Contact") location.href = "sub-contact.html";
// });

// 로고 클릭시 홈페이지 이동 //
$("svg").click(function () {
  location.href = "index.html";
  e.preventDefault();
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
  // e.preventDefault();
  location.href = "sub-lookbook.html";
});

$(".shopbtn").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});

$(".shopAbtn").click((e) => {
  location.href = "sub-shop.html";
  e.preventDefault();
});
$(".productName").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});
$(".recImgbox").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});
$(".lbshopbtn").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});
$(".footCatshop").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});
$(".viewbtn").click((e) => {
  e.preventDefault();
  location.href = "sub-shop.html";
});
$(".subimg").click((e) => {
  e.preventDefault();
});

$(".total-wrap").delay(3000).slideDown(2000);
$(".in-wrap").delay(2000).animate({ paddingTop: "0" }, 1000);
$(".top-area.inbox").hide().delay(4000).fadeIn(2000);
$("h1 span").hide().delay(4000).fadeIn(2000);
$(".shopAbtn").hide().delay(4000).fadeIn(2000);
// $('.page,#footer-area').hide().delay(3000).fadeIn(1000);


// 쇼핑몰 배너 JS - 03.페이드효과 //

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

// 전역변수 //////
// 슬라이드 번호 변수
let sNum = 0;

// 1. 슬라이드 대상선정
const $slide = $(".slide>li");
// 슬라이드개수(length속성)
const SLIDE_CNT = $slide.length;

// 블릿대상
const $indic = $(".indic>li");

// 2. 이벤트 설정 및 기능구현 ////
// 2-1. 오른쪽 버튼 ///////////
$(".ab2").click(() => {
  // 광클금지
  if (blockCode()) return;

  // 슬라이드 번호증가(한계값 설정)
  sNum++;
  if (sNum == SLIDE_CNT) sNum = 0;

  // 공통처리함수 호출
  comFn();
}); /// click ///

// 2-2. 왼쪽 버튼 /////////
$(".ab1").click(() => {
  // 광클금지
  if (blockCode()) return;

  // 슬라이드 번호감소(한계값 설정)
  sNum--;
  if (sNum == -1) sNum = SLIDE_CNT - 1;

  // 공통처리함수 호출
  comFn();
}); /// click ///

// 3. 공통처리함수 만들기 ////////
function comFn() {
  // 슬라이드에 클래스 넣기 (지우기)
  $slide.eq(sNum).addClass("on").siblings().removeClass("on");

  // 블릿변경
  $indic.eq(sNum).addClass("on").siblings().removeClass("on");
} /////// comFn 함수 ///////////////

// 광클금지 상태변수
let clickSts = false;

/////// 광클 금지 함수 /////
function blockCode() {
  // 1. 광클상태 true 이면 리턴 true
  if (clickSts) return true;

  // 2. 클릭상태 전역변수 셋팅 ///
  clickSts = true; //잠금
  setTimeout(() => {
    clickSts = false; //잠금 해제
  }, 400); // 0.4초후 실행

  // 3. 광클상태 false이면 전역셋팅후 리턴 false
  return false;
} //////// blockCode 함수 //////






////////////////////////////////
//////// 자동넘김 셋팅 하기 /////
////////////////////////////////
// 인터발, 타임아웃 저장용 변수
let autoI, autoT;

// 최초호출
slideAuto();

// 1. 자동호출함수 ///
function slideAuto() {
  autoI = setInterval(() => {
    // 슬라이드 번호증가(한계값 설정)
    sNum++;
    if (sNum == SLIDE_CNT) sNum = 0;

    // 공통처리함수 호출
    comFn();
  }, 3000);
} /// slideAuto함수 ///

// 2. 지우기 함수 ////
function clearAuto() {
  clearInterval(autoI);
  clearTimeout(autoT);
  autoT = setTimeout(slideAuto, 5000);
} /// clearAuto 함수 ////

// 3. 버튼 클릭시 지우기 함수 호출 셋팅 ///
$(".abtn").click(clearAuto);
