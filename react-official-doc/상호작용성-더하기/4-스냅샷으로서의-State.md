# 🔗 [스냅샷으로서의 State](https://ko.react.dev/learn/state-as-a-snapshot)

## 요약

- state를 설정하면 새 렌더링을 요청합니다.
- React는 컴포넌트 외부에 마치 선반에 보관하듯 state를 저장합니다.
- useState를 호출하면 React는 해당 렌더링에 대한 state의 스냅샷을 제공합니다.
- 변수와 이벤트 핸들러는 다시 렌더링해도 “살아남지” 않습니다. 모든 렌더링에는 고유한 이벤트 핸들러가 있습니다.
- 모든 렌더링(및 그 안의 함수)은 항상 React가 그 렌더링에 제공한 state의 스냅샷을 “보게” 됩니다.
- 렌더링 된 JSX에 대해 생각하는 방식과 유사하게 이벤트 핸들러에서 state를 대체할 수 있습니다.
- 과거에 생성된 이벤트 핸들러는 그것이 생성된 렌더링 시점의 state 값을 갖습니다.

## 1. 신호등 구현하기

```jsx
import { useState } from 'react';

export default function TrafficLight() {
	const [walk, setWalk] = useState(true);

	function handleClick() {
		if (!walk) {
			alert('다음은 걷기입니다.');
		} else {
			alert('다음은 정지입니다.');
		}
		setWalk(!walk);
	}

	return (
		<>
			<button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
			<h1
				style={{
					color: walk ? 'darkgreen' : 'darkred',
				}}
			>
				{walk ? 'Walk' : 'Stop'}
			</h1>
		</>
	);
}
```
