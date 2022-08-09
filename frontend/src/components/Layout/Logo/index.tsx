import './logo.css';
import { FaHeartbeat } from 'react-icons/fa';

export const Logo = (): JSX.Element => (
  <section className="logo">
    <span>W</span>
    <span>A</span>
    <span>T</span>
    <span>E</span>
    <span>R</span>
    <span>-</span>
    <span>F</span>
    <span>O</span>
    <span>R</span>
    <span>-</span>
    <span className="heart">
      <FaHeartbeat />
    </span>
  </section>
);

