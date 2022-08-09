import './back.css';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export interface BackProps {
  path: string
}

export const Back = ({ path }: BackProps) => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <button className="back-btn" onClick={() => navigate(path)}>
        <BsArrowLeft /> Voltar
      </button>
    </div>
  );
}