import React, { useState } from 'react'
import Login from './components/Login/Login'
// import NavBarCompleto from './components/Navbar/NavBarCompleto'

export default function App() {
	const [connected, setConnected] = useState(false)

	return (
		connected ? <div>Hola, si funciono</div> : <Login setCon={setConnected} />
		)
}