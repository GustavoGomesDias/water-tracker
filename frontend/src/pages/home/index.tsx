import { useState } from 'react';
import { Link } from 'react-router-dom';
import water from '../../assets/images/water.gif';
import './home.css';

export function Home() {
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
            </div>
        </div>
    )
}
