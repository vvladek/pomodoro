"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import styles from "./NavBar.module.css"



export function NavBar () {

    const { curr, reloadPomodoro } = useContext(Context)

    return(
        <nav className={styles.nav}>
            <button name="pomodoro__settings__button"></button>
            <button onClick={reloadPomodoro} name="reload__pomodoro__button"></button>
            <h2>{Math.floor(curr / 2) + 1}</h2>
            <button name="pomodoro__list__button"></button>
        </nav>
    )
}