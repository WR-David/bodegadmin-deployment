import React from 'react'
import './Styles/InputStyle.css'
import logoOficial from '../../assets/Img/logoOficial.png'
import fondoLogin3 from '../../assets/Img/fondoLogin3.png'
import axios from 'axios'

function Formulario({ dato, setDatos, login }) {

    const armando = (e) => {
        setDatos({
            ...dato, [e.target.name]: e.target.value
        })
    }

    const call = () => {
       login(true)
    }

    return (
        <div className='newContainer'>
            <div className='Login-Container'>
                <div className='img-Logo'>
                    <img src={logoOficial} alt='Bodegadmin' width="100%" />
                </div>
                <h3 className='login-text'>Iniciar Sesión</h3>
                <div className='input-Container'>
                    <label htmlFor='RUT' />
                    <input className="newInput" name='rut' type='email' placeholder='RUT' onChange={armando} />
                </div>
                <div className='input-Container'>
                    <hr />
                    <input className="newInput" name='pass' type='password' placeholder='CONTRASEÑA' onChange={armando} />
                    <label htmlFor='pass'></label>
                </div>
                {/* <div className='msgError'>{error}</div> */}
                <button type='submit' onClick={call}>INICIAR SESIÓN</button>
            </div>
            <div className='imgLogin'>
                <img src={fondoLogin3} alt='' width="100%" />
            </div>
        </div>
    )
}

export default Formulario