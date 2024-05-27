# 🔗 [state 로직을 reducer로 작성하기](https://ko.react.dev/learn/extracting-state-logic-into-a-reducere)

## reducer를 사용하여 state 로직 통합하기

reducer는 state를 다루는 다른 방법입니다. 다음과 같은 세가지 단계에 걸쳐 useState에서 useReducer로 바꿀 수 있습니다.

1. state를 설정하는 것에서 action을 dispatch 함수로 전달하는 것으로 바꾸기.
2. reducer 함수 작성하기.
3. 컴포넌트에서 reducer 사용하기.

### 1단계: state를 설정하는 것에서 action을 dispatch 함수로 전달하는 것으로 바꾸기

reducer를 사용한 state 관리는 state 직접 설정하는 것과 약간 다릅니다. state를 설정하여 React에게 “무엇을 할 지”를 지시하는 대신, 이벤트 핸들러에서 “action”을 전달하여 “사용자가 방금 한 일”을 지정합니다. (state 업데이트 로직은 다른 곳에 있습니다!) 즉, 이벤트 핸들러를 통해 ”tasks를 설정”하는 대신 “task를 추가/변경/삭제”하는 action을 전달하는 것입니다. 이러한 방식이 사용자의 의도를 더 명확하게 설명합니다.

dispatch 함수에 넣어준 객체를 “action” 이라고 합니다.

```jsx
function handleDeleteTask(taskId) {
	dispatch(
		// "action" 객체:
		{
			type: 'deleted',
			id: taskId,
		}
	);
}
```

이 객체는 일반적인 자바스크립트 객체입니다. 이 안에 어떤 것이든 자유롭게 넣을 수 있지만, 일반적으로 어떤 상황이 발생하는지에 대한 최소한의 정보를 담고 있어야합니다. (dispatch 함수 자체에 대한 부분은 이후 단계에서 다룰 예정입니다.)

#### 중요합니다!

action 객체는 어떤 형태든 될 수 있습니다. 그렇지만 발생한 일을 설명하는 문자열 type 을 넘겨주고 이외의 정보는 다른 필드에 담아서 전달하도록 작성하는 게 일반적입니다. type은 컴포넌트에 따라 값이 다르며 이 예시의 경우 'added' 또는 'added_task' 둘 다 괜찮습니다. 무슨 일이 일어나는지를 설명할 수 있는 이름을 넣어주면 됩니다.

```jsx
dispatch({
	// 컴포넌트마다 다른 값
	type: 'what_happened',
	// 다른 필드는 이곳에
});
```

### 2단계: reducer 함수 작성하기

reducer 함수는 state에 대한 로직을 넣는 곳 입니다. 이 함수는 현재의 state 값과 action 객체, 이렇게 두 개의 인자를 받고 다음 state 값을 반환합니다.

```jsx
function yourReducer(state, action) {
	// React가 설정하게될 다음 state 값을 반환합니다.
}
```

React는 reducer에서 반환한 값을 state에 설정합니다.

이 예시에서 이벤트 핸들러에 구현 되어있는 state 설정과 관련 로직을 reducer 함수로 옮기기 위해서 다음과 같이 해보겠습니다.

1. 첫 번째 인자에 현재 state (tasks) 선언하기.
2. 두 번째 인자에 action 객체 선언하기.
3. reducer에서 다음 state 반환하기. (React가 state에 설정하게 될 값)

reducer 함수는 state(tasks)를 인자로 받고 있기 때문에, 이를 컴포넌트 외부에서 선언할 수 있습니다. 이렇게 하면 들여쓰기 수준이 줄어들고 코드를 더 쉽게 읽을 수 있습니다.

#### 중요합니다!

위 코드에서 if/else 문을 사용하고 있지만 reducer 함수 안에서는 **switch 문을 사용하는 게 규칙입니다.** 물론 결과는 같지만, switch 문으로 작성하는 것이 한눈에 읽기 더 쉬울 수 있습니다.

각자 다른 case 속에서 선언된 변수들이 서로 충돌하지 않도록 case 블록을 중괄호인 {와 }로 감싸는 걸 추천합니다. 또 case는 일반적인 경우라면 return으로 끝나야합니다. return 하는 것을 잊으면 코드가 다음 case로 “떨어져” 실수할 수 있습니다!

### 3단계: 컴포넌트에서 reducer 사용하기

`const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);`

useReducer 훅은 초기 state 값을 입력받아 유상태(stateful) 값을 반환한다는 점과 state를 설정하는 함수(useReducer의 경우는 dispatch 함수를 의미)의 원리를 보면 useState와 비슷합니다. 하지만 조금 다른 점이 있습니다.

useReducer 훅은 두 개의 인자를 넘겨받습니다.

1. reducer 함수
2. 초기 state 값
   그리고 아래와 같이 반환합니다.

3. state를 담을 수 있는 값
4. dispatch 함수 (사용자의 action을 reducer 함수에게 “전달하게 될”)

## useState와 useReducer 비교하기

reducer가 좋은 점만 있는 것은 아닙니다! 아래에서 useState와 useReducer를 비교할 수 있는 몇 가지 방법을 소개하겠습니다.

- 코드 크기: 일반적으로 useState를 사용하면, 미리 작성해야 하는 코드가 줄어듭니다. useReducer를 사용하면 reducer 함수 그리고 action을 전달하는 부분 둘 다 작성해야 합니다. 하지만 여러 이벤트 핸들러에서 비슷한 방식으로 state를 업데이트하는 경우, useReducer를 사용하면 코드의 양을 줄이는 데 도움이 될 수 있습니다.

- 가독성: useState로 간단한 state를 업데이트하는 경우 가독성이 좋은 편입니다. 그렇지만 더 복잡한 구조의 state를 다루게 되면 컴포넌트의 코드 양이 더 많아져 한눈에 읽기 어려워질 수 있습니다. 이 경우 useReducer를 사용하면 업데이트 로직이 어떻게 동작하는지와 이벤트 핸들러를 통해서 무엇이 발생했는지 구현한 부분을 명확하게 구분할 수 있습니다.

- 디버깅: useState를 사용하며 버그를 발견했을 때, 왜, 어디서 state가 잘못 설정됐는지 찾기 어려울 수 있습니다. useReducer를 사용하면, 콘솔 로그를 reducer에 추가하여 state가 업데이트되는 모든 부분과 왜 해당 버그가 발생했는지(어떤 action으로 인한 것인지)를 확인할 수 있습니다. 각 action이 올바르게 작성되어 있다면, 버그를 발생시킨 부분이 reducer 로직 자체에 있다는 것을 알 수 있을 것입니다. 그렇지만 useState를 사용하는 경우보다 더 많은 코드를 단계별로 실행해서 디버깅 해야 하는 점이 있기도 합니다.

- 테스팅: reducer는 컴포넌트에 의존하지 않는 순수 함수입니다. 이는 reducer를 독립적으로 분리해서 내보내거나 테스트할 수 있다는 것을 의미합니다. 일반적으로 더 현실적인 환경에서 컴포넌트를 테스트하는 것이 좋지만, 복잡한 state를 업데이트하는 로직의 경우 reducer가 특정 초기 state 및 action에 대해 특정 state를 반환한다고 생각하고 테스트하는 것이 유용할 수 있습니다.

- 개인적인 취향: reducer를 좋아하는 사람도 있지만, 그렇지 않는 사람들도 있습니다. 괜찮습니다. 이건 선호도의 문제이니까요. useState와 useReducer는 동일한 방식이기 때문에 언제나 마음대로 바꿔서 사용해도 무방합니다.

만약 일부 컴포넌트에서 잘못된 방식으로 state를 업데이트하는 것으로 인한 버그가 자주 발생하거나 해당 코드에 더 많은 구조를 도입하고 싶다면 reducer 사용을 권장합니다. 이때 모든 부분에 reducer를 적용하지 않아도 됩니다. useState와 useReducer를 마음대로 섞고 매치하세요! 이 둘은 심지어 같은 컴포넌트 안에서도 사용할 수 있습니다.

## reducer 잘 작성하기

reducer를 작성할 때, 다음과 같은 두 가지 팁을 명심하세요.

- Reducers는 반드시 순수해야 합니다. state updater functions와 비슷하게, reducer는 렌더링 중에 실행됩니다! (action은 다음 렌더링까지 대기합니다.) 이것은 reducer는 반드시 순수해야한다는 걸 의미합니다.—즉, 입력 값이 같다면 결과 값도 항상 같아야 합니다. 요청을 보내거나 timeout을 스케쥴링하거나 사이드 이펙트(컴포넌트 외부에 영향을 미치는 작업)을 수행해서는 안 됩니다. reducer는 objects와 arrays을 변이 없이 업데이트해야 합니다.

- 각 action은 데이터 안에서 여러 변경들이 있더라도 하나의 사용자 상호작용을 설명해야 합니다. 예를 들어, 사용자가 reducer가 관리하는 5개의 필드가 있는 양식에서 ‘재설정’을 누른 경우, 5개의 개별 set_field action보다는 하나의 reset_form action을 전송하는 것이 더 합리적입니다. 모든 action을 reducer에 기록하면 어떤 상호작용이나 응답이 어떤 순서로 일어났는지 재구성할 수 있을 만큼 로그가 명확해야 합니다. 이는 디버깅에 도움이 됩니다!

## 요약

- useState에서 useReducer로 변환하려면:
  1. 이벤트 핸들러에서 action을 전달합니다.
  2. 주어진 state와 action에 대해 다음 state를 반환하는 reducer 함수를 작성합니다.
  3. useState를 useReducer로 바꿉니다.
- reducer를 사용하면 코드를 조금 더 작성해야 하지만 디버깅과 테스트에 도움이 됩니다.
- reducer는 반드시 순수해야 합니다.
- 각 action은 단일 사용자 상호작용을 설명해야 합니다.
- 객체와 배열을 변이하는 스타일로 reducer를 작성하려면 Immer 라이브러리를 사용하세요.
