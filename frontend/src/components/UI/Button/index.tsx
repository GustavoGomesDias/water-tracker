import { MouseEvent } from 'react';
import { IconType } from 'react-icons';
import './button.css';

export interface ButtonProps {
  content?: string
  Icon?: IconType

  tooltipText?: string
  handleClick(e: MouseEvent<HTMLButtonElement>): Promise<unknown> | void
}

export const Button = ({ content, tooltipText, Icon, handleClick }: ButtonProps): JSX.Element => (
  <div id="input" className="input-box">
    {tooltipText && <div className="tooltip">
      <span>{tooltipText}</span>
    </div>}
    <button className="btn" onClick={(e) => handleClick(e)}>
      <span>{content && content} {Icon && <Icon />}</span>
    </button>
  </div>
)
