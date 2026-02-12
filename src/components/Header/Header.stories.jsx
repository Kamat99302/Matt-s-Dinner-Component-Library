import Header from './Header'
import './Header.css'

export default{
    title:'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen', 
    }
}

export const Primary = {
    args: {
        showNavIcons: true
    }
}

export const Secondary = {
    args: {
        showNavIcons: false
    }
}