import './QuantitySelector.css'
import addBtn from '../../assets/add-button.png'
import removeBtn from '../../assets/remove-button.png'
export default function QuantitySelector({label = "Quantity", quantity = 1 }){
    return(
        <div className="quantity-selector-container">
            <p>{label}</p>
            <div className="selector">
                <img src={removeBtn} alt="remove" className="remove-btn"></img>
                <span className="quantity">{quantity}</span>
                <img src={addBtn} alt="add" className="add-btn"></img>
            </div>
        </div>
    )
}