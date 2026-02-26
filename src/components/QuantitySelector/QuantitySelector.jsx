import './QuantitySelector.css'
export default function QuantitySelector({label = "Quantity", quantity, onDecrement, onIncrement, imgRemove, imgAdd }){
    return(
        <div className="quantity-selector-container">
            <p>{label}</p>
            <div className="selector">
                <img src={imgRemove} onClick={onDecrement} alt="remove" className="remove-btn"></img>
                <span className="quantity">{quantity}</span>
                <img src={imgAdd} onClick={onIncrement} alt="add" className="add-btn"></img>
            </div>
        </div>
    )
}