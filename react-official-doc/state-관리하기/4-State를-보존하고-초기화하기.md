# 🔗 [State를 보존하고 초기화하기](https://ko.react.dev/learn/preserving-and-resetting-state)

## 제거된 컴포넌트의 state를 보존하기

실제 채팅 앱에서는 이전의 수신자를 선택했을 때 입력값이 복구되는 것을 원할 것입니다. 보이지 않는 컴포넌트의 state를 “살아 있게”하는 몇 가지 방법이 있습니다.

- 현재 채팅만 렌더링하는 대신 모든 채팅을 렌더링하고 CSS로 안 보이게 할 수 있습니다. 채팅은 트리에서 사라지지 않을 것이고 따라서 그들의 state는 유지됩니다. 이 방법은 간단한 UI에서 잘 작동합니다. 하지만 숨겨진 트리가 크고 많은 DOM 노드를 가지고 있다면 매우 느려질 것입니다.
- state를 상위로 올리고 각 수신자의 임시 메시지를 부모 컴포넌트에 가지고 있을 수 있습니다. 이 방법에서 부모가 중요한 정보를 가지고 있기 때문에 자식 컴포넌트가 제거되어도 상관이 없습니다. 이것이 가장 일반적인 해법입니다.
- React state 이외의 다른 저장소를 이용할 수도 있습니다. 예를 들어 유저가 페이지를 실수로 닫아도 메시지를 유지하고 싶을 수도 있습니다. 이때 localStorage에 메시지를 저장하고 이를 이용해 Chat 컴포넌트를 초기화할 수 있습니다.

어떤 방법을 선택하더라도 Alice와의 채팅은 Bob과의 채팅과 개념상 구별되기 때문에 현재 수신자를 기반으로 <Chat> 트리에 key를 주는 것이 타당합니다.

## 요약

- React는 같은 컴포넌트가 같은 자리에 렌더링되는 한 state를 유지합니다.
- state는 JSX 태그에 저장되지 않습니다. state는 JSX으로 만든 트리 위치와 연관됩니다.
- 컴포넌트에 다른 key를 주어서 그 하위 트리를 초기화하도록 강제할 수 있습니다.
- 중첩해서 컴포넌트를 정의하면 원치 않게 state가 초기화될 수 있기 때문에 그렇게 하지 마세요.

## 1. 입력 문자열이 사라지는 것 고치기

```jsx
import { useState } from 'react';

export default function App() {
	const [showHint, setShowHint] = useState(false);

	return (
		<div>
			{showHint && (
				<p>
					<i>Hint: Your favorite city?</i>
				</p>
			)}
			<Form />
			<button
				onClick={() => {
					setShowHint(!showHint);
				}}
			>
				{showHint ? 'Hide hint' : 'Show Hint'}
			</button>
		</div>
	);
}

function Form() {
	const [text, setText] = useState('');
	return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
```

## 2. 두 필드를 맞바꾸기

```jsx
import { useState } from 'react';

export default function App() {
	const [reverse, setReverse] = useState(false);
	let checkbox = (
		<label>
			<input type="checkbox" checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
			Reverse order
		</label>
	);

	return (
		<>
			{reverse ? (
				<>
					<Field label="First name" key="1" />
					<Field label="Last name" key="2" />
				</>
			) : (
				<>
					<Field label="Last name" key="2" />
					<Field label="First name" key="1" />
				</>
			)}

			{checkbox}
		</>
	);
}

function Field({ label }) {
	const [text, setText] = useState('');
	return (
		<label>
			{label}: <input type="text" value={text} placeholder={label} onChange={(e) => setText(e.target.value)} />
		</label>
	);
}
```

## 3. 폼 세부내용을 초기화하기

```jsx
import { useState } from 'react';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

export default function ContactManager() {
	const [contacts, setContacts] = useState(initialContacts);
	const [selectedId, setSelectedId] = useState(0);
	const selectedContact = contacts.find((c) => c.id === selectedId);

	function handleSave(updatedData) {
		const nextContacts = contacts.map((c) => {
			if (c.id === updatedData.id) {
				return updatedData;
			} else {
				return c;
			}
		});
		setContacts(nextContacts);
	}

	return (
		<div>
			<ContactList contacts={contacts} selectedId={selectedId} onSelect={(id) => setSelectedId(id)} />
			<hr />
			<EditContact key={selectedId} initialData={selectedContact} onSave={handleSave} />
		</div>
	);
}

const initialContacts = [
	{ id: 0, name: 'Taylor', email: 'taylor@mail.com' },
	{ id: 1, name: 'Alice', email: 'alice@mail.com' },
	{ id: 2, name: 'Bob', email: 'bob@mail.com' },
];
```

## 4. 이미지가 로딩될 동안 이미지가 안 보이게 하기

```jsx
import { useState } from 'react';

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const hasNext = index < images.length - 1;

	function handleClick() {
		if (hasNext) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	}

	let image = images[index];
	return (
		<>
			<button onClick={handleClick}>Next</button>
			<h3>
				Image {index + 1} of {images.length}
			</h3>
			<img key={image.src} src={image.src} />
			<p>{image.place}</p>
		</>
	);
}

let images = [
	{
		place: 'Penang, Malaysia',
		src: 'https://i.imgur.com/FJeJR8M.jpg',
	},
	{
		place: 'Lisbon, Portugal',
		src: 'https://i.imgur.com/dB2LRbj.jpg',
	},
	{
		place: 'Bilbao, Spain',
		src: 'https://i.imgur.com/z08o2TS.jpg',
	},
	{
		place: 'Valparaíso, Chile',
		src: 'https://i.imgur.com/Y3utgTi.jpg',
	},
	{
		place: 'Schwyz, Switzerland',
		src: 'https://i.imgur.com/JBbMpWY.jpg',
	},
	{
		place: 'Prague, Czechia',
		src: 'https://i.imgur.com/QwUKKmF.jpg',
	},
	{
		place: 'Ljubljana, Slovenia',
		src: 'https://i.imgur.com/3aIiwfm.jpg',
	},
];
```

## 5. 배열에서 잘못 지정된 state 고치기

```jsx
import { useState } from 'react';
import Contact from './Contact.js';

export default function ContactList() {
	const [reverse, setReverse] = useState(false);

	const displayedContacts = [...contacts];
	if (reverse) {
		displayedContacts.reverse();
	}

	return (
		<>
			<label>
				<input
					type="checkbox"
					value={reverse}
					onChange={(e) => {
						setReverse(e.target.checked);
					}}
				/>{' '}
				Show in reverse order
			</label>
			<ul>
				{displayedContacts.map((contact) => (
					<li key={contact.id}>
						<Contact contact={contact} />
					</li>
				))}
			</ul>
		</>
	);
}

const contacts = [
	{ id: 0, name: 'Alice', email: 'alice@mail.com' },
	{ id: 1, name: 'Bob', email: 'bob@mail.com' },
	{ id: 2, name: 'Taylor', email: 'taylor@mail.com' },
];
```
