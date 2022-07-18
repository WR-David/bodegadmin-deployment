import React from 'react'
import DataTableInsumos from '../components/DataTables/DataTableInsumos'
import patronFondo2 from '../assets/img/patronFondo2.png'

function Insumos() {
	return (
		<div style={{ justifyContent:'center',  display:'flex' , backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}}>
			<DataTableInsumos></DataTableInsumos>		
		</div>
	)
}

export default Insumos