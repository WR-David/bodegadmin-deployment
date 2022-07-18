import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
//{new Date().toLocaleTimeString()}
import Home from '../../Views/Home'
// import Insumos from '../../Views/Insumos'
// import Bodegas from '../../Views/Bodegas'
// import Minutas from '../../Views/Minutas'
// import Mermas from '../../Views/Mermas'
import Usuarios from '../../Views/Usuarios'
import {LogoContainer} from './Styles/NavBar.elements'


function Rutas() {
	return (

			<Router>
				<NavBar></NavBar>
				<Routes>
					<Route path='pages/home' element={<Home />} ></Route>
					{/* <Route path='pages/insumos' element={<Insumos/>} ></Route>
					<Route path='pages/bodegas' element={<Bodegas/>} ></Route>
					<Route path='pages/minutas' element={<Minutas/>} ></Route>
					<Route path='pages/mermas' element={<Mermas/>} ></Route> */}
					<Route path='views/usuarios' element={<Usuarios/>} ></Route>
				</Routes>
			</Router>
	)
}
export default Rutas