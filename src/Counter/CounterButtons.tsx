import React  from 'react';
import {Button } from '../components/Button/Button';

type CounterButtonsType = {
  countInc: () => void;
  countReset: () => void;
  count: number;
  MAXVALUE: number;
  STARTVALUE: number;
}
export function CounterButtons(props: CounterButtonsType) {
  const incBtn = <span>inc</span>
  return (
      <div className="counter__buttons">
        <Button onClick={props.countInc} disabled={props.count >= props.MAXVALUE}>{incBtn}</Button>
        <Button onClick={props.countReset} disabled={props.count !== props.STARTVALUE}>reset</Button>
      </div>
  );
};