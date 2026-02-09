import QuantitySelector from '../QuantitySelector/QuantitySelector'
import '../QuantitySelector/QuantitySelector.css'
import './CartItemCard.css'

export default function CartItemCard({img, productName, productOptions, productPrice}){
    return(
        <div className="cart-item-card">
            <div className="card-left">
                <img src={img} alt={productName} className="product-image"></img>
            </div>
            <div className='card-center'>
                <h3 className="product-name">{productName}</h3>
                <p className="product-options">{productOptions}</p>
                <QuantitySelector
                    label="Qty"
                    quantity={1}>
                </QuantitySelector>
            </div>
           <div className="card-right">
                <span className='product-price'>{productPrice}</span>
                <img src="/trash-can.png" alt="Delete" className="delete-icon"></img>
           </div>
        </div>
    )
}