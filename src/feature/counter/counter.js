import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section style={{backgroundColor:'yellow'}}>
      <p>{count}</p>
      <div style={{padding: '.5rem'}}>
        <button style={{margin:'.5em'}} onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
}

export default Counter;
