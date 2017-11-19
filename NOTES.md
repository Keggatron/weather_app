SECTION 5
- Middleware - Middlewares are functions that take an action and depending on the actions type and the actions' payload or
  any other number of factors, the middleware can choose to let the action passthrough, it can manipulate the actions
  console.log it or it can stop it altogether before they reach any reducer.
  -> gatekeepers of sorts.
- Wrap up:
- used redux-promise to handle a promise we received from axios middleware to make ajax request
- the middleware automatically detected that a payload was sent of a promise. It stopped that action until the promise was
resolved. once it was resolved it took the data coming back from the request, stuck it onto the payload property and
sent the action on to all of the reducers in our application.
- REDUCERS - Never want to modify our state directly. Instead we created a new object that will take the place of the existing
state.

SECTION 6
- redux contains our application state which is generated by our collection of reducers that we write.
- That state is then modified by calling action creators.
- Action creators return actions that flow through middleware and then to the reducers.
- Whenever a new set of state is produced it flows into our containers and then those containers rerender themselves. And the entire process repeats all over again.