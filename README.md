complete-react-developer-zero-to-mastery

E-Comerce Web page:
https://crwn-temidorocha.herokuapp.com/

1. firebase

- Transactions and batched writes - https://firebase.google.com/docs/firestore/manage-data/transactions

2. redux

## 2.1. redux-logger - https://www.npmjs.com/package/redux-logger

## 2.2. connect - https://react-redux.js.org/api/connect

- It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
- It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
- function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

## 2.3. reselect - https://www.npmjs.com/package/reselect

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

## 2.4. Redux Thunk - https://www.npmjs.com/package/redux-thunk

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

6. UTF-8 Dingbats - https://www.w3schools.com/charsets/ref_utf_dingbats.asp
7. Window.seesionStorage and localStorage differ

- localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  .8 redux-persist - https://www.npmjs.com/package/redux-persist
- Persist and rehydrate a redux store.

8. Stripe

- https://github.com/azmenak/react-stripe-checkout#send-all-the-props

9. Deploying to Heroku

- https://devcenter.heroku.com/articles/heroku-cli
- https://github.com/mars/create-react-app-buildpack

10. CSS in JS

- http://getbem.com/
- https://styled-components.com/
