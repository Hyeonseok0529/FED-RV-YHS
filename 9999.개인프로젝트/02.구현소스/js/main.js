// 메인 JS

$(".hambtn").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  let isOn = $(this).is(".on");
  $(".smenu").css({ translate: isOn ? "0" : "0 -220%" });
  $("body").toggleClass("on");
});

const $cartBox = $(".minicart");
$(".right-menu").click(function (e) {
  e.preventDefault();
  let isOn = $cartBox.css("translate");
  console.log(isOn);
  $cartBox.css({ translate: isOn == "100%" ? "0" : "100%" });
  $("body").toggleClass("on");
});

$(".smenu a").click((e) => {
  let txt = $(e.currentTarget).text();
  if (txt == "HOME") location.href = "index.html";
  else if (txt == "LOOKBOOK") location.href = "sub-lookbook.html";
  else if (txt == "CONTACT") location.href = "contact.html";
});
