# 🔗 [state 업데이트 큐](https://ko.react.dev/learn/queueing-a-series-of-state-updates)

### 명명 규칙

업데이터 함수 인수의 이름은 해당 state 변수의 첫 글자로 지정하는 것이 일반적입니다.

```jsx
setEnabled((e) => !e);
setLastName((ln) => ln.reverse());
setFriendCount((fc) => fc * 2);
```

좀 더 자세한 코드를 선호하는 경우 `setEnabled(enabled => !enabled)`와 같이 전체 state 변수 이름을 반복하거나, `setEnabled(prevEnabled => !prevEnabled)`와 같은 접두사를 사용하는 것이 널리 사용되는 규칙입니다.

## 요약

- state를 설정하더라도 기존 렌더링의 변수는 변경되지 않으며, 대신 새로운 렌더링을 요청합니다.
- React는 이벤트 핸들러가 실행을 마친 후 state 업데이트를 처리합니다. 이를 batching 이라고 합니다.
- 하나의 이벤트에서 일부 state를 여러 번 업데이트하려면 `setNumber(n => n + 1)` 업데이터 함수를 사용할 수 있습니다.

## 1. 요청 카운터를 고쳐보세요.

```jsx
import { useState } from 'react';

export default function RequestTracker() {
	const [pending, setPending] = useState(0);
	const [completed, setCompleted] = useState(0);

	async function handleClick() {
		setPending((p) => p + 1);
		await delay(3000);
		setPending((p) => p - 1);
		setCompleted((c) => c + 1);
	}

	return (
		<>
			<h3>Pending: {pending}</h3>
			<h3>Completed: {completed}</h3>
			<button onClick={handleClick}>Buy</button>
		</>
	);
}

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
```

## 2. state 큐를 직접 구현해 보세요.

```jsx
export function getFinalState(baseState, queue) {
	let finalState = baseState;

	for (let update of queue) {
		if (typeof update === 'function') {
			finalState = update(finalState);
		} else {
			finalState = update;
		}
	}

	return finalState;
}
```
