import QuantitySelector from '../QuantitySelector/QuantitySelector'
import '../QuantitySelector/QuantitySelector.css'
import './CartItemCard.css'

export default function CartItemCard({productImg, productName, productOptions, productPrice, deleteIcon, imgAdd, imgRemove}){
    return(
        <div className="cart-item-card">
            <div className="card-left">
                <img src={productImg} alt={productName} className="product-image"></img>
            </div>
            <div className='card-center'>
                <div className='product-info-group'>
                    <h3 className="product-name">{productName}</h3>
                    <p className="product-options">{productOptions}</p>
                </div>
                <QuantitySelector
                    imgRemove={imgRemove}
                    imgAdd={imgAdd}
                    label="Qty: "
                    quantity={1}>
                </QuantitySelector>
            </div>
           <div className="card-right">
                <span className='card-product-price'>{productPrice}</span>
                <img src={deleteIcon} alt="Delete" className="delete-icon"></img>
           </div>   
        </div>
    )
}