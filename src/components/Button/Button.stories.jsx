import Button from './Button'
import './Button.css'

export default{
    title: 'Components/Button',
    component: Button
}

export const TouchToOrder = {
    args: {
        children: 'Touch to order',
        variant: 'primary-black',
        size: 'large'
    }
}

export const CompleteOrder = {
    args:{
        children: 'COMPLETE ORDER',
        variant: 'primary-black',
        size: 'medium-bebas'
    }
}

export const AddToCart = {
    args:{
        children: 'ADD TO CART 4.90€',
        variant: 'primary-black',
        size: 'medium-inter'
    }
}

export const ViewCart = {
    args:{
        children: 'VIEW CART',
        variant: 'primary-white',
        size: 'small'
    }
}

export const Menu = {
    args:{
        children: 'MENU',
        variant: 'primary-white',
        size: 'small'
    }
}

export const ClearCart = {
    args:{
        children: 'CLEAR CART',
        variant: 'danger',
        size: 'small'
    }
}

export const NewOrder = {
    args:{
        children: 'NEW ORDER',
        variant: 'primary-black',
        size: 'xl'
    }
}

