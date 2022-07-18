import React from 'react'
import DataTableUsuarios from '../components/DataTables/DataTableUsuarios'
import patronFondo2 from '../assets/img/patronFondo2.png'

function Usuarios() {
	return (
		<div style={{ justifyContent:'center',display:'flex', backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}}>
			<DataTableUsuarios></DataTableUsuarios>		
		</div>
	)
}

export default Usuarios