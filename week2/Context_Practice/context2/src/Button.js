import React from "react"
import PropTypes from "prop-types"
import {ThemeContextConsumer} from "./ThemeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <div>
                     <input
                type="text"
                name="username"
                placeholder="New username"
                // value={}
                // onChange={}
            />
                <button 
                // onClick={}
                className={`${theme}-theme`}>Switch Theme</button>
                
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Button