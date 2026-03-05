import './Button.css'
export default function Button({children, variant, size, onClick, disabled}){
    return(
        <button disabled={disabled} onClick={onClick} className={`button button-${variant} button-${size}`}>{children}</button>
    )
}