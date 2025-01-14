// sub-js //

// 갤러리 사진클릭시 원본보기//
// 이벤트 대상 : .gallery > div
$('.gallery>div').click(function(){
console.log("미리보기!")

// 1. 클릭된 박스의 데이터 읽어오기
let currImg = $(this).find("img").html();

}) ///// click /////