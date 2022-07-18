import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #F8ECD1; ;
`


export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`

export const LogoContainer = styled.div`
  margin-left: 15rem;
  display: flex;
  align-items: center;
  width: 4%;
`

export const Menu = styled.ul `
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: #F8ECD1;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};; 
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`

export const MenuItem =  styled.li `
  height: 45%;
  background-color: #986EAD;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  &:hover {
    margin-top:3px;
    background-color: #d2d0d6;
	
    transition: 0.7s all ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
 
  }
`

export const MenuItemLogout =  styled.li `
  height: 45%;
  background-color: #986EAD;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  &:hover {
    margin-top:3px;
    background-color: #d2d0d6;
	
    transition: 0.7s all ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
 
  }
`



export const MenuItemLink = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  padding: 0.5rem 2.5rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;



  div{
	  margin-left:15px;
	  margin-top:5px;
  }


	@media screen and (max-width: 960px) {
		width: 30%;
	}
	
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #e07924;
      margin-right: 0.5rem;
    }
  }
`