// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

// new Modal(document.getElementById('#exampleModal'), {
//   backdrop: 'static'
// })
// 왜 인지는 모르겠지만 해당 코드로 초기화시에는 option이 먹히지 않음...ㅜ

new Modal('#exampleModal', {
  backdrop:'static'
})