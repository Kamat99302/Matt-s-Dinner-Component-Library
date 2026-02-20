import CartFooter from './CartFooter'
import './CartFooter.css'

export default{
    title:'Components/CartFooter',
    component: CartFooter,
    parameters: {
        layout: 'fullscreen', 
    }
}

export const Primary = {
    args :{
        variant : 'summary'
    }
}


export const Cart = {
    args :{
        variant : 'cart'
    }
}