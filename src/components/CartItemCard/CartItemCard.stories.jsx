import CartItemCard from "./CartItemCard";
import imgAdd from '../../assets/add-button.png'
import imgRemove from '../../assets/remove-button.png'
import deleteIcon from '../../assets/trash-can.png'
import mattsBurger from '../../assets/Burgers/matts-burger.jpg'

export default{
    title: 'Components/CartItemCard',
    component: CartItemCard
}

export const Burger = {
    args :{
        productName: `MATT'S BURGER`,
        productOptions: 'Medium, +bacon',
        productPrice: '5.90€',
        imgAdd: imgAdd,
        imgRemove: imgRemove,
        deleteIcon: deleteIcon,
        productImg: mattsBurger
    }
}

export const TripleCheese = {
    args :{
        img: '/Burgers/double-beef.jpg',
        productName: `TRIPLE CHEESE`,
        productOptions: 'Medium, +bacon',
        productPrice: '6.90€',
        imgAdd: imgAdd,
        imgRemove: imgRemove,
        deleteIcon: deleteIcon,
        productImg: mattsBurger
    }
}