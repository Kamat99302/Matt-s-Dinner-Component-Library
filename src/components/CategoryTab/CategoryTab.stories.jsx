import CategoryTab from './CategoryTab';
import './CategoryTab.css'

export default{
    title: 'Components/CategoryTab',
    component: CategoryTab
}

export const BurgersActive = {
    args: {
        categories : ['Burgers', 'Sides', 'Beverages', 'Desserts'],
        activeIndex : 0
    }
}

export const SidesActive = {
    args: {
        categories : ['Burgers', 'Sides', 'Beverages', 'Desserts'],
        activeIndex : 1
    }
}

export const BeveragesActive = {
    args: {
        categories : ['Burgers', 'Sides', 'Beverages', 'Desserts'],
        activeIndex: 2
    }
}

export const DessertsActive = {
    args: {
        categories : ['Burgers', 'Sides', 'Beverages', 'Desserts'],
        activeIndex: 3
    }
}