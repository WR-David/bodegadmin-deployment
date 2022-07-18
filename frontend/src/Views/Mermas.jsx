import React from 'react'
import DataTableMermas from '../components/DataTables/DataTableMermas'
import patronFondo2 from '../assets/img/patronFondo2.png'

function Mermas() {
	return (
		<div style={{ justifyContent:'center',  display:'flex', backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}}>
			<DataTableMermas></DataTableMermas>
		</div>
	)

}

export default Mermas