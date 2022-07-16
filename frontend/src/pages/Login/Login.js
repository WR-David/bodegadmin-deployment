import React from 'react'
import { Container } from '../../components/containers/Container'
import { LoginContainer } from './LoginContainer'
// import { LoginLogo } from './LoginLogo'
// import Logo from '../../assets/images/logo.png'

export default function Login() {
	return (
		<Container>
			<LoginContainer>
				{/* <LoginLogo>
					<img src={Logo} alt='Logo'></img>
				</LoginLogo> */}
				<h2 style={{ margin: '3rem 0 2rem 0' }}>Login</h2>
			</LoginContainer>

		</Container>
	)
}