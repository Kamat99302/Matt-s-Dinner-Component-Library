import ProductCard from "./ProductCard";
import './ProductCard.css'

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
        img: '../../assets/Burgers/matts-burger.jpg',
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
        img: '/Burgers/double-beef.jpg',
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
        img: '/Burgers/signature-burger.jpg',
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
        img: '/Burgers/fish-burger.webp',
        productName: `Fish Burger`,
        productPrice: '5.90€',
    }
}

      
     