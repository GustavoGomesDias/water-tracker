import './back.css';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <button className="back-btn" onClick={() => navigate('/')}>
        <BsArrowLeft /> Voltar
      </button>
    </div>
  );
}