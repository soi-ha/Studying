# 🔗 [컴포넌트 간 State 공유하기](https://ko.react.dev/learn/sharing-state-between-components)

때때로 두 컴포넌트의 state가 항상 함께 변경되기를 원할 수 있습니다. 그렇게 하려면 각 컴포넌트에서 state를 제거하고 가장 가까운 공통의 부모 컴포넌트로 옮긴 후 props로 전달해야 합니다. 이 방법을 **State 끌어올리기**라고 하며 React 코드를 작성할 때 가장 흔히 하는 일 중 하나입니다.

## 제어와 비제어 컴포넌트

“제어되지 않은” 몇몇 지역 state를 갖는 컴포넌트를 사용하는 것은 흔한 일입니다. 예를 들어 isActive state를 갖는 원래의 Panel 컴포넌트는 해당 컴포넌트의 부모에서 패널의 활성화 여부에 영향을 줄 수 없기 때문에 제어되지 않습니다.

반대로 컴포넌트의 중요한 정보가 자체 지역 state 대신 props에 의해 만들어지는 경우 컴포넌트가 “제어된다”고 합니다. 이를 통해 부모 컴포넌트가 동작을 완전히 지정할 수 있습니다. isActive prop을 갖는 최종 Panel 컴포넌트는 Accordion 컴포넌트에 의해 제어됩니다.

비제어 컴포넌트는 설정할 것이 적어 부모 컴포넌트에서 사용하기 더 쉽습니다. 하지만 여러 컴포넌트를 함께 조정하려고 할 때 비제어 컴포넌트는 덜 유연합니다. 제어 컴포넌트는 최대한으로 유연하지만, 부모 컴포넌트에서 props로 충분히 설정해주어야 합니다.

실제로 “제어”와 “비제어”는 엄격한 기술 용어가 아니며 일반적으로 컴포넌트는 지역 state와 props를 혼합해서 사용합니다. 그러나 이런 구분은 컴포넌트의 설계와 제공하는 기능에 관해 설명하는데 유용한 방법입니다.

컴포넌트를 작성할 때 어떤 정보가 (props를 통해) 제어되어야 하고 어떤 정보가 (state를 통해) 제어되지 않아야 하는지 고려하세요. 그렇지만 언제든 마음이 바뀔 수 있고 나중에 리팩토링 할 수 있습니다.

## 요약

- 두 컴포넌트를 조정하고 싶을 때 state를 그들의 공통 부모로 이동합니다.
- 그리고 공통 부모로부터 props를 통해 정보를 전달합니다.
- 마지막으로 이벤트 핸들러를 전달해 자식에서 부모의 state를 변경할 수 있도록 합니다.
- 컴포넌트를 (props로부터) “제어”할지 (state로부터) “비제어” 할지 고려하면 유용합니다.

## 1. 동기화된 입력

```jsx
import { useState } from 'react';

export default function SyncedInputs() {
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<>
			<Input label="First input" text={text} handleChange={handleChange} />
			<Input label="Second input" text={text} handleChange={handleChange} />
		</>
	);
}

function Input({ label, text, handleChange }) {
	return (
		<label>
			{label} <input value={text} onChange={handleChange} />
		</label>
	);
}
```

## 2. 목록 필터링하기

```jsx
import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
	const [query, setQuery] = useState('');
	const results = filterItems(foods, query);

	function handleChange(e) {
		setQuery(e.target.value);
	}

	return (
		<>
			<SearchBar query={query} onChange={handleChange} />
			<hr />
			<List items={results} />
		</>
	);
}

function SearchBar({ query, onChange }) {
	return (
		<label>
			Search: <input value={query} onChange={onChange} />
		</label>
	);
}

function List({ items }) {
	return (
		<table>
			{items.map((food) => (
				<tr key={food.id}>
					<td>{food.name}</td>
					<td>{food.description}</td>
				</tr>
			))}
		</table>
	);
}
```
