// Job: is to update the state when an action happens.
// It is managing the state that lives in the store

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter + action.anything
      })

    case 'DECREMENT_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter - action.by
      })

      // return {
      //   ...state,
      //   counter: state.counter + action.by
      // }

    default:
      return state
  }

  // if(action.type === '') {
  //   return {}
  // } else {
  //   return state
  // }
}

export default counterReducer
