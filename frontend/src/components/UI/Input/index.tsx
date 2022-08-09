import { ChangeEvent } from "react";
import './input.css'

export interface InputProps {
  labelTxt: string
  value: string
  type: 'number' | 'text'
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ labelTxt, value, type, handleOnChange }: InputProps): JSX.Element => (
  <div className="content-input">
    <label htmlFor="objective">{labelTxt}</label>
    <input type={type} id="objective" className="input" value={value} onChange={handleOnChange} />
  </div>
);
