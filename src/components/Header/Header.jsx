export default function Header({showNavIcons = false}){
    return(
        <header className="header">
            <div className="header-left">
                {showNavIcons && <img src="/go-back.png" alt="back" className="icon-back"></img>}
            </div>
            
            <img src="/logo.png" alt="Matt's Diner" className="header-logo" />

            <div className="header-right">
                {showNavIcons && <img src="/cart.webp" alt="cart" className="icon-cart"></img>}
            </div>
        </header>
    )
}