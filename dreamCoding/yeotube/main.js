const morebutton = document.querySelector('.y_content .meta .morebutton')
const title = document.querySelector('.y_content .meta .title')
/* html안에 있는 momrebutton을 morebutton 변수에 할당. title도 마찬가지 */

morebutton.addEventListener('click', () => {
    morebutton.classList.toggle('clicked');
    title.classList.toggle('clamp');
})

/* morebutton이 클릭이 되면 morebutton의 클래스를 클릭이
됐는지 안됐는지 토글을 함. title의 클래스를 클램프 하라는지 안하라는지 
토글을 할 것임 */ 