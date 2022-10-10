import React from 'react';

type CounterContentProps = {
  count: number;
  maxValue: number;
}
export function CounterContent(props: CounterContentProps)  {
  return (
    <div className={`counter__content ${props.count === props.maxValue ? 'red' : ''}`}>
      {props.count}
    </div>
  );
};

