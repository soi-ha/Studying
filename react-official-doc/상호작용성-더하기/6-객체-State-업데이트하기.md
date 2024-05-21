# 🔗 [객체 State 업데이트하기](https://ko.react.dev/learn/updating-objects-in-state)

## 변경이란?

state에 있는 이러한 객체를 생각해보세요.

`const [position, setPosition] = useState({ x: 0, y: 0 });`
기술적으로 객체 자체 의 내용은 바꿀 수 있습니다. 이것을 **변경(mutation)** 이라고 합니다.

## 전개 문법으로 객체 복사하기

... 전개 문법은 “얕다”는 점을 알아두세요. 이것은 한 레벨 깊이의 내용만 복사합니다. 빠르지만, 중첩된 프로퍼티를 업데이트하고 싶다면 한 번 이상 사용해야 한다는 뜻이기도 합니다.

## Immer로 간결한 갱신 로직 작성하기

state가 깊이 중첩되어있다면 평탄화를 고려해보세요. 만약 state 구조를 바꾸고 싶지 않다면, 중첩 전개할 수 있는 더 간편한 방법이 있습니다. Immer는 편리하고, 변경 구문을 사용할 수 있게 해주며 복사본 생성을 도와주는 인기 있는 라이브러리입니다. Immer를 사용하면 작성한 코드는 “법칙을 깨고” 객체를 변경하는 것처럼 보일 수 있습니다.

```jsx
updatePerson((draft) => {
	draft.artwork.city = 'Lagos';
});
```

하지만 일반적인 변경과는 다르게 이것은 이전 state를 덮어쓰지 않습니다!

### Immer는 어떻게 작동할까요?

Immer가 제공하는 draft는 Proxy라고 하는 아주 특별한 객체 타입으로, 당신이 하는 일을 “기록” 합니다. 객체를 원하는 만큼 자유롭게 변경할 수 있는 이유죠! Immer는 내부적으로 draft의 어느 부분이 변경되었는지 알아내어, 변경사항을 포함한 완전히 새로운 객체를 생성합니다.

### Immer를 사용하기 위해서는,

`package.json`에 dependency로 `use-immer`를 추가하세요
`npm install`을 실행하세요  
`import { useState } from 'react'를 import { useImmer } from 'use-immer'`로 교체하세요.

## 왜 리액트에서 state 변경은 권장되지 않나요?

몇 가지 이유가 있습니다.

- **디버깅**: 만약 console.log를 사용하고 state를 변경하지 않는다면, 과거 로그들은 가장 최근 state 변경 사항들에 의해 지워지지 않습니다. 따라서 state가 렌더링 사이에 어떻게 바뀌었는지 명확하게 알 수 있습니다.
- **최적화**: 보편적인 리액트 최적화 전략은 이전 props 또는 state가 다음 것과 동일할 때 일을 건너뛰는 것에 의존합니다. state를 절대 변경하지 않는다면 변경사항이 있었는지 확인하는 작업이 매우 빨라집니다. prevObj === obj를 통해 내부적으로 아무것도 바뀌지 않았음을 확인할 수 있습니다.
- **새로운 기능**: 우리가 만드는 새로운 리액트 기능들은 스냅샷처럼 다루어지는 것에 의존합니다. 만약 state의 과거 버전을 변경한다면, 새로운 기능을 사용하지 못할 수 있습니다.
- **요구사항 변화**: 취소/복원 구현, 변화 내역 조회, 사용자가 이전 값으로 폼을 재설정하기 등의 기능은 아무것도 변경되지 않았을 때 더 쉽습니다. 왜냐하면 당신은 메모리에 state의 이전 복사본을 저장하여 적절한 상황에 다시 사용할 수 있기 때문입니다. 변경하는 것으로 시작하게 되면 이러한 기능들은 나중에 추가하기 어려울 수 있습니다.
- **더 간단한 구현**: 리액트는 변경에 의존하지 않기 때문에 객체로 뭔가 특별한 것을 할 필요가 없습니다. 프로퍼티를 가져오거나, 항상 프록시로 감싸거나, 다른 많은 “반응형” 솔루션이 그러듯 초기화 시에 다른 작업을 하지 않아도 됩니다. 이것은 리액트가 state에 —얼마나 크던— 추가적인 성능 또는 정확성 함정 없이 아무 객체나 넣을 수 있게 해주는 이유이기도 합니다.

실제로, 리액트에서 state를 변경하는 것으로 “도망”쳐버릴수도 있지만, 우리는 그렇게 하지 않기를 강하게 권장함으로써 당신이 이러한 접근법을 바탕으로 개발된 새로운 리액트 기능들을 사용할 수 있기를 바랍니다. 미래의 기여자들과 어쩌면 미래의 당신 스스로까지 고마워할 것입니다!

## 요약

- 리액트의 모든 state를 불변한 것으로 대하세요.
- state에 객체를 저장할 때, 객체를 변경하는 것은 렌더링을 발생시키지 않으며 이전 렌더 “스냅샷”의 state를 바꿀 것입니다.
- 객체를 변경하는 대신 새로운 객체를 생성하여 state를 설정함으로써 리렌더링을 일으키세요.
- 객체의 복사본을 만들기 위해 `{...obj, something: 'newValue'}` 객체 전개 구문을 사용할 수 있습니다.
- 전개 구문은 얕습니다. 그것은 한 레벨 깊이만 복사합니다.
- 중첩된 객체를 업데이트하기 위해서는 변경하는 부분에서부터 시작하여 객체의 모든 항목의 복사본을 만들어야 합니다.
- 반복적인 복사 코드를 줄이기 위해서 Immer를 사용하세요.

## 1. 잘못된 state 업데이트 고치기

```jsx
import { useState } from 'react';

export default function Scoreboard() {
	const [player, setPlayer] = useState({
		firstName: 'Ranjani',
		lastName: 'Shettar',
		score: 10,
	});

	function handlePlusClick() {
		setPlayer({ ...player, score: player.score + 1 });
	}

	function handleFirstNameChange(e) {
		setPlayer({
			...player,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e) {
		setPlayer({
			...player,
			lastName: e.target.value,
		});
	}

	return (
		<>
			<label>
				Score: <b>{player.score}</b> <button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input value={player.firstName} onChange={handleFirstNameChange} />
			</label>
			<label>
				Last name:
				<input value={player.lastName} onChange={handleLastNameChange} />
			</label>
		</>
	);
}
```

## 2. 변경 사항을 찾아 고치세요

```jsx
import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas() {
	const [shape, setShape] = useState({
		color: 'orange',
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		const modifyMove = {
			x: shape.position.x + dx,
			y: shape.position.y + dy,
		};
		setShape({ ...shape, position: modifyMove });
	}

	function handleColorChange(e) {
		setShape({
			...shape,
			color: e.target.value,
		});
	}

	return (
		<>
			<select value={shape.color} onChange={handleColorChange}>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box color={shape.color} position={shape.position} onMove={handleMove}>
				Drag me!
			</Box>
		</>
	);
}
```

## 3. Immer로 객체 업데이트하기

```jsx
import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas() {
	const [shape, setShape] = useImmer({
		color: 'orange',
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		setShape((draft) => {
			(draft.position.x += dx), (draft.position.y += dy);
		});
	}

	function handleColorChange(e) {
		setShape({
			...shape,
			color: e.target.value,
		});
	}

	return (
		<>
			<select value={shape.color} onChange={handleColorChange}>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box color={shape.color} position={shape.position} onMove={handleMove}>
				Drag me!
			</Box>
		</>
	);
}
```
