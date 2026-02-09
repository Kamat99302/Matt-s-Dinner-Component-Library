export default function QuantitySelector({label = "Quantity", quantity = 1 }){
    return(
        <div className="quantity-selector-container">
            <p>{label}</p>
            <div className="selector">
                <img src="/remove-button.png" alt="remove" className="remove-btn"></img>
                <span className="quantity">{quantity}</span>
                <img src="/add-button.png" alt="add" className="add-btn"></img>
            </div>
        </div>
    )
}