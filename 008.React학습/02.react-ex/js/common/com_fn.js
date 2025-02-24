// 공통 처리 JS - com_fn.js

// [세자리 comma] //
const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

// [ 2. 초이스 인트로 애니 함수] //
const choiceIntroAni = () => {
    // 공유 / 효진으로 선택 변경시에만 실행 : useEffect(함수,[])
    // 아이템 변경은 selItem 상태변수에 연관되어 있음!
    // 이 변수를 의존성에 등록해준다!

    // (1) 타이틀 확대 / 축소 애니
    // - span은 inline이므로 트랜스폼 적용안됨
    // - 그래서 inline-block 변경함!
    $('.tit span')
    .css({display:'inline-block'})
    .animate({scale: "200%"},1000)
    .animate({scale: "100%"},1000);

    // (2) 초이스 메인 이미지 애니
    $('.img-box img')
    .delay(700).fadeTo(1000,1);

    // (3) 소제목 애니
    $('.stit')
    .delay(1500).fadeTo(1000,1);

}; // choiceIntroAni 함수 // 
// [ 3. 로고 애니 함수] //
const logoAni = () => {
  // 로고 최초한번만 애니 - useEffect(함수,[])
  $('#logo')
  .animate({scale: "200%", rotate: "360deg"}, 1000)
  .animate({scale: "100%", rotate: "0deg"}, 1000);
}
// [ 4. 셋팅 초기화 함수 ] // 
const initFn = () => {
    // 초기화는 화면 렌더링 전에 해주는 것이 좋다! 
    // -> useLayoutEffect()에서 호출해주자!
    // 의존성은 selItem으로 설정!
    $('.img-box img, .stit').css({opacity:0});
}; // initFn //

// 함수 내보내기 //
export { addCommas, logoAni, choiceIntroAni, initFn };