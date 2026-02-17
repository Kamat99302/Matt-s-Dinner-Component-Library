import Badge from "../Badge/Badge"
import "../Badge/Badge.css"
import '../ProductCard/ProductCard.css'
export default function ProductCard({includeBadge = true, img, productName, productPrice, badgeColor="green", badgeVariant="square", showIcon, badgeText="New"}){
    return(
        <div className="card-container">
            <div className="image-wrapper">
            {includeBadge && 
                    <Badge 
                        color={badgeColor}
                        variant={badgeVariant}
                        showIcon={showIcon}    
                        >{badgeText}
                    </Badge>
            }
            <img src={img} alt={productName} />
        </div>
            <p>{productName}</p>
            <span className="product-price">{productPrice}</span>
            
        </div>
    )
}