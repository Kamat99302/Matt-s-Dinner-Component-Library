import ProductHero from './ProductHero'
import './ProductHero.css'
import mattsBurger from '../../assets/Burgers/matts-burger.jpg'



export default{
    title: 'Components/ProductHero',
    component: ProductHero
}

export const MattsBurger = {
    args :{
        img: mattsBurger,
        productName: `Matt's Burger`,
    }
}

