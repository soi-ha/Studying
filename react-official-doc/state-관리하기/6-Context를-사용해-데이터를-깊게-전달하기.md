# 🔗 [Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context)

보통의 경우 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 정보를 전달합니다. 그러나 중간에 많은 컴포넌트를 거쳐야 하거나, 애플리케이션의 많은 컴포넌트에서 동일한 정보가 필요한 경우에는 props를 전달하는 것이 번거롭고 불편할 수 있습니다. Context를 사용하면 명시적으로 props를 전달해주지 않아도 부모 컴포넌트가 트리에 있는 어떤 자식 컴포넌트에서나 (얼마나 깊게 있든지 간에) 정보를 사용할 수 있습니다.

1. Context를 생성하세요.
2. 데이터가 필요한 컴포넌트에서 context를 사용하세요.
3. 데이터를 지정하는 컴포넌트에서 context를 제공하세요.
   Context는 부모가 트리 내부 전체에, 심지어 멀리 떨어진 컴포넌트에조차 어떤 데이터를 제공할 수 있도록 합니다.

Context를 사용하기 전에 고려할 것
Context는 사용하기에 꽤 유혹적입니다. 그러나 이는 또한 남용하기 쉽다는 의미이기도 합니다. 어떤 props를 여러 레벨 깊이 전달해야 한다고 해서 해당 정보를 context에 넣어야 하는 것은 아닙니다.

### context를 사용하기 전 고려해볼 몇 가지 대안들입니다.

- Props 전달하기로 시작하기. 사소한 컴포넌트들이 아니라면 여러 개의 props가 여러 컴포넌트를 거쳐 가는 것은 그리 이상한 일이 아닙니다. 힘든 일처럼 느껴질 수 있지만 어떤 컴포넌트가 어떤 데이터를 사용하는지 매우 명확히 해줍니다. 데이터의 흐름이 props를 통해 분명해져 코드를 유지보수 하기에도 좋습니다.

- 컴포넌트를 추출하고 JSX를 children으로 전달하기. 데이터를 사용하지 않는 많은 중간 컴포넌트 층을 통해 어떤 데이터를 전달하는 (더 아래로 보내기만 하는) 경우에는 컴포넌트를 추출하는 것을 잊은 경우가 많습니다. 예를 들어 posts처럼 직접 사용하지 않는 props를 `<Layout posts={posts} />`와 같이 전달할 수 있습니다. 대신 Layout은 children을 prop으로 받고 `<Layout><Posts posts={posts} /><Layout>`을 렌더링하세요. 이렇게 하면 데이터를 지정하는 컴포넌트와 데이터가 필요한 컴포넌트 사이의 층수가 줄어듭니다.

만약 이 접근 방법들이 잘 맞지 않는다면 context를 고려해보세요.

## 요약

- Context는 컴포넌트가 트리 상 아래에 위치한 모든 곳에 데이터를 제공하도록 합니다.
- Context를 전달하려면 다음과 같습니다
  `. export const MyContext = createContext(defaultValue)로 context를 생성하고 내보내세요.

2. useContext(MyContext) Hook에 전달해 얼마나 깊이 있든 자식 컴포넌트가 읽을 수 있도록 합니다.
3. 자식을 `<MyContext.Provider value={...}>`로 감싸 부모로부터 context를 받도록 합니다.

- Context는 중간의 어떤 컴포넌트도 지나갈 수 있습니다.
- Context를 활용해 “주변에 적응하는” 컴포넌트를 작성할 수 있습니다.
- Context를 사용하기 전에 props를 전달하거나 JSX를 children으로 전달하는 것을 먼저 시도해보세요.

## 1. Context로 prop drilling 대체하기

```jsx
import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';

export default function App() {
	const [isLarge, setIsLarge] = useState(false);
	const imageSize = isLarge ? 150 : 100;
	return (
		<ImageSizeContext.Provider value={imageSize}>
			<label>
				<input
					type="checkbox"
					checked={isLarge}
					onChange={(e) => {
						setIsLarge(e.target.checked);
					}}
				/>
				Use large images
			</label>
			<hr />
			<List />
		</ImageSizeContext.Provider>
	);
}

function List() {
	const listItems = places.map((place) => (
		<li key={place.id}>
			<Place place={place} />
		</li>
	));
	return <ul>{listItems}</ul>;
}

function Place({ place }) {
	return (
		<>
			<PlaceImage place={place} />
			<p>
				<b>{place.name}</b>
				{': ' + place.description}
			</p>
		</>
	);
}

function PlaceImage({ place }) {
	const imageSize = useContext(ImageSizeContext);
	return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}
```
