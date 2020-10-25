import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (<div>
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                <button onClick={context.toggleMovie}>change</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Button