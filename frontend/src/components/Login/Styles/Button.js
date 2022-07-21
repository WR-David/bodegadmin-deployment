import styled from 'styled-components'
import React from 'react'

export default function Button({login}) {
	const call = () => {
		login(true)
	}

  	return (
		<Buttonasd onClick={call}> Holi </Buttonasd>
  	)	
}


	
export const Buttonasd = styled.button `
    background-color: #7B6F93;
    border: none;
    width: 62%;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 3rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    color: #FFFFFF;
	// hacer animacion 3d al hacer click

    &:hover {
        background-color: #7FFFD4;
        transition: 0.6s;
    }
`