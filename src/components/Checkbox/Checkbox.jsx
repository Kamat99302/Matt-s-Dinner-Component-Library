import './Checkbox.css'
export default function Checkbox({type = "burger"}){
    return(
        <form className="customization-form">
            {/* BURGER */}
            {type === "burger" && (
                <>
                <fieldset className="customization-section">
                    <legend>Cooking</legend>
                    <div className="options">
                        <input type="radio" id="burger-medium" name="burger-cooking"/>
                        <label htmlFor="burger-medium">Medium</label>
                        <input type="radio" id="burger-well" name="burger-cooking"/>
                        <label htmlFor="burger-well">Well</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Sauces</legend>
                    <div className="options">
                        <input type="checkbox" id="burger-ketchup"/>
                        <label htmlFor="burger-ketchup">Ketchup</label>
                        <input type="checkbox" id="burger-mayo"/>
                        <label htmlFor="burger-mayo">Mayo</label>
                        <input type="checkbox" id="burger-bbq"/>
                        <label htmlFor="burger-bbq">BBQ</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Extras</legend>
                    <div className="options">
                        <input type="checkbox" id="burger-bacon"/>
                        <label htmlFor="burger-bacon">Bacon +1€</label>
                        <input type="checkbox" id="burger-cheese"/>
                        <label htmlFor="burger-cheese">Cheese +1.50€</label>
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
                            <input type="radio" id="hot-small" name="hot-drink-size"/>
                            <label htmlFor="hot-small">Small</label>
                            <input type="radio" id="hot-medium" name="hot-drink-size"/>
                            <label htmlFor="hot-medium">Medium</label>
                            <input type="radio" id="hot-large" name="hot-drink-size"/>
                            <label htmlFor="hot-large">Large</label>
                    </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Options</legend>
                    <div className="options">
                            <input type="checkbox" id="hot-milk" />
                            <label htmlFor="hot-milk">Add milk</label>
                            <input type="checkbox" id="hot-sugar" />
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
                                <input type="radio" id="cold-small" name="cold-drink-size"/>
                                <label htmlFor="cold-small">Small</label>
                                <input type="radio" id="cold-medium" name="cold-drink-size"/>
                                <label htmlFor="cold-medium">Medium</label>
                                <input type="radio" id="cold-large" name="cold-drink-size"/>
                                <label htmlFor="cold-large">Large</label>
                        </div>
                    </fieldset>

                    <fieldset className="customization-section">
                        <legend>Options</legend>
                        <div className="options">
                                <input type="checkbox" id="cold-ice" />
                                <label htmlFor="cold-ice">Add ice</label>
                                <input type="checkbox" id="cold-lemon" />
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
                            <input type="radio" id="fries-medium" name="fries-size"/>
                            <label htmlFor="fries-medium">Medium</label>
                            <input type="radio" id="fries-large" name="fries-size"/>
                            <label htmlFor="fries-large">Large +1.50€</label>
                    </div>
                </fieldset>

                <fieldset className="customization-section">
                <legend>Sauce</legend>
                <div className="options">
                        <input type="radio" id="fries-ketchup" name="fries-sauce" />
                        <label htmlFor="fries-ketchup">Ketchup</label>
                        <input type="radio" id="fries-mayo" name="fries-sauce" />
                        <label htmlFor="fries-mayo">Mayo</label>
                        <input type="radio" id="fries-bbq" name="fries-sauce" />
                        <label htmlFor="fries-bbq">BBQ</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                <legend>Extras</legend>
                <div className="options">
                        <input type="checkbox" id="fries-cheesy" />
                        <label htmlFor="fries-cheesy">Cheesy +1€</label>
                        <input type="checkbox" id="fries-spicy"  />
                        <label htmlFor="fries-spicy">Spicy +0.50€</label>
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
                        <input type="radio" id="nuggets-4pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-4pcs">4 pcs</label>
                        <input type="radio" id="nuggets-9pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-9pcs">9 pcs</label>
                        <input type="radio" id="nuggets-15pcs" name="nuggets-size" />
                        <label htmlFor="nuggets-15pcs">15pcs</label>
                    </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Sauce</legend>
                    <div className="options">
                        <input type="radio" id="nuggets-ketchup" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-ketchup">Ketchup</label>
                        <input type="radio" id="nuggets-chili" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-chili">Chili</label>
                        <input type="radio" id="nuggets-bbq" name="nuggets-sauce"/>
                        <label htmlFor="nuggets-bbq">BBQ</label>
                </div>
                </fieldset>
                </>
            )}
        </form>
    )
}