// actions descirbe when something has happened
// notifies when a state change is needed

// 1. increment counter
// 2. decrement counter

// {type: '', payload}

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const incrementCounter = (by) => {
  return {
    type: INCREMENT_COUNTER,
    by
  }
}

const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const decrementCounter = (by) => {
    return {
      type: DECREMENT_COUNTER,
      by
    }
}
