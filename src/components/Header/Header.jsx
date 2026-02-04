export default function Header({ShowNavIcons = false}){
    return(
        <header className="header">
            <div className="header-left">
                {ShowNavIcons && <img src="/go-back.png" alt="back" className="icon-back"></img>}
            </div>
            
            <img src="/logo.png" alt="Matt's Diner" className="header-logo" />

            <div className="header-right">
                {ShowNavIcons && <img src="/cart.webp" alt="cart" className="icon-cart"></img>}
            </div>
        </header>
    )
}