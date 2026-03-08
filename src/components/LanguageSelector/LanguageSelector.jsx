import frFlag from '../../assets/fr-flag.png'
import ukFlag from '../../assets/uk-flag.png'
import './LanguageSelector.css'
export default function LanguageSelector({onLanguageChange}){
    return(
        <div className="flag-container">
            <img onClick={()=>onLanguageChange('fr')} src={frFlag} alt="French"></img>
            <img onClick={()=>onLanguageChange('eng')} src={ukFlag} alt="English"></img>
        </div>
    )
}