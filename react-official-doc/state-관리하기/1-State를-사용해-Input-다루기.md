# 🔗 [State를 사용해 Input 다루기](https://ko.react.dev/learn/reacting-to-input-with-state)

## UI를 선언적인 방식으로 생각하기

지금까지 폼을 선언적인 방식으로 구현하는 방법을 살펴보았습니다. 리액트처럼 생각하는 방법을 더 잘 이해하기 위해 UI를 리액트에서 다시 구현하는 과정을 아래에서 살펴봅시다.

1. 컴포넌트의 다양한 시각적 state를 확인하세요.
2. 무엇이 state 변화를 트리거하는지 알아내세요.
3. useState를 사용해서 메모리의 state를 표현하세요.
4. 불필요한 state 변수를 제거하세요.
5. state 설정을 위해 이벤트 핸들러를 연결하세요.

## Reducer를 사용하여 “불가능한” state 제거

```jsx
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
```

여기 폼의 state를 나타내는데 충분한 세 가지 변수가 있습니다. 하지만 세 변수는 여전히 말이 안 되는 일부 중간 state를 가지고 있습니다. 예를 들면 error가 null이 아닌데 status가 success인 것은 말이 되지 않습니다. state를 조금 더 정확하게 모델링하기 위해서는 리듀서로 분리하는 방법도 있습니다. 리듀서를 사용하면 여러 state 변수를 하나의 객체로 통합하고 관련된 모든 로직도 합칠 수 있습니다!

## 요약

- 선언형 프로그래밍은 UI를 세밀하게 직접 조작하는 것(명령형)이 아니라 각각의 시각적 state로 UI를 묘사하는 것을 의미합니다.
- 컴포넌트를 개발할 때

  1. 모든 시각적 state를 확인하세요.
  2. 휴먼이나 컴퓨터가 state 변화를 어떻게 트리거 하는지 알아내세요.
  3. useState로 state를 모델링하세요.
  4. 버그와 모순을 피하려면 불필요한 state를 제거하세요.
  5. state 설정을 위해 이벤트 핸들러를 연결하세요.

## 1. CSS class를 추가하고 제거하기

```jsx
import { useState } from 'react';

export default function Picture() {
	const [isActive, setIsActive] = useState(false);

	let backgroundClassName = 'background';
	let pictureClassName = 'picture';
	if (isActive) {
		pictureClassName += ' picture--active';
	} else {
		backgroundClassName += ' background--active';
	}

	return (
		<div className={backgroundClassName} onClick={() => setIsActive(false)}>
			<img
				onClick={(e) => {
					e.stopPropagation();
					setIsActive(true);
				}}
				className={pictureClassName}
				alt="Rainbow houses in Kampung Pelangi, Indonesia"
				src="https://i.imgur.com/5qwVYb1.jpeg"
			/>
		</div>
	);
}
```

## 2. 프로필 편집기

```jsx
import { useState } from 'react';

export default function EditProfile() {
	const [first, setFirst] = useState('Jane');
	const [second, setSecond] = useState('Jacobs');
	const [edit, setEdit] = useState(false);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setEdit(!edit);
			}}
		>
			<label>
				First name:{' '}
				{edit ? (
					<input
						value={first}
						onChange={(e) => {
							setFirst(e.target.value);
						}}
					/>
				) : (
					<b>{first}</b>
				)}
			</label>
			<label>
				Last name:{' '}
				{edit ? (
					<input
						value={second}
						onChange={(e) => {
							setSecond(e.target.value);
						}}
					/>
				) : (
					<b>{second}</b>
				)}
			</label>
			<button type="submit">{edit ? 'Save' : 'Edit'} Profile</button>
			<p>
				<i>
					Hello, {first} {second}!
				</i>
			</p>
		</form>
	);
}
```

## 3. 명령형 코드를 리액트 없이 리팩토링하기

```jsx
let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
	e.preventDefault();
	setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
	setFirstName(e.target.value);
}

function handleLastNameChange(e) {
	setLastName(e.target.value);
}

function setFirstName(value) {
	firstName = value;
	updateDOM();
}

function setLastName(value) {
	lastName = value;
	updateDOM();
}

function setIsEditing(value) {
	isEditing = value;
	updateDOM();
}

function updateDOM() {
	if (isEditing) {
		button.textContent = 'Save Profile';
		// TODO: 인풋을 보여주고 텍스트는 숨깁니다.
		hide(firstNameText);
		hide(lastNameText);
		show(firstNameInput);
		show(lastNameInput);
	} else {
		button.textContent = 'Edit Profile';
		// TODO: 인풋을 숨기고 텍스트를 보여줍니다.
		hide(firstNameInput);
		hide(lastNameInput);
		show(firstNameText);
		show(lastNameText);
	}
	// TODO: 텍스트 라벨을 업데이트합니다.
	firstNameText.textContext = firstName;
	lastNameText.textContent = lastName;
	helloText.textContext = 'Hello ' + firstName + ' ' + lastName + '!';
}

function hide(el) {
	el.style.display = 'none';
}

function show(el) {
	el.style.display = '';
}

let form = document.getElementById('form');
let profile = document.getElementById('profile');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
```
