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
  console.log(props.STARTVALUE, props.count);

  return (
      <div className="counter__buttons">
        <Button onClick={props.countInc} disabled={props.count >= props.MAXVALUE}>inc</Button>
        <Button onClick={props.countReset} disabled={props.count === props.STARTVALUE}>reset</Button>
      </div>
  );
};