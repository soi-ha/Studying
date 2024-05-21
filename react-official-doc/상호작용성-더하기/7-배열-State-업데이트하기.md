# 🔗 [배열 State 업데이트하기](https://ko.react.dev/learn/updating-arrays-in-state)

## 주의하세요!

안타깝지만, slice와 splice 함수는 이름이 비슷하지만 몹시 다릅니다.

- slice를 사용하면 배열 또는 그 일부를 복사할 수 있습니다.
- splice는 배열을 변경합니다. (항목을 추가하거나 제거합니다.)

React에서는, state의 객체나 배열을 변경하지 않는 게 좋기 때문에 slice (p가 없습니다!)를 훨씬 더 자주 사용하게 될 것입니다. 객체 업데이트에서 변경이 무엇이고 왜 state에 권장되지 않는지에 대해 이유를 설명합니다.

## 요약

- 배열을 state로 만들 수 있지만 변경하면 안됩니다.
- 배열을 변경하는 대신 배열의 새로운 버전을 만들고, state를 업데이트 해야합니다.
- `[...arr, newItem]` 배열 전개 구문을 사용하여 새 항목을 포함한 배열을 생성할 수 있습니다.
- `filter()`와 `map()`을 사용하여 필터링된 항목들이나 변환된 항목들을 가진 배열을 만들 수 있습니다.
- Immer를 사용하여 코드 간결성을 유지할 수 있습니다.

## 1. 장바구니의 항목 업데이트하기

```jsx
import { useState } from 'react';

const initialProducts = [
	{
		id: 0,
		name: 'Baklava',
		count: 1,
	},
	{
		id: 1,
		name: 'Cheese',
		count: 5,
	},
	{
		id: 2,
		name: 'Spaghetti',
		count: 2,
	},
];

export default function ShoppingCart() {
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		setProducts(
			products.map((p) => {
				if (p.id === productId) {
					return { ...p, count: p.count + 1 };
				} else {
					return p;
				}
			})
		);
	}

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}
					>
						+
					</button>
				</li>
			))}
		</ul>
	);
}
```

## 2. 장바구니에서 항목 제거하기

```jsx
import { useState } from 'react';

const initialProducts = [
	{
		id: 0,
		name: 'Baklava',
		count: 1,
	},
	{
		id: 1,
		name: 'Cheese',
		count: 5,
	},
	{
		id: 2,
		name: 'Spaghetti',
		count: 2,
	},
];

export default function ShoppingCart() {
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		setProducts(
			products.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						count: product.count + 1,
					};
				} else {
					return product;
				}
			})
		);
	}

	function handleDecreaseClick(productId) {
		let nextProducts = products.map((product) => {
			if (product.id === productId) {
				return {
					...product,
					count: product.count - 1,
				};
			} else {
				return product;
			}
		});
		nextProducts = nextProducts.filter((p) => p.count > 0);
		setProducts(nextProducts);
	}

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							handleDecreaseClick(product.id);
						}}
					>
						–
					</button>
				</li>
			))}
		</ul>
	);
}
```

## 3. 비변경 함수를 사용하여 변경 수정하기

```jsx
import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
	{ id: 0, title: 'Buy milk', done: true },
	{ id: 1, title: 'Eat tacos', done: false },
	{ id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
	const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
		setTodos([
			...todos,
			{
				id: nextId++,
				title: title,
				done: false,
			},
		]);
	}

	function handleChangeTodo(nextTodo) {
		setTodos(
			todos.map((t) => {
				if (t.id === nextTodo.id) {
					return nextTodo;
				} else {
					return t;
				}
			})
		);
	}

	function handleDeleteTodo(todoId) {
		setTodos(todos.filter((t) => t.id !== todoId));
	}

	return (
		<>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
		</>
	);
}
```

## 4. Immer를 사용해서 변경 수정하기

```jsx
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
	{ id: 0, title: 'Buy milk', done: true },
	{ id: 1, title: 'Eat tacos', done: false },
	{ id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
	const [todos, updateTodos] = useImmer(initialTodos);

	function handleAddTodo(title) {
		updateTodos((draft) => {
			draft.push({
				id: nextId++,
				title: title,
				done: false,
			});
		});
	}

	function handleChangeTodo(nextTodo) {
		updateTodos((draft) => {
			const todo = draft.find((t) => t.id === nextTodo.id);
			todo.title = nextTodo.title;
			todo.done = nextTodo.done;
		});
	}

	function handleDeleteTodo(todoId) {
		updateTodos((draft) => {
			const index = draft.findIndex((t) => t.id === todoId);
			draft.splice(index, 1);
		});
	}

	return (
		<>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
		</>
	);
}
```
