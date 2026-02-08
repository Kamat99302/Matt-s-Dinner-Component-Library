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
        img: '/Burgers/matts-burger.jpg',
        productName: `Matt's Burger`,
        price: '4.90€'
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
        price: '5.90€'
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
        price: '4.50€'
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
        price: '5.90€',
    }
}

      
     