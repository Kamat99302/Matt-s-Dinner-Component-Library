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
        ShowNavIcons: true
    }
}


export const Secondary = {
    args: {
        ShowNavIcons: false
    }
}