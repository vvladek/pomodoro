"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getCurrentPomodoro } from "@/helpers"
import styles from "./NavBar.module.css"



export function NavBar () {

    const { curr, reloadPomodoro, setIsLogVisible } = useContext(Context)

    return(
        <nav className={styles.nav}>
            <button name="pomodoro__settings__button"></button>
            <button onClick={reloadPomodoro} name="reload__pomodoro__button"></button>
            <h2>{getCurrentPomodoro(curr)}</h2>
            <button
                name="pomodoro__list__button"
                onClick={() => setIsLogVisible((state: any) => !state)}
            ></button>
        </nav>
    )
}