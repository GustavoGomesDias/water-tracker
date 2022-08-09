import './input.css'

export interface InputProps {
  labelTxt: string
  value: string | number
  type: 'number' | 'text'
  handleOnChange: React.Dispatch<React.SetStateAction<any>>
}

export const Input = ({ labelTxt, value, type, handleOnChange }: InputProps): JSX.Element => (
  <div className="content-input">
    <label htmlFor="objective">{labelTxt}</label>
    <input type={type} id="objective" className="input" value={value} onChange={(e) => {
      e.preventDefault();
      handleOnChange(e.target.value);
    }} />
  </div>
);
