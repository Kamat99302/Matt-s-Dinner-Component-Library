import './CategoryTab.css'
export default function CategoryTab({categories = ['Burgers', 'Sides', 'Beverages', 'Desserts'], activeIndex, onCategoryClick, onIndexClick}){
    return(
        <nav className='category-tab'>
            <ul className='category-tab__list'>
                {categories.map((category, index)=>(
                    <li
                        onClick={()=>{
                            onCategoryClick(category.toLowerCase())
                            onIndexClick(index)
                        }} 
                        key={index}
                        className={ index === activeIndex? 'category-tab__item category-tab__item--active': 'category-tab__item'}>
                            {category}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
