UI Component based on Atomic Design Pattern

- atoms : Atom은 더 이상 쪼갤 수 없는 단위에 해당하는 요소에 해당한다. 혹은 애니메이션, 폰트, 색상 등과 같이 요소가 아닌 속성도 포함
- molecules
  - 여러 개의 Atom이 모여 만들어진 목적이 있는 하나의 컴포넌트
  - 데이터를 표시하고 이벤트를 받을 수 있지만 “하나의 역할”만을 가진다.
- organism
  - 사용자에게 의미 있는 정보를 제공하거나 인터렉션 할 수 있는 UI를 제공하는 등 서비스로서 의미를 가지는 인터페이스
  - 사용자에게 의미를 가지는 기능적 요구사항에 포함되는 경우에 해당되는 컴포넌트다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
