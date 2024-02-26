"use client"

import { Fragment, useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getLogTime } from "@/helpers"
import { IPomodoro } from "@/context/initialContextData"
import styles from "./LogsInfo.module.css"



export function LogsInfo () {

    const { db, reloadProgress } = useContext(Context)


    return(
        <div className={styles.logs}>
            <div className={styles.container}>
                {
                    db.map((log: IPomodoro, i: number) => {
                        if (log.status === "finished" && log.type != "break") return(
                            <Fragment key={i + log.status}>
                                <div className={styles.log}>
                                    <p>{`Pomodoro ${log.round} started at`}</p>
                                    <p>{`${getLogTime(log.startTime)}`}</p>
                                </div>
                                <div className={styles.log}>
                                    <p>{`Pomodoro ${log.round} finished at`}</p>
                                    <p>{`${getLogTime(log.startTime)}`}</p>
                                </div>
                            </Fragment>
                        )
                        else if (log.status === "started" && log.type != "break") return(
                            <div className={styles.log} key={i + log.status}>
                                <p key={i + log.status}>{`Pomodoro ${log.round} started at`}</p>
                                <p>{`${getLogTime(log.startTime)}`}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={reloadProgress}>RELOAD PROGRESS</button>
        </div>
    )
}