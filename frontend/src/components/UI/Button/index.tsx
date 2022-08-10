import { MouseEvent } from 'react';
import { IconType } from 'react-icons';
import './button.css';

export interface ButtonProps {
  content?: string
  Icon?: IconType

  tooltipText?: string
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<unknown> | void
  type?: 'submit'
}

export const Button = ({ content, tooltipText, Icon, handleClick, type }: ButtonProps): JSX.Element => (
  <div id="input" className="input-box">
    {tooltipText && <div className="tooltip">
      <span>{tooltipText}</span>
    </div>}
    <button className="btn" onClick={handleClick && ((e) => handleClick(e))} type={type ? type : 'button'}>
      {content && <p className="btn-content">{content}</p>}
      {Icon && <span>{<Icon />}</span>}
    </button>
  </div>
)
