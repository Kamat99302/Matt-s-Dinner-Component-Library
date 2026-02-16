import './Badge.css'
export default function Badge({children, color = "yellow", variant="square", showIcon = false}){
    return(
        <span className={`badge badge-${variant} badge-${color}`}>
            {children}
            {showIcon && <span className="badge-icon">🔥</span>}
        </span>
    )
}

