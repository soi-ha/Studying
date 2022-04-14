// 여러 페이지에서 동일하게 사용하는 것들

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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해를 계산해줌