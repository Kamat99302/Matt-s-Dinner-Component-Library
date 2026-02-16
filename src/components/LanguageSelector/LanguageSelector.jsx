import frFlag from '../../assets/fr-flag.png'
import ukFlag from '../../assets/uk-flag.png'
import './LanguageSelector.css'
export default function LanguageSelector(){
    return(
        <div className="flag-container">
            <img src={frFlag} alt="French"></img>
            <img src={ukFlag} alt="English"></img>
        </div>
    )
}