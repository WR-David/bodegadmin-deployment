import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'

function Login({setCon}){

	const [dato, setDatos] = useState({rut:'', pass:''})
	
	return (
		<Formulario dato={dato} setDatos={setDatos} login={setCon}/>
	)
}
export default Login