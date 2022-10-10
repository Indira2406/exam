import React, {useState, ChangeEvent} from 'react';
import {CounterContent} from './CounterContent';
import {CounterButtons} from './CounterButtons';

import './Counter.css';

export function Counter() {
   const STEP = 1;
   const [startValue, setStartValue] = useState(0)
   const [maxValue, setMaxValue] = useState(5)
   const [error, setError] = useState(false)

  const [count, setCount] = useState(startValue)

  function countInc() {
    if(count >= startValue && count < maxValue) {
      setCount(count + STEP)
    }
  }

  function countReset() {
    if (count !== startValue) {
      setCount(startValue) 
    } 
  }

  const onChangeStartCount =(e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value)
    setCount(+e.currentTarget.value)
    if(maxValue <= startValue) {
      setError(true)

    } else {
      setError(false)
    }
  }

  const onChangeMaxCount =(e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value)

    if(maxValue <= startValue) {
      setError(true)
    } else {
      setError(false)
    }
  }

  
  return (
    <div className='counter'>
      <input type='number'  value={startValue} onChange={onChangeStartCount}/>
      <input type='number'  value={maxValue} onChange={onChangeMaxCount}/>
      {/* <button>Click</button> */}
      {error && 'Ошибка'}
      <CounterContent count={count} maxValue={maxValue}/>
      <CounterButtons countInc={countInc} countReset={countReset} count={count} MAXVALUE={maxValue} STARTVALUE={startValue}/>
    </div>
  );
};