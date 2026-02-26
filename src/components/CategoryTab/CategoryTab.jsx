import './CategoryTab.css'
export default function CategoryTab({categories = ['Burgers', 'Sides', 'Beverages', 'Desserts'], activeIndex, onCategoryClick, onIndexClick}){
    return(
        <nav>
            <ul>
                {categories.map((category, index)=>(
                    <li 
                        onClick={()=>{
                            onCategoryClick(category.toLowerCase())
                            onIndexClick(index)
                        }} 
                        key={index}
                        className={ index === activeIndex? 'highlighted': ''}>
                            {category}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
