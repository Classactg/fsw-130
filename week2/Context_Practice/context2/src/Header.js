import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    <h1>
                        {context.movie}
                    </h1>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header