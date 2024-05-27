# 🔗 [Reducer와 Context로 앱 확장하기](https://ko.react.dev/learn/scaling-up-with-reducer-and-context)

props를 통한 전달 대신 tasks state와 dispatch 함수를 모두 context에 넣고 싶은 이유입니다. 이렇게 하면 트리에서 TaskApp 아래에 있는 모든 컴포넌트가 “prop drilling”이라는 반복적인 작업 없이 tasks와 dispatch actions를 읽을 수 있습니다.

Reducer와 context를 결합하는 방법은 아래와 같습니다.

1. Context를 생성한다.
2. State과 dispatch 함수를 context에 넣는다.
3. 트리 안에서 context를 사용한다.

## 요약

- Reducer와 context를 결합해서 컴포넌트가 상위 state를 읽고 수정할 수 있도록 할 수 있습니다.
- State와 dispatch 함수를 하위 컴포넌트들에 제공하는 방법
  1. 두 개의 context를 만듭니다(각각 state와 dispatch 함수를 위한 것).
  2. Reducer를 사용하는 컴포넌트에 두 context를 모두 제공합니다.
  3. 하위 컴포넌트들에서 필요한 context를 사용합니다.
- 더 나아가 하나의 파일로 합쳐서 컴포넌트들을 정리할 수 있습니다.
  - Context를 제공하는 TasksProvider 같은 컴포넌트를 내보낼 수 있습니다.
  - 바로 사용할 수 있도록 useTasks와 useTasksDispatch 같은 사용자 Hook을 내보낼 수 있습니다.
- context-reducer 조합을 앱에 여러 개 만들 수 있습니다.
