import React from "react";
import { Button } from "../components/Button/Button";
import "./InitialValues.css";

type CounterInputsType = {
  error: boolean;
  maxValue: number;
  startValue: number;
  onClickSetButton: () => void;
  startValueInputRef: any;
  maxValueInputRef: any;
};
export function InitialValues(props: CounterInputsType) {
  return (
<div className="counter">


    <div className="counter-values">
        <div className="counter__labels">
          <div>StartValue</div>
          <div>MaxValue</div>
        </div>
        <div className="counter__inputs">
          <input
            type="number"
            ref={props.startValueInputRef}
            min={0}
            defaultValue={props.startValue}
            className={`counter__input  ${props.error ? "input_error" : ""}`}
          />

          <input
            type="number"
            min={0}
            defaultValue={props.maxValue}
            ref={props.maxValueInputRef}
            className={`counter__input  ${props.error ? "input_error" : ""}`}
          />
        </div>
     
    </div>
     {props.error && (
        <div className="counter__error">
          Ошибка! Начальное число не может быть равным или больше максимального
        </div>
      )}
      <Button className="counter-set" onClick={props.onClickSetButton}>
        set
      </Button>
      </div>
  );
}
