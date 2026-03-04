import './Checkbox.css'
import { useState } from 'react'
export default function Checkbox({type = "burger", onOptionsChange}){
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
                    <legend>Cooking</legend>
                    <div className="options">
                        <input type="radio" value="Medium" onChange={(e) => handleOptionChange(e.target.value)} id="burger-medium" name="burger-cooking"/>
                        <label htmlFor="burger-medium">Medium</label>
                        <input type="radio" value="Well" onChange={(e) => handleOptionChange(e.target.value)} id="burger-well" name="burger-cooking"/>
                        <label htmlFor="burger-well">Well</label>
                </div>
                </fieldset>

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
                    <legend>Size</legend>
                    <div className="options">
                            <input type="radio" value="Medium" onChange={(e) => handleOptionChange(e.target.value)} id="hot-medium" name="hot-drink-size"/>
                            <label htmlFor="hot-medium">Medium</label>
                            <input type="radio" value="Large" onChange={(e) => handleOptionChange(e.target.value)} id="hot-large" name="hot-drink-size"/>
                            <label htmlFor="hot-large">Large</label>
                    </div>
                </fieldset>

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
                        <legend>Size</legend>
                        <div className="options">
                                <input type="radio" value="Medium" onChange={(e) => handleOptionChange(e.target.value)} id="cold-medium" name="cold-drink-size"/>
                                <label htmlFor="cold-medium">Medium</label>
                                <input type="radio" value="Large" onChange={(e) => handleOptionChange(e.target.value)} id="cold-large" name="cold-drink-size"/>
                                <label htmlFor="cold-large">Large</label>
                        </div>
                    </fieldset>

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
                    <legend>Size</legend>
                    <div className="options">
                            <input type="radio" value="Medium" onChange={(e) => handleOptionChange(e.target.value)} id="fries-medium" name="fries-size"/>
                            <label htmlFor="fries-medium">Medium</label>
                            <input type="radio" value="Large" onChange={(e) => handleOptionChange(e.target.value)} id="fries-large" name="fries-size"/>
                            <label htmlFor="fries-large">Large</label>
                    </div>
                </fieldset>

                <fieldset className="customization-section">
                <legend>Sauce</legend>
                <div className="options">
                        <input type="radio" value="Ketchup" onChange={(e) => handleOptionChange(e.target.value)} id="fries-ketchup" name="fries-sauce" />
                        <label htmlFor="fries-ketchup">Ketchup</label>
                        <input type="radio" value="Mayo" onChange={(e) => handleOptionChange(e.target.value)} id="fries-mayo" name="fries-sauce" />
                        <label htmlFor="fries-mayo">Mayo</label>
                        <input type="radio" value="BBQ" onChange={(e) => handleOptionChange(e.target.value)} id="fries-bbq" name="fries-sauce" />
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
                    <legend>Size</legend>
                    <div className="options">
                        <input type="radio" value="4 pcs" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-4pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-4pcs">4 pcs</label>
                        <input type="radio" value="9 pcs" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-9pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-9pcs">9 pcs</label>
                        <input type="radio" value="15 pcs" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-15pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-15pcs">15pcs</label>
                    </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Sauce</legend>
                    <div className="options">
                        <input type="radio" value="Ketchup" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-ketchup" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-ketchup">Ketchup</label>
                        <input type="radio" value="Chili" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-chili" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-chili">Chili</label>
                        <input type="radio" value="BBQ" onChange={(e) => handleOptionChange(e.target.value)} id="nuggets-bbq" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-bbq">BBQ</label>
                </div>
                </fieldset>
                </>
            )}

               {/* SIMPLE SIDES */}
               {type === "simple-side" && (
                <>
                <fieldset className="customization-section">
                    <legend>Size</legend>
                    <div className="options">
                            <input type="radio" value="Medium" onChange={(e) => handleOptionChange(e.target.value)} id="simple-side-medium" name="simple-side-size"/>
                            <label htmlFor="simple-side-medium">Medium</label>
                            <input type="radio" value="Large" onChange={(e) => handleOptionChange(e.target.value)} id="simple-side-large" name="simple-side-size"/>
                            <label htmlFor="simple-side-large">Large</label>
                    </div>
                </fieldset>
                </>
            )}
        </form>
    )
}