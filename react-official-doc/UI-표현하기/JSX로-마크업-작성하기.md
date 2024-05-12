# 🔗 [JSX로 마크업 작성하기](https://ko.react.dev/learn/writing-markup-with-jsx)

Web이 더욱 인터랙티브해지면서, 로직이 내용을 결정하는 경우가 많아졌습니다. 그래서 JavaScript가 HTML을 담당하게 되었죠! 이것이 바로 React에서 렌더링 로직과 마크업이 같은 위치에 함께 있게 된 이유입니다. 즉, 컴포넌트에서 말이죠.

빈 태그(`<></>`)를 Fragment라고 합니다. Fragments는 브라우저상의 HTML 트리 구조에서 흔적을 남기지 않고 그룹화해 줍니다.

## 1. HTML을 JSX로 변환해보기

```jsx
export default function Bio() {
	return (
		<>
			<div className="intro">
				<h1>Welcome to my website!</h1>
			</div>
			<p className="summary">
				You can find my thoughts here.
				<br />
				<br />
				<b>
					And <i>pictures</i>
				</b> of scientists!
			</p>
		</>
	);
}
```
