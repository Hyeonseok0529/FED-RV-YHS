// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const myFn = {
  qs: (x) => document.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsEl: (el, x) => el.querySelector(x),
  qsaEl: (el, x) => el.querySelectorAll(x),
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  cs: (x) => console.log(x),
  addZero: (x) => (x < 10 ? "0" + x : x),
  dfm: (x) =>
    `${x.getFullYear()}-${myFn.addZero(x.getMonth() + 1)}-${myFn.addZero(
      x.getDate()
    )}(${week[x.getDay()]})`,
}; ///////// myFn 객체 //////////

// 요일변경배열 ////
const week = ["일", "월", "화", "수", "목", "금", "토"];

// 달력함수 호출
makeCalendar();

function makeCalendar() {
  myFn.cs("달력만들어!");

  // 1. 변수셋팅 ////////////////////
  // (1) 변경할 현재날짜 객체
  const currDate = new Date();
  // (2) 오늘날짜 객체
  const today = new Date();
  // (3) 년도요소 : .yearTit
  const yearTit = myFn.qs(".yearTit");
  // (4) 월요소 : .monthTit
  const monthTit = myFn.qs(".monthTit");
  // (5) 날짜요소 : .dates
  const dates = myFn.qs(".dates");
  // (6) 날짜넣을 배열변수
  const dateSet = [];
  // (7) html 코드 저장변수
  let hcode = "";

  // 2. 함수 만들기 //
  // (1) 달력 초기화 구성함수 //
  const initializeCalender = () => {
    // 1) 변수 초기화

    // 2) 변수할당
    // 현재년
    let currentYear = currDate.getFullYear();

    // 현재달 : 배열순번
    let currentMonth = currDate.getMonth();

    // [선택달  끝날짜, 첫날짜 알아오기]
    // new Date(년도,월,옵션)
    // (1) 년도
    // (2) 월
    // (3) 옵션 : 0 - 이전달끝날짜 / 1 - 현재달첫날짜

    // 3) 날짜 데이터 셋업 //
    // [1] 전달 마지막 날짜(옵션:0)
    const prevLast = new Date(currentYear, currentMonth, 0);
    myFn.cs("전달 마지막 날짜:" + myFn.dfm(prevLast));

    // [2] 현재달 첫째 날짜(옵션 : 1)
    const thisFirst = new Date(currentYear, currentMonth, 1);
    myFn.cs("현재달 첫째 날짜:" + myFn.dfm(thisFirst));

    // [3] 현재달 마지막 날짜(다음달 옵션 : 0)
    const thisLast = new Date(currentYear, currentMonth + 1, 0);
    myFn.cs("현재달 마지막 날짜:" + myFn.dfm(thisLast));

    // 4) 년도 월 정보 화면표시하기 //
    // [1] 년도표시
    yearTit.innerHTML = currentYear;
    // [2] 월표시 (배열순번 + 1)
    monthTit.innerHTML = currentMonth + 1;

    // 5) 날짜 데이터 태그 구성하기 //
    // [1] 전달날짜 앞쪽 채우기
    // 조건 : 현재달 첫날짜 요일이 0이 아니면 내용 있음!
    // -> 0이면 일요일이기때문에 첫칸부터 채워짐
    let firstDay = thisFirst.getDay();
    myFn.cs("이번달 첫날요일:" + firstDay);
    if (firstDay != 0) {
      // true 인 경우 for문
      for (let i = 0; i < firstDay; i++) {
        // 반복횟수만큼 배열 앞쪽에 추가
        // 이때 숫자를 i만큼 빼서 1씩 감소
        // 이전달은 클래스 'bm(before this month)'으로 구분
        dateSet.unshift(`
            <span style="color: #ccc" class="bm"> 
            ${prevLast.getDate() - i}
            </span>
                `);
      } // for //
    } // if //

    // [2] 현재월 날짜 삽입
    // 반복문 구성 : 현재월 1일부터 마지막 날짜까지 반복 배열추가
    for (let i = 1; i <= thisLast.getDate(); i++) {
      dateSet.push(i);
    } // for //

    // [3] 다음달 나머지칸 삽입하기
    // 다음달 클래스 'am'으로 구분
    // 반복구성 : 1부터 2주분량
    for (let i = 1; i <= 14; i++) {
      dateSet.push(`
            <span style="color: #ccc" class="am"> ${i} </span>
            `);
    } // for //

    // 날짜 배열값 확인
    myFn.cs("dateSet:" + dateSet);

    // 6) 날짜 배열 -> 태그 구성
    // 구성요건 : 7일 * 6주 = 42일
    for(let i = 0; i < 42; i++){
      hcode += `<div class ="date">${dateSet[i]}</div>`;
    } // for //
  
    // 날짜태그 출력 //
    dates.innerHTML = hcode;


  }; // initializeCalender //


  // 초기셋팅함수 호출
  initializeCalender();
} /////////////// makeCalendar ////////////
