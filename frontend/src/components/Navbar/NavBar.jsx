import React from 'react'
import logoOficial from '../../assets/Img/bodg.png'

export default function NavBar() {

	return (
		<div className='navbar is-light'>
			<div className='navbar-brand'>
				<div className='navbar-item'>
					<img className='image is-12by18' src={logoOficial} alt='' />
				</div>
				<div className='navbar-menu'>
					<div className='navbar-end'>
						<div className='navbar-item is-tab'>
							Home
						</div>
						<div className='navbar-item is-tab'>
							Bodegas
						</div>
						<div className='navbar-item is-tab'>
							Insumos
						</div>
						<div className='navbar-item is-tab'>
							Mermas
						</div>
						<div className='navbar-item is-tab'>
							Minutas
						</div>
						<div className='navbar-item is-tab'>
							Usuarios
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
