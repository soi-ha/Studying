# TIL (Today I Learned)

> 2021.01.25   
* CSS
  - 텍스트나 이미지 등을 수평으로 가운데로 정렬하기 [text-align](https://developer.mozilla.org/ko/docs/Web/CSS/text-align)  
  ```css
  text-align: center;
  ```
  이외에도 left,rigt,justify가 있다.

  - 한 줄의 텍스트를 수직 가운데로 정렬하기 [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
  ```css
  line-height: ---px;
  ```
  만약 상자가 180px일 경우 line-height: 180px 작성시 가운데에 위치    
  가운데 정렬을 위해서 사용하는 것 이외에도 글자들 사이의 간격을 조정할 수 있다.
  
  - 여러 줄의 텍스트를 수직 가운데로 정렬하기 [vertical-align](https://developer.mozilla.org/ko/docs/Web/CSS/vertical-align)
  ```html
  <div class='month'>
    <div class='day'>
      <span>오늘의 날짜는</span>
      <span>화요일 입니다.</span>
    </div>
  </div>
  ```
  ```css
  .month {display: table;}
  .month .day {display: table-cell; vertical-align: middle;}
  ````
  vertical-align은 inline 혹은 table-cell 요소에서만 사용이 가능 (이미지에서도 사용이 가능) 
  - 원하는 상자를 원하는 위치에 배치하기 [position](https://developer.mozilla.org/ko/docs/Web/CSS/position)
  ```css
  position: relative;
  top: 40px; left: 40px;
  ```
  위치를 변경하고 싶은 상자의 position을 relative로 바꾸고 원하는 위치를 작성하면 된다.
  - CSS 수치 
    + 부모나 기타 요소들에 영향을 받지 않고 항상 일정한 크기를 유지하는 단위
      + pt(포인트): 글꼴 단위, 1pt는 1/72in
      + px(픽셀): 화소. 글꼴, 여백, 위치 등을 조절 할 수 있다. 1px=1/72 of 1in
      + pc(파이커): 1pc=12pt or 1/6in
      + cm(센티미터): 1in=2.54cm
      + mm(밀리미터): 1in=25.4mm
      + in(인치): 1in=96px=2.54cm
    + 상대적인 크기를 지닌 단위/ 다른 길이 속성에 상대적으로 길이를 지정
      + em: 요소의 글꼴(기본 글꼴) 크기를 기준으로 함.
      + ex: 현재 글꼴(요소에 들어있는 현재 폰트)의 x 높이를 기준으로 함
      + rem: root em이라는 뜻. html의 root요소인 <html>을 가리킴. 이 요소에 지정된 크기를 기준으로 상대적인 값을 지님.
      + vh: 뷰 포트의 높이를 1%를 기준으로 함
