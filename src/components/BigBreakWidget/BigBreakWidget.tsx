"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getLogTime } from "@/helpers"
import styles from "./BigBreakWidget.module.css"



export function BigBreakWidget () {

    const { db, pointer, isPause, ms } = useContext(Context)


    function getWidgetTime (pomodoro: 4 | 8): string {
        if (Math.ceil(pointer / 2) >= pomodoro) return `${pomodoro}th pomodoro is already finished`
        let totalTime: number = 0;
        for (let i = pointer; i <= (pomodoro - 1) * 2; i++) {
            totalTime += db[i].duration
        }
        const endTime = Date.now() + totalTime - (db[pointer].duration - ms)

        return `${pomodoro}th pomodoro will end at ${getLogTime(endTime)}`
    }


    return(
        <div className={styles.widget}>
            {
                isPause ? <p>It is impossible to know the end time while the application is paused.</p> :
                <>
                    <p>{`${getWidgetTime(4)}`}</p>
                    <p>{`${getWidgetTime(8)}`}</p>
                </>
            }
        </div>
    )
}