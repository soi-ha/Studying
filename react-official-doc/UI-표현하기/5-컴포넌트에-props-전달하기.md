# 🔗 [컴포넌트에 props 전달하기](https://ko.react.dev/learn/passing-props-to-a-component)

## 1. 컴포넌트 추출하기

```jsx
import { getImageUrl } from './utils.js';

function Profile({ imageId, name, profession, awards, discovery, imageSize = 70 }) {
	return (
		<section className="profile">
			<h2>{name}</h2>
			<img className="avatar" src={getImageUrl(imageId)} alt={name} width={imageSize} height={imageSize} />
			<ul>
				<li>
					<b>Profession:</b> {profession}
				</li>
				<li>
					<b>Awards: {awards.length} </b>({awards.join(', ')})
				</li>
				<li>
					<b>Discovered: </b>
					{discovery}
				</li>
			</ul>
		</section>
	);
}

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Profile
				imageId="szV5sdG"
				name="Maria Skłodowska-Curie"
				profession="physicist and chemist"
				discovery="polonium (chemical element)"
				awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
			/>
			<Profile
				imageId="YfeOqp2"
				name="Katsuko Saruhashi"
				profession="geochemist"
				discovery="a method for measuring carbon dioxide in seawater"
				awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
			/>
		</div>
	);
}
```

## 2. prop에 따라 이미지 크기 조정하기

```jsx
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
	const imgSize = size < 90 ? 's' : 'b';
	return <img className="avatar" src={getImageUrl(person, 'b')} alt={person.name} width={size} height={size} />;
}

export default function Profile() {
	return (
		<Avatar
			size={40}
			person={{
				name: 'Gregorio Y. Zara',
				imageId: '7vQD0fP',
			}}
		/>
	);
}
```

## 3. children prop에 JSX 전달하기

```jsx
function Card({ children, title }) {
	return (
		<div className="card">
			<div className="card-content">
				<h1>{title}</h1>
				{children}
			</div>
		</div>
	);
}

export default function Profile() {
	return (
		<div>
			<Card title="Photo">
				<img className="avatar" src="https://i.imgur.com/OKS67lhm.jpg" alt="Aklilu Lemma" width={100} height={100} />
			</Card>
			<Card title="About">
				<p>
					Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.
				</p>
			</Card>
		</div>
	);
}
```
