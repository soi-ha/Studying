# 🔗 [State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory)

## 요약

- 컴포넌트가 렌더링 간에 어떤 정보를 “기억”해야 할 때 state 변수를 사용합니다.
- state 변수는 useState 훅을 호출하여 선언합니다.
- 훅은 use로 시작하는 특별한 함수들입니다. 이들은 state와 같은 React 기능에 “연결”할 수 있도록 해줍니다.
- 훅은 import와 마찬가지로 반드시 호출되어야 합니다. useState를 포함한 훅을 호출하는 것은 컴포넌트나 다른 훅의 최상위 수준에서만 유효합니다.
- useState 훅은 현재 state와 이를 업데이트할 함수로 이루어진 한 쌍을 반환합니다.
- 여러 개의 state 변수를 가질 수 있습니다. React 내부에서는 그들을 순서대로 매칭합니다.
- state는 컴포넌트에 비공개입니다. 두 곳에서 렌더링하더라도 각각의 복사본은 고유한 state를 가집니다.

## 1. 갤러리 완성하기

```jsx
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	let hasPrev = index > 0;
	let hasNext = index < sculptureList.length - 1;

	function handlePrevClick() {
		if (hasPrev) {
			setIndex(index - 1);
		}
	}

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			<button onClick={handlePrevClick} disabled={!hasPrev}>
				Previous
			</button>
			<button onClick={handleNextClick} disabled={!hasNext}>
				Next
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}
```

## 2. 폼 입력 불가 문제 고치기

```jsx
import { useState } from 'react';
export default function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function handleFirstNameChange(e) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e) {
		setLastName(e.target.value);
	}

	function handleReset() {
		setFirstName('');
		setLastName('');
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
			<input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
			<h1>
				Hi, {firstName} {lastName}
			</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}
```

## 3. 충돌 고치기

```jsx
import { useState } from 'react';

export default function FeedbackForm() {
	const [isSent, setIsSent] = useState(false);
	const [message, setMessage] = useState('');
	if (isSent) {
		return <h1>Thank you!</h1>;
	} else {
		// eslint-disable-next-line

		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(`Sending: "${message}"`);
					setIsSent(!isSent);
				}}
			>
				<textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
				<br />
				<button type="submit">Send</button>
			</form>
		);
	}
}
```

## 4. 불필요한 state 제거하기

```jsx
import { useState } from 'react';

export default function FeedbackForm() {
	function handleClick() {
		const name = prompt('What is your name?');
		alert(`Hello, ${name}!`);
	}

	return <button onClick={handleClick}>Greet</button>;
}
```
