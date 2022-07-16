import React from 'react'

import background from '../../assets/images/background-pattern-opacity.png'
import '../../assets/css/globalStyles.css'

//{new Date().toLocaleTimeString()}

export default function Home() {
	return (
		<div>
			<div>
				<img className='bg' src={background} alt='background-pattern-opacity' />
			</div>
			<div>
				<h1>Home</h1>
			</div>
		</div>


	)
}