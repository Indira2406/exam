import React from 'react';
import './Button.css';

type ButtonType = {
  onClick: ()=> void;
  className?: string;
  disabled: boolean;
  children: React.ReactNode;
}
export function Button (props: ButtonType) {
  return (
      <button className={props.className} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </button>

  );
};

