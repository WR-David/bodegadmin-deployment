import React from 'react'
import BoxHome from '../components/Box/BoxHome'

import patronFondo2 from '../assets/img/patronFondo2.png'

function Home() {
	return (
		<div style={{backgroundImage:`url(${patronFondo2})`, width:'100%', height:'1000px' }}>
			<div align = "center"  style={{marginBottom:'1rem',marginTop:'3rem',  }}>
				<h1>Home - Alertas recientes</h1>
				<BoxHome> </BoxHome>
			</div>
		</div>
		
	)
}

export default Home