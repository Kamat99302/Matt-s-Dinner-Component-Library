import ProductCard from "./ProductCard";
import './ProductCard.css'
import mattsBurger from '../../assets/Burgers/matts-burger.jpg'
import doubleBeef from '../../assets/Burgers/double-beef.jpg'
import signatureBurger from '../../assets/Burgers/signature-burger.jpg'
import fishBurger from '../../assets/Burgers/fish-burger.webp'

export default{
    title: 'Components/ProductCard',
    component: ProductCard
}

export const MattsBurger = {
    args :{
        includeBadge: true,
        badgeColor: 'yellow',
        badgeVariant: 'square',
        badgeText: 'Popular',
        showIcon: true,
        img: mattsBurger,
        productName: `Matt's Burger`,
        productPrice: '4.90€'
    }
}

export const DoubleBeef = {
    args :{
        includeBadge: true,
        badgeColor: 'green',
        badgeVariant: 'square',
        badgeText: 'New',
        showIcon: false,
        img: doubleBeef,
        productName: `Double Beef`,
        productPrice: '5.90€'
    }
}

export const SignatureBurger = {
    args :{
        includeBadge: false,
        badgeColor: 'green',
        badgeVariant: 'square',
        badgeText: 'New',
        showIcon: false,
        img: signatureBurger,
        productName: `Signature Burger`,
        productPrice: '4.50€'
    }
}

export const FishBurger = {
    args :{
        includeBadge: false,
        badgeColor: 'green',
        badgeVariant: 'square',
        badgeText: 'New',
        showIcon: false,
        img: fishBurger,
        productName: `Fish Burger`,
        productPrice: '5.90€',
    }
}

      
     