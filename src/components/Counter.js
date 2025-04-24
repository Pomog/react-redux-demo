import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Click: <strong>{count}</strong></p>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}

export default Counter;