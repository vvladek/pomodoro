"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import styles from "./NavBar.module.css"



export function NavBar () {

    const { db, pointer, reloadPomodoro, toggleLogVisibility } = useContext(Context)

    return(
        <nav className={styles.nav}>
            <button className={styles.settings}></button>
            <button
                className={styles.reload}
                onClick={reloadPomodoro}
            ></button>
            <h2>{db[pointer].round}</h2>
            <button
                className={styles.logs}
                onClick={toggleLogVisibility}
            ></button>
        </nav>
    )
}