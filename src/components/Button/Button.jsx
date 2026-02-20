import './Button.css'
export default function Button({children, variant, size, onClick}){
    return(
        <button onClick={onClick} className={`button button-${variant} button-${size}`}>{children}</button>
    )
}