import Badge from "./Badge"
import './Badge.css'

export default {
    title: 'Components/Badge',
    component: Badge
}

export const Popular ={
    args: {
        children: 'Popular',
        color: 'yellow',
        showIcon: true,
        variant: 'square'
    }
}

export const New ={
    args: {
        children: 'NEW',
        color: 'green',
        showIcon: false
    }
}

export const BadgePill={
    args: {
        children: 'PILL',
        color: 'green',
        variant: 'pill',
        showIcon: false
    }
}