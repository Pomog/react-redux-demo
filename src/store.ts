import { createStore } from 'redux';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const increment = (): CounterAction => ({ type: 'INCREMENT' });
export const decrement = (): CounterAction => ({ type: 'DECREMENT' });

export default store;
