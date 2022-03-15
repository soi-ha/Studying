const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); //위에서 찾아둔 searchEl에서 input요소를 찾음

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // input요소를 포커스
} );
// click할 시 함수 실행 (이때 함수를 '핸들러'라고 부른다)

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 특정요소(searchEl)에 클래스 정보를 가지고 있는 객체에서 어떤 클래스 내용을 추가함
  // focused -> 포커스가 된 상태 의미 
  // 검색(search)부분에 focused가 추가 되면 css를 통해서 선택자가 무엇이 추가됐을 때 스타일을 어떻게 바꿀 지 선언할 수 있음
  searchInputEl.setAttribute('placeholder', '통합검색');
  // html의 속성을 attribute라 함. html의 속성을 지정함
  // 첫번째 인수: 속성 이름, 두번째 인수: 속성에 들어갈 실제 값
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 옵션에는 css속성과 값들을 입력할 수 있다.
    gsap.to(badgeEl, .6, {
      opacity: 0,
      // 화면에서 진짜로 사라지게 만들어주기
      // 이전에는 이미지만 안 보일 뿐 영역은 그대로 잡혔음
      display: 'none' 
    });
  } else {
    // 500이하인 경우, 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// Loadsh의 throttle기능은 화면을 스크롤할 때 실행되는 함수의 갯수를 일정시간에 한번씩만 실행되도록
// 제한을 걸었음 _.throttle(함수, 시간) -> 시간은 milli second단위로 한다.
// 화면에서 스크롤 이벤트를 이용해 작업을 할 때 굉장히 많이 사용한다. ->익명의 함수가 굉장히 많이 실행되기 때문에 줄이기 위함임

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 그림들이 순차적으로 나오도록 만듦
    opacity: 1
  });
});