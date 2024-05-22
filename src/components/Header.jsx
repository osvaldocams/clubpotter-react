import { useState } from 'react'
import Logo from '../assets/club-potter-logo.png'
import Navigation from './Navigation'

const Header = () => {
    const [navActive, setNavActive] = useState(false)

    const handleClick = ()=>{
        if(!navActive){
            setNavActive(true)
        }else{
            setNavActive(false)
        }
    }
    return (
        <header className='header'>
            <div 
                className={navActive ? 'darker active' : 'darker'} 
                onClick={()=>setNavActive(false)}
            >
            </div>
            <div className='header__container'>
                <a className="header__logo" href="#"><img src={Logo} alt="logo"/></a>
                <button 
                    type="button" 
                    className="header__menu"
                    onClick={handleClick}
                >
                    <div className={navActive ? 'header__menu-toggle active' : 'header__menu-toggle'} ></div>
                </button>
            </div>
            
            <Navigation
                navActive={navActive}
                handleClick={handleClick}
            />
        </header>
    )
}

export default Header
