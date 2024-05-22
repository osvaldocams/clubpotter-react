import React from 'react'

const Navigation = ({navActive, handleClick}) => {
    return (
        <div className={navActive ? 'navigation active' : 'navigation' }>
            <button 
                type="button" 
                className="navigation__menu"
                onClick={handleClick}
                >
                <div className={navActive ? 'header__menu-toggle active' : 'header__menu-toggle'}></div>
            </button>
            <ul className='navigation__list'>
                <li><a href="">inicio</a></li>
                <li><a href="">blog</a></li>
                <li><a href="">reto la mejor casa de howarts</a></li>
                <button className='navigation__button'>nuestra tienda</button>
            </ul>
        </div>
        
    )
}

export default Navigation
