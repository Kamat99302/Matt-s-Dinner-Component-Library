import './Checkbox.css'
import { useState } from 'react'
export default function Checkbox({type = "burger", onOptionsChange =() => {} }){
    const [options, setOptions] = useState([])

    function handleOptionChange(option){
        setOptions(prev =>{
            const newOptions = prev.includes(option)
            ? prev.filter(o => o !== option)
            : [...prev, option]
        onOptionsChange(newOptions)
        return newOptions
        })
    }
    return(
        <form className="customization-form">
            {/* BURGER */}
            {type === "burger" && (
                <>
                <fieldset className="customization-section">
                    <legend>Sauces</legend>
                    <div className="options">
                        <input type="checkbox" value="Ketchup" onChange={(e) => handleOptionChange(e.target.value)} id="burger-ketchup"/>
                        <label htmlFor="burger-ketchup">Ketchup</label>
                        <input type="checkbox" value="Mayo" onChange={(e) => handleOptionChange(e.target.value)} id="burger-mayo"/>
                        <label htmlFor="burger-mayo">Mayo</label>
                        <input type="checkbox" value="BBQ" onChange={(e) => handleOptionChange(e.target.value)} id="burger-bbq"/>
                        <label htmlFor="burger-bbq">BBQ</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Extras</legend>
                    <div className="options">
                        <input type="checkbox" value="Bacon" onChange={(e) => handleOptionChange(e.target.value)} id="burger-bacon"/>
                        <label htmlFor="burger-bacon">Bacon</label>
                        <input type="checkbox" value="Cheese" onChange={(e) => handleOptionChange(e.target.value)} id="burger-cheese"/>
                        <label htmlFor="burger-cheese">Cheese</label>
                </div>
                </fieldset>
                </>
            )}

            {/* HOT DRINKS */}
              {type === "hot-drink" && (
                <>
                <fieldset className="customization-section">
                    <legend>Options</legend>
                    <div className="options">
                            <input type="checkbox" value="Hot milk" onChange={(e) => handleOptionChange(e.target.value)} id="hot-milk" />
                            <label htmlFor="hot-milk">Add milk</label>
                            <input type="checkbox" value="Sugar" onChange={(e) => handleOptionChange(e.target.value)} id="hot-sugar" />
                            <label htmlFor="hot-sugar">Add sugar</label>
                    </div>
                </fieldset>
                </>
            )}

            {/* COLD DRINKS */}
            {type === "cold-drink" && (
                <>
                    <fieldset className="customization-section">
                        <legend>Options</legend>
                        <div className="options">
                                <input type="checkbox" value="Ice" onChange={(e) => handleOptionChange(e.target.value)} id="cold-ice" />
                                <label htmlFor="cold-ice">Add ice</label>
                                <input type="checkbox" value="Lemon" onChange={(e) => handleOptionChange(e.target.value)} id="cold-lemon" />
                                <label htmlFor="cold-lemon">Add lemon</label>
                        </div>
                    </fieldset>
                </>
            )}

            {/* FRIES */}
            {type === "fries" && (
                <>
                <fieldset className="customization-section">
                <legend>Sauces</legend>
                <div className="options">
                        <input type="checkbox" value="Ketchup" onChange={(e) => handleOptionChange(e.target.value)} id="fries-ketchup"/>
                        <label htmlFor="fries-ketchup">Ketchup</label>
                        <input type="checkbox" value="Mayo" onChange={(e) => handleOptionChange(e.target.value)} id="fries-mayo"/>
                        <label htmlFor="fries-mayo">Mayo</label>
                        <input type="checkbox" value="BBQ" onChange={(e) => handleOptionChange(e.target.value)} id="fries-bbq"/>
                        <label htmlFor="fries-bbq">BBQ</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                <legend>Extras</legend>
                <div className="options">
                        <input type="checkbox" value="Cheesy" onChange={(e) => handleOptionChange(e.target.value)} id="fries-cheesy" />
                        <label htmlFor="fries-cheesy">Cheesy</label>
                        <input type="checkbox" value="Spicy" onChange={(e) => handleOptionChange(e.target.value)} id="fries-spicy"  />
                        <label htmlFor="fries-spicy">Spicy</label>
                </div>
                </fieldset>
                </>
            )}
            
            {/* NUGGETS */}
            {type === "nuggets" && (
                <>
                <fieldset className="customization-section">
                    <legend>Sauces</legend>
                    <div className="options">
                        <input type="checkbox" value="Ketchup" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-ketchup"/>
                        <label htmlFor="nuggets-ketchup">Ketchup</label>
                        <input type="checkbox" value="Chili" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-chili"/>
                        <label htmlFor="nuggets-chili">Chili</label>
                        <input type="checkbox" value="BBQ" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-bbq"/>
                        <label htmlFor="nuggets-bbq">BBQ</label>
                </div>
                </fieldset>
                </>
            )}


            {/* ICE CREAM */}
            {type === "ice-cream" && (
                <>
                <fieldset className="customization-section">
                    <legend>Option: add flavors</legend>
                    <div className="options">
                            <input type="checkbox" value="Chocolate" onChange={(e) => handleOptionChange(e.target.value)} id="chocolate"/>
                            <label htmlFor="chocolate">Chocolate</label>
                            <input type="checkbox" value="Vanilla" onChange={(e) => handleOptionChange(e.target.value)} id="vanilla"/>
                            <label htmlFor="vanilla">Vanilla</label>
                    </div>
                </fieldset>
                </>
            )}
        </form>
    )
}