import QuantitySelector from './QuantitySelector';
import removeBtn from '../../assets/remove-button.png'
import addBtn from '../../assets/add-button.png'
import './QuantitySelector.css'

export default{
    title: 'Components/QuantitySelector',
    component: QuantitySelector
}

export const Default = {
    args: {
        label: "Quantity",
        quantity: 1,
        imgRemove: removeBtn,
        imgAdd: addBtn 
    }
}

