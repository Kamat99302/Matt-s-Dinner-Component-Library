import CartItemCard from "./CartItemCard";


export default{
    title: 'Components/CartItemCard',
    component: CartItemCard
}

export const Burger = {
    args :{
        img: '/Burgers/matts-burger.jpg',
        productName: `MATT'S BURGER`,
        productOptions: 'Medium, +bacon',
        productPrice: '5.90€'
    }
}

export const OtherBurger = {
    args :{
        img: '/Burgers/double-beef.jpg',
        productName: `TRIPLE CHEESE`,
        productOptions: 'Medium, +bacon',
        productPrice: '6.90€'
    }
}