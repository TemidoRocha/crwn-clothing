complete-react-developer-zero-to-mastery

E-Comerce Web page:
https://crwn-temidorocha.herokuapp.com/

## 1. firebase

- Transactions and batched writes - https://firebase.google.com/docs/firestore/manage-data/transactions

## 2. redux

2.1. redux-logger - https://www.npmjs.com/package/redux-logger

2.2. connect - https://react-redux.js.org/api/connect

- It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
- It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
- function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

  2.3. reselect - https://www.npmjs.com/package/reselect
  A selector is a function that accepts Redux state as an argument and returns data that is derived from that state. Selectors can provide performance optimizations to your application and can also help you encapsulate your global state tree. If your application is growing large and unwieldy, you may benefit from creating your own selectors or using a library such as Reselect, which utilizes memoized selectors.

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

  2.4. Redux Thunk - https://www.npmjs.com/package/redux-thunk

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
if redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an Object,
the middleware will call that function with dispatch method itself as the first argument

2.5 redux-persist - https://www.npmjs.com/package/redux-persist

- Persist and rehydrate a redux store.

Window.sessionStorage and localStorage differ
a. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.
b. https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
c. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

2.6 redux-saga - https://www.npmjs.com/package/redux-saga

- takeLatest, take, takeEvery, delay, put (https://github.com/ZhangMYihua/redux-saga-take-takelatest-takeevery)

## 3. UTF-8 Dingbats - https://www.w3schools.com/charsets/ref_utf_dingbats.asp

## 4. Stripe

- https://github.com/azmenak/react-stripe-checkout#send-all-the-props
- https://www.npmjs.com/package/stripe

## 5. Deploying to Heroku

- https://devcenter.heroku.com/articles/heroku-cli
- https://github.com/mars/create-react-app-buildpack

## 6. CSS in JS

- http://getbem.com/
- https://styled-components.com/

## 7. Generator Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

- the idea is to able to pause a function according to our needs

## 8. React Hooks - https://reactjs.org/docs/hooks-intro.html

## Node server

- https://www.npmjs.com/package/concurrently

## 9. Performance (also shouldComponentUpdate() , useCallback() vs useMemo() )

## 9.1 React Memo -> for functions

- https://reactjs.org/docs/react-api.html#reactmemo

## 9.2 React PureComponent -> for classes

- https://reactjs.org/docs/react-api.html#reactpurecomponent

## 9.3 compression library

- https://www.npmjs.com/package/compression
