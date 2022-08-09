import { Back } from '@components';
import './setup.css';

export const Setup = (): JSX.Element => {
  return (
    <div className="main">
      <Back path='/main' />
      <div className="tracker">
        <form className="setup">
          <div className="content-input">
            <label htmlFor="objective">Qunatidade objetivo:</label>
              <input type="text" id="objective" className="input" />
          </div>
        </form>
      </div>
    </div>
  )
};