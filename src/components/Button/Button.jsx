export default function Button({children, variant, size}){
    return(
        <button className={`button button-${variant} button-${size}`}>{children}</button>
    )
}