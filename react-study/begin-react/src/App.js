import React, { useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;


// import React, { useRef, useState, useMemo } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };

//   const onRemove = id => {
//     setUsers(users.filter(user => user.id !== id));
//   };
//   const onToggle = id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   };
//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// import React, { useRef, useState } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };

//   const onRemove = id => {
//     setUsers(users.filter(user => user.id !== id));
//   };
//   const onToggle = id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   };
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import UserList from './UserList';

// function App() {
//   return (
//     <UserList />
//   );
// }

// export default App;


// import React from 'react';
// import Counter from './Counter';

// function App() {
//   return (
//     <Counter />
//   );
// }

// export default App;


// import React from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';

// function App() {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial />
//       <Hello color="pink"/>
//     </Wrapper>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24,
//     padding: '1rem'
//   }

//   return (
//     <>
//       {/* 주석은 화면에 보이지 않는다! */}
//       <Hello />
//       <div style={style}>{name}</div>
//       <div className='gray-box'>{name}</div>
//     </>
//   );
// }



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
