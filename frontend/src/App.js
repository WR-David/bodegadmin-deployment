import React, { useState } from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

export default function App() {
	const [connected, setConnected] = useState(false)

	const login = (state) => {
		setConnected(state)
	}

	return (
		connected ? <Home /> : <Login login={login} />
	)
}