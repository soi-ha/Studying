# 🔗 [컴포넌트 import 및 export 하기](https://ko.react.dev/learn/importing-and-exporting-components)

## 1. 컴포넌트를 한 단계 더 분리하기

- App.js

  ```jsx
  import Gallery from './Gallery.js';
  import Profile from './Profile.js';

  export default function App() {
  	return (
  		<div>
  			<Profile />
  			<Gallery />
  		</div>
  	);
  }
  ```

- Gallery.js

  ```jsx
  import Profile from './Profile.js';

  export default function Gallery() {
  	return (
  		<section>
  			<h1>Amazing scientists</h1>
  			<Profile />
  			<Profile />
  			<Profile />
  		</section>
  	);
  }
  ```

- Profile.js

  ```jsx
  export default function Profile() {
  	return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
  }
  ```
