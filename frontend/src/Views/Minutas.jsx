import React from 'react'
import BoxCalculadoraMinutas from '../components/Box/BoxCalculadoraMinutas'
import BoxImagenReceta from '../components/Box/BoxImagenReceta'
import styled from 'styled-components'
import patronFondo2 from '../assets/img/patronFondo2.png'




const BoxTitulo =  styled.div `
  height: 100px;
  width: 400px;
  background-color: #68df4bd8;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 20px ;
  padding: 2px;
`


export default function Minutas() {
	return (
		
		<div align="center" style={{ backgroundImage:`url(${patronFondo2})`,width:'100%', height:'1000px'}} >
			<BoxTitulo style={{marginBottom:'50px'}}>
				<h1>Módulo de minutas</h1>
			</BoxTitulo>
			<div style={{display:'flex', justifyContent:'center'}} >
				<BoxCalculadoraMinutas></BoxCalculadoraMinutas>
				<BoxImagenReceta></BoxImagenReceta>
			</div>
		</div>
		
	)
}
