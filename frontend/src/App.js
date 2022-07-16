import React, { useState } from 'react'
// import Login from './components/Login/Login.jsx'
import Home from './pages/Home/home'

export default function App() {
	const [connected, setConnected] = useState(true)

	const login = (state) => {
		setConnected(state)
	}

	return (
		// connected ? <Home /> : <Login login={login} />
		connected ? <Home /> : <Home login={login} />
	)
}