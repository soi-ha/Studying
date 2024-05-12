# 🔗 [중괄호가 있는 JSX 안에서 자바스크립트 사용하기](https://ko.react.dev/learn/javascript-in-jsx-with-curly-braces)

JSX에는 문자열, 숫자 및 기타 JavaScript 표현식뿐만 아니라 객체를 전달할 수도 있습니다. 또한 객체는 { name: "Hedy Lamarr", inventions: 5 }처럼 중괄호로 표시됩니다. 따라서 JSX에서 객체를 전달하려면 person={{ name: "Hedy Lamarr", inventions: 5 }}와 같이 다른 중괄호 쌍으로 객체를 감싸야 합니다.

JSX의 인라인 CSS 스타일에서도 볼 수 있습니다. React에서 인라인 스타일을 사용할 필요가 없습니다(CSS class는 대부분 잘 작동합니다). 그러나 인라인 스타일이 필요할 때 style 어트리뷰트에 객체를 전달해야 합니다.

## 1. 실수 고치기

```jsx
const person = {
	name: 'Gregorio Y. Zara',
	theme: {
		backgroundColor: 'black',
		color: 'pink',
	},
};

export default function TodoList() {
	return (
		<div style={person.theme}>
			<h1>{person.name}'s Todos</h1>
			<img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
			<ul>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</div>
	);
}
```

## 2. 정보를 객체로 추출하기

```jsx
const person = {
	name: 'Gregorio Y. Zara',
	theme: {
		backgroundColor: 'black',
		color: 'pink',
	},
	img: 'https://i.imgur.com/7vQD0fPs.jpg',
};

export default function TodoList() {
	return (
		<div style={person.theme}>
			<h1>{person.name}'s Todos</h1>
			<img className="avatar" src={person.img} alt={person.name} />
			<ul>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</div>
	);
}
```

## 3. JSX 중괄호 안에 표현식 작성하기

```jsx
const baseUrl = 'https://i.imgur.com/';
const person = {
	name: 'Gregorio Y. Zara',
	imageId: '7vQD0fP',
	imageSize: 's',
	theme: {
		backgroundColor: 'black',
		color: 'pink',
	},
};

export default function TodoList() {
	return (
		<div style={person.theme}>
			<h1>{person.name}'s Todos</h1>
			<img className="avatar" src={baseUrl + person.imageId + person.imageSize + '.jpg'} alt={person.name} />
			<ul>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</div>
	);
}
```
