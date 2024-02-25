"use client"

import { Fragment, useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getLogTime } from "@/helpers"
import { IPomodoro } from "@/context/initialContextData"
import styles from "./LogsInfo.module.css"



export function LogsInfo () {

    const { db } = useContext(Context)


    return(
        <div className={styles.logs}>
            {
                db.map((log: IPomodoro, i: number) => {
                    if (log.status === "finished" && log.type != "break") return(
                        <Fragment key={i + log.status}>
                            <div className={styles.log}>
                                <p>{`Pomodoro ${log.round} started at ${getLogTime(log.startTime)}`}</p>
                            </div>
                            <div className={styles.log}>
                                <p>{`Pomodoro ${log.round} finished at ${getLogTime(log.finishTime)}`}</p>
                            </div>
                        </Fragment>   
                    )
                    else if (log.status === "started" && log.type != "break") return(
                        <div className={styles.log} key={i + log.status}>
                            <p>{`Pomodoro ${log.round} started at ${getLogTime(log.startTime)}`}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}