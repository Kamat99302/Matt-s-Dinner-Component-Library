import '../ProductHero/ProductHero.css'
export default function ProductHero({productName, img}){
    return(
        <div className='product-hero-container'>
            <img src={img} alt={productName} />
            <p>{productName}</p>
        </div>
    )
}