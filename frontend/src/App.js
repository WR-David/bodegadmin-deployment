import React, { useState } from 'react'
import Login from './components/Login/Login'
import Rutas from './components/Navbar/Router'

export default function App() {
	const [connected, setConnected] = useState(false)

	return (
		connected ? <Rutas /> : <Login setCon={setConnected} />
		)
}