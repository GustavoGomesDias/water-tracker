import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import  { OnClose } from '../../../wailsjs/go/backend/App';
import './home.css';

export function Home() {
    const handleOnClose = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('clicked!');
        e.preventDefault();
    }


    return (
        <div id="App">
            {/* <img src={water} alt="" /> */}
            <section className="logo">
                <h1 className="title">Water Tracker</h1>
            </section>
            <div id="input" className="input-box">
                <Link to='/main'>
                    <button className="btn">
                        Página principal
                    </button>
                </Link>

                <button className="btn close" onClick={(e) => handleOnClose(e)}>
                    Sair
                </button>
            </div>
        </div>
    )
}
