"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { IPomodoro } from "@/context/initialContextData"
import styles from "./UISettings.module.css"



export function UISettings () {

    const { db, reloadPomodoro } = useContext(Context)

    return(
        <div className={styles.settings}>
            {
                db.map((item: IPomodoro, i: number) => {
                    return(
                        <div className={styles.inputContainer}>
                            <p>{`${item.type === "break" ? "Break" : "Pomodoro"} ${item.round} duration`}</p>
                            <input 
                                type="text"
                                placeholder={`${item.duration / 60000}`}
                            />
                        </div>
                    )
                })
            }
            <button onClick={() => {}}>SET</button>
            <button className={styles.reload} onClick={reloadPomodoro}>RESET ALL SETTINGS <br/>TIMERS AND LOGS</button>
        </div>
    )
}