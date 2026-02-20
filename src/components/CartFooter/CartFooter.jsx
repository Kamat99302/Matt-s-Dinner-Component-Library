import Button from "../Button/Button"
import "../Button/Button.css"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import "../LanguageSelector/LanguageSelector.css"
import '../CartFooter/CartFooter.css'
import cartImg from '../../assets/cart.webp'
export default function CartFooter({variant = 'summary'}){
    return(
      <footer className="cart-footer-container">
        {variant === 'summary'? (
             <div className='cart-footer-section'>
             <div className='cart-footer-info'>
                 <img src={cartImg} className='cart-footer-icon'/>
                 <span className='cart-footer-nb-items'><span className='cart-footer-nb-item-number'>2</span> ITEM(S) • </span>
                 <span className='cart-footer-price'>10.75€</span>
             </div>
             <div className='view-cart-btn'>
                 <Button variant="primary-white" size='small'>VIEW CART</Button>
             </div>
         </div>) : variant === 'cart'? (

             <div className='cart-footer-section'>
             <div className='footer-cart-btn'>
                 <Button variant="primary-white" size='small'>MENU</Button>
                 <Button variant="danger" size='small'>CLEAR CART</Button>
             </div>
         </div>
         ) : null } 
       

        <div className='language-selector-container'>
            <LanguageSelector></LanguageSelector>
        </div>
    </footer>
    )
}