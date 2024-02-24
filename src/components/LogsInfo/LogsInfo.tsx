"use client"

import { Fragment, useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getLogTime } from "@/helpers"
import { IPomodoro } from "@/context/initialContextData"
import styles from "./LogsInfo.module.css"



export function LogsInfo () {

    const { db, isLogVisible } = useContext(Context)


    return(
        <div className={styles.logs} style={{
            translate: isLogVisible ? "" : "150%"
        }}>
            {
                db.map((log: IPomodoro, i: number) => {
                    if (log.status === "finished" && log.type != "break") return(
                        <Fragment key={i + log.status}>
                            <div className={styles.log}>
                                <h5 style={{
                                    color: "var(--pomodoro-color)"
                                }}>
                                    {`Pomodoro ${log.round} started at ${getLogTime(log.startTime)}`}
                                </h5>
                            </div>
                            <div className={styles.log}>
                                <h5 style={{
                                    color: "var(--break-color)"
                                }}>
                                    {`Pomodoro ${log.round} finished at ${getLogTime(log.finishTime)}`}
                                </h5>
                            </div>
                        </Fragment>   
                    )
                    else if (log.status === "started" && log.type != "break") return(
                        <div className={styles.log} key={i + log.status}>
                            <h5 style={{
                                color: "var(--pomodoro-color)",
                            }}>
                                {`Pomodoro ${log.round} started at ${getLogTime(log.startTime)}`}
                            </h5>
                        </div>
                    )
                })
            }
        </div>
    )
}