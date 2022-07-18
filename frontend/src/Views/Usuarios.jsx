import React from 'react'
import patronFondo2 from '../assets/Img/patronFondo2.png'
import DataUsers from '../components/Data/DataUsers'

function Usuarios() {

	return (
		<div style={{ justifyContent:'center',display:'flex', backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}}>
			<DataUsers/>
		</div>
	)
}

export default Usuarios