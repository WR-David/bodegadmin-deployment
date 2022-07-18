import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Clock from '../Clock'

import Home from '../../Views/Home '
import Insumos from '../../pages/Insumos'
import Bodegas from '../../pages/Bodegas'
import Minutas from '../../pages/Minutas'
import Mermas from '../../pages/Mermas'
import Usuarios from '../../pages/Usuarios'

import {LogoContainer} from './NavBar.elements'
import logoOficial from '../../assets/img/logoOficial.png'


export default function NavBarCompleto() {
	return (
		<div>
			<div style={{display:'flex', marginTop:'1rem', marginBottom:'1rem'}}>
				<LogoContainer>
					<img src={logoOficial} width="100%" alt='Bodegadmin' />	
				</LogoContainer>
				<Clock></Clock>
			</div>		
			<Router>
				<NavBar></NavBar>
				<Routes>
					<Route path='pages/home' element={<Home/>} ></Route>
					<Route path='pages/insumos' element={<Insumos/>} ></Route>
					<Route path='pages/bodegas' element={<Bodegas/>} ></Route>
					<Route path='pages/minutas' element={<Minutas/>} ></Route>
					<Route path='pages/mermas' element={<Mermas/>} ></Route>
					<Route path='pages/usuarios' element={<Usuarios/>} ></Route>					
				</Routes>	
			</Router>

		</div>
	)
}
