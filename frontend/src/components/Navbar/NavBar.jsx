import React, {useState} from 'react'
import { Container, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, MenuItemLogout } from './NavBar.elements'
import { FaBars, FaHome, FaUserAlt, FaWarehouse, FaClipboardList,FaTrashAlt,FaBoxOpen } from 'react-icons/fa'
import { IconContext} from 'react-icons'
import { Link } from 'react-router-dom'
import {AiOutlineLogout} from 'react-icons/ai'
import Inicial from '../../pages/Inicial'




export default function NavBar () {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	
	return (	
		<div>
			<Container>		
				<Wrapper>
					<IconContext.Provider value={{ style: { fontSize: '1.5em', color: '#3F1263' } }}>

						<MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
							<FaBars> </FaBars>
						</MobileIcon>

						<Menu open={showMobileMenu}>
							<MenuItem>
								<MenuItemLink>
									<FaHome></FaHome>
									<Link to = '../pages/home'>
										<div>
										Home
										</div>
									</Link>
								</MenuItemLink>
							</MenuItem>

							<MenuItem>
								<MenuItemLink>	
									<FaBoxOpen></FaBoxOpen>
									<Link to = '../pages/insumos'> 
										<div>
										Insumos
										</div>
									</Link>
								</MenuItemLink>
							</MenuItem>

							<MenuItem>
								<MenuItemLink>
									<FaWarehouse></FaWarehouse>
									<Link to = '../pages/bodegas'>
										<div>
										Bodegas
										</div>
									</Link>	
								</MenuItemLink>
							</MenuItem>

							<MenuItem>
								<MenuItemLink>
									<FaClipboardList></FaClipboardList>
									<Link to = '../pages/minutas'>
										<div>
										Minutas
										</div>
									</Link>	
								</MenuItemLink>
							</MenuItem>

							<MenuItem>
								<MenuItemLink>
									<FaTrashAlt></FaTrashAlt>
									<Link to = '../pages/mermas'>
										<div>
										Mermas
										</div>
									</Link>	
								</MenuItemLink>
							</MenuItem>

							<MenuItem>
								<MenuItemLink>
									<FaUserAlt></FaUserAlt>
									<Link to = '../pages/usuarios'>
										<div>
										Usuarios
										</div>
									</Link>	
								</MenuItemLink>
							</MenuItem>

							<MenuItemLogout>
								<MenuItemLink>
									<AiOutlineLogout></AiOutlineLogout>	
									<Link to = ''>
										<div>
										Salir
										</div>
									</Link>
								</MenuItemLink>
							</MenuItemLogout>
						</Menu>

					</IconContext.Provider>
				</Wrapper>
			</Container>
			<Inicial></Inicial>
		</div>
	)
}
