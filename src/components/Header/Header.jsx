import logoImg from '../../assets/logo.png'
import goBackImg from '../../assets/go-back.png'
import cartImg from '../../assets/cart.webp'
import './Header.css'


export default function Header({showNavIcons = false, onGoBack, onViewCart}){
    return(
        <header className="header">
            <div className="header-left">
                {showNavIcons && 
                <img src={goBackImg} onClick={onGoBack} alt="back" className="icon-back"></img>}
            </div>
            
            <img src={logoImg} alt="Matt's Diner" className="header-logo" />

            <div className="header-right">
                {showNavIcons && <img src={cartImg} onClick={onViewCart} alt="cart" className="icon-cart"></img>}
            </div>
        </header>
    )
}