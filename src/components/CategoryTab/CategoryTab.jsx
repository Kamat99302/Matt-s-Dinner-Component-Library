import './CategoryTab.css'
export default function CategoryTab({categories, activeIndex = 0}){
    return(
        <nav>
            <ul>
                {categories.map((category, index)=>(
                    <li 
                        key={index}
                        className={index === activeIndex? 'highlighted': ''}>
                            {category}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
