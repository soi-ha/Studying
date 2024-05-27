# 🔗 [State 구조 선택하기](https://ko.react.dev/learn/choosing-the-state-structure)

## State 구조화 원칙

상태를 갖는 구성요소를 작성할 때, 사용할 state 변수의 수와 데이터의 형태를 선택해야 합니다. 최적이 아닌 state 구조에서도 올바른 프로그램을 작성할 수 있지만, 더 나은 선택을 할 수 있는 몇 가지 원칙이 있습니다.

1. 연관된 state 그룹화하기. 두 개 이상의 state 변수를 항상 동시에 업데이트한다면, 단일 state 변수로 병합하는 것을 고려하세요.
2. State의 모순 피하기. 여러 state 조각이 서로 모순되고 “불일치”할 수 있는 방식으로 state를 구성하는 것은 실수가 발생할 여지를 만듭니다. 이를 피하세요.
3. 불필요한 state 피하기. 렌더링 중에 컴포넌트의 props나 기존 state 변수에서 일부 정보를 계산할 수 있다면, 컴포넌트의 state에 해당 정보를 넣지 않아야 합니다.
4. State의 중복 피하기. 여러 상태 변수 간 또는 중첩된 객체 내에서 동일한 데이터가 중복될 경우 동기화를 유지하기가 어렵습니다. 가능하다면 중복을 줄이세요.
5. 깊게 중첩된 state 피하기. 깊게 계층화된 state는 업데이트하기 쉽지 않습니다. 가능하면 state를 평탄한 방식으로 구성하는 것이 좋습니다.

이러한 원칙 뒤에 있는 목표는 오류 없이 상태를 쉽게 업데이트하는 것 입니다. State에서 불필요하고 중복된 데이터를 제거하면 모든 데이터 조각이 동기화 상태를 유지하는 데 도움이 됩니다. 이는 데이터베이스 엔지니어가 데이터베이스 구조를 “정규화”하여 버그 발생 가능성을 줄이는 것과 유사합니다. 알베르트 아인슈타인의 말을 빌리자면, “당신의 state를 가능한 한 단순하게 만들어야 한다, 더 단순하게 가 아니라.”

## Props를 state에 미러링하지 마세요.

다음 코드는 불필요한 state의 일반적인 예입니다.

```jsx
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
```

여기서 color state 변수는 messageColor prop로 초기화됩니다. 문제는 부모 컴포넌트가 나중에 다른 값의 messageColor를 전달한다면 (예를 들어, 'blue' 대신 'red'), color state 변수 가 업데이트되지 않습니다! State는 첫 번째 렌더링 중에만 초기화됩니다.

그 때문에 state 변수의 일부 prop를 “미러링”하면 혼란이 발생할 수 있습니다. 대신 코드에 messageColor prop를 직접 사용하세요. 더 짧은 이름을 지정하려면 상수를 사용하세요.

```jsx
function Message({ messageColor }) {
  const color = messageColor;
```

이렇게 하면 부모 컴포넌트에서 전달된 prop와 동기화를 잃지 않습니다.

Props를 상태로 “미러링”하는 것은 특정 prop에 대한 모든 업데이트를 무시하기를 원할 때에만 의미가 있습니다. 관례에 따라 prop의 이름을 initial 또는 default로 시작하여 새로운 값이 무시됨을 명확히 하세요.

```jsx
function Message({ initialColor }) {
  // The `color` state variable holds the *first* value of `initialColor`.
  // Further changes to the `initialColor` prop are ignored.
  const [color, setColor] = useState(initialColor);
```

## 요약

- 만약 두 state 변수가 항상 함께 업데이트된다면, 하나로 합치는 것을 고려해 보세요.
- State 변수를 신중하게 선택하여 “불가능한” state를 만들지 않도록 하세요.
- State를 업데이트할 때 실수할 가능성을 줄이도록 state를 구조화하세요.
- 동기화를 유지하지 않아도 되도록 불필요하고 중복된 state를 피하세요.
- 특별히 업데이트를 방지하려는 경우를 제외하고는 props를 state에 넣지 마세요.
- 선택과 같은 UI 패턴의 경우, 객체 자체가 아닌 ID 또는 인덱스를 state에 유지하세요.
- 깊게 중첩된 state를 업데이트하는 것이 복잡한 경우, 평탄하게 만들어 보세요.

## 1. 업데이트되지 않는 컴포넌트 수정하기

```jsx
import { useState } from 'react';

export default function Clock(props) {
	return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
```

## 2. 깨진 포장 목록 수정하기

### 내가 수정 한 것 (에러는 해결 됨)

```jsx
import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
	{ id: 0, title: 'Warm socks', packed: true },
	{ id: 1, title: 'Travel journal', packed: false },
	{ id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
	const [items, setItems] = useState(initialItems);
	const [total, setTotal] = useState(3);
	const [packed, setPacked] = useState(1);

	function handleAddItem(title) {
		setTotal(total + 1);
		setItems([
			...items,
			{
				id: nextId++,
				title: title,
				packed: false,
			},
		]);
	}

	function handleChangeItem(nextItem) {
		if (nextItem.packed) {
			setPacked(packed + 1);
		} else {
			setPacked(packed - 1);
		}
		setItems(
			items.map((item) => {
				if (item.id === nextItem.id) {
					return nextItem;
				} else {
					return item;
				}
			})
		);
	}

	function handleDeleteItem(itemId) {
		setTotal(total - 1);
		setPacked(packed - 1);
		setItems(items.filter((item) => item.id !== itemId));
	}

	return (
		<>
			<AddItem onAddItem={handleAddItem} />
			<PackingList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
			<hr />
			<b>
				{packed} out of {total} packed!
			</b>
		</>
	);
}
```

### 해설 정답

```jsx
import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
	{ id: 0, title: 'Warm socks', packed: true },
	{ id: 1, title: 'Travel journal', packed: false },
	{ id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
	const [items, setItems] = useState(initialItems);

	const total = items.length;
	const packed = items.filter((item) => item.packed).length;

	function handleAddItem(title) {
		setItems([
			...items,
			{
				id: nextId++,
				title: title,
				packed: false,
			},
		]);
	}

	function handleChangeItem(nextItem) {
		setItems(
			items.map((item) => {
				if (item.id === nextItem.id) {
					return nextItem;
				} else {
					return item;
				}
			})
		);
	}

	function handleDeleteItem(itemId) {
		setItems(items.filter((item) => item.id !== itemId));
	}

	return (
		<>
			<AddItem onAddItem={handleAddItem} />
			<PackingList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
			<hr />
			<b>
				{packed} out of {total} packed!
			</b>
		</>
	);
}
```

## 3. 선택 사라짐 수정하기

```jsx
import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
	const [letters, setLetters] = useState(initialLetters);
	const [highlightedId, setHighlightedId] = useState(null);

	function handleHover(letterId) {
		setHighlightedId(letterId);
	}

	function handleStar(starredId) {
		setLetters(
			letters.map((letter) => {
				if (letter.id === starredId) {
					return {
						...letter,
						isStarred: !letter.isStarred,
					};
				} else {
					return letter;
				}
			})
		);
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isHighlighted={letter.id === highlightedId}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
```

## 4. 다중 선택 구현

```jsx
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
	const [selectedIds, setSelectedIds] = useState([]);

	const selectedCount = selectedIds.length;

	function handleToggle(toggledId) {
		if (selectedIds.includes(toggledId)) {
			setSelectedIds(selectedIds.filter((id) => id !== toggledId));
		} else {
			setSelectedIds([...selectedIds, toggledId]);
		}
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isSelected={selectedIds.includes(letter.id)}
						onToggle={handleToggle}
					/>
				))}
				<hr />
				<p>
					<b>You selected {selectedCount} letters</b>
				</p>
			</ul>
		</>
	);
}
```
