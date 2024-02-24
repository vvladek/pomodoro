"use client"

import { Context } from "@/context/ContextProvider"
import { getMinFromMs, getSecFromMs } from "@/helpers"
import { useContext, useEffect } from "react"
import styles from "./Tracker.module.css"



export function Tracker () {

    const { pointer, ms, isPause, startTime, setMs, finishPomodoro, toggleStartPomodoro } = useContext(Context)


    useEffect(() => {
        let timer: NodeJS.Timeout

        if (!isPause) {
            timer = setInterval(() => {
                const elapsedTime = Date.now() - startTime
                const newRemainingTime = Math.ceil((ms - elapsedTime) / 1000) * 1000
                if (newRemainingTime < 100) {
                    finishPomodoro()
                    return
                }
                setMs(newRemainingTime)
            }, 1000)
        }

        return () => clearInterval(timer)

    }, [pointer, isPause, startTime])



    return(
        <div className={styles.tracker}>
            <div className={styles.timer}>
                <h1>{getMinFromMs(ms)}</h1>
                <h1>:</h1>
                <h1>{getSecFromMs(ms)}</h1>
            </div>
            <div className={styles.buttons}>
                <button onClick={toggleStartPomodoro}>{isPause ? "START" : "PAUSE"}</button>
                <button onClick={finishPomodoro}>FINISH</button>
            </div>
        </div>
    )
}