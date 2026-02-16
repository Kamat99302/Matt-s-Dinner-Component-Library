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
                        <input type="checkbox" id="medium"/>
                        <label htmlFor="medium">Medium</label>
                        <input type="checkbox" id="well"/>
                        <label htmlFor="well">Well</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Sauces</legend>
                    <div className="options">
                        <input type="checkbox" id="ketchup"/>
                        <label htmlFor="ketchup">Ketchup</label>
                        <input type="checkbox" id="mayo"/>
                        <label htmlFor="mayo">Mayo</label>
                        <input type="checkbox" id="bbq"/>
                        <label htmlFor="bbq">BBQ</label>
                </div>
                </fieldset>

                <fieldset className="customization-section">
                    <legend>Extras</legend>
                    <div className="options">
                        <input type="checkbox" id="bacon"/>
                        <label htmlFor="bacon">Bacon +1€</label>
                        <input type="checkbox" id="cheese"/>
                        <label htmlFor="cheese">Cheese +1.50€</label>
                </div>
                </fieldset>
                </>
            )}

              {/* DRINK */}
              {type === "drink" && (
                <>
                    <fieldset className="customization-section">
                        <legend>Size</legend>
                        <div className="options">
                                <input type="radio" id="small" name="size" />
                                <label htmlFor="small">Small</label>
                                <input type="radio" id="medium" name="size" />
                                <label htmlFor="medium">Medium</label>
                                <input type="radio" id="large" name="size" />
                                <label htmlFor="large">Large</label>
                        </div>
                    </fieldset>

                    <fieldset className="customization-section">
                        <legend>Options</legend>
                        <div className="options">
                                <input type="checkbox" id="ice" />
                                <label htmlFor="ice">Add ice</label>
                                <input type="checkbox" id="lemon" />
                                <label htmlFor="lemon">Add lemon</label>
                        </div>
                    </fieldset>
                </>
            )}

            {/* FRIES */}
            {type === "fries" && (
                <fieldset className="customization-section">
                    <legend>Size</legend>
                    <div className="options">
                            <input type="radio" id="small-fries" name="size" />
                            <label htmlFor="small-fries">Small</label>
                            <input type="radio" id="medium-fries" name="size" />
                            <label htmlFor="medium-fries">Medium</label>
                            <input type="radio" id="large-fries" name="size" />
                            <label htmlFor="large-fries">Large</label>
                    </div>
                </fieldset>
            )}

        </form>
    )
}