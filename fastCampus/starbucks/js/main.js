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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 5초 , 밀리세컨 단위
  },
  pagination: {
    el: '.promotion .swiper-pagination' , // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) { 
  // delay -> 지연 시간
  // size -> 위아래로 움직이는 크기
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    // 위에서 만든 random함수 
      y: size,
      repeat: -1, // -1값은 무한반복이 되도록 함. 라이브러리에서 지원하는 기능임
      yoyo: true, // 내려갔으면 올라가게 만들기
      ease: Power1.easeInOut, // 조금 더 자연스럽게 움직이게 하기
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15); 
floatingObject('.floating3', 1.5, 20); 