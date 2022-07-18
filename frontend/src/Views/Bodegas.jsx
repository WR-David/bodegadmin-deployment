import React from 'react'
import DataTableBodegas from '../components/DataTables/DataTableBodegas'
import patronFondo2 from '../assets/img/patronFondo2.png'

function Bodegas() {
	return (
		<div style={{ justifyContent:'center', display:'flex', backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}}>
			<DataTableBodegas>  </DataTableBodegas>		
		</div>
	)
}

export default Bodegas