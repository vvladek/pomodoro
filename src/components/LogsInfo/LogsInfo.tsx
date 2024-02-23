"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { TLog, getLogTime } from "@/helpers"
import styles from "./LogsInfo.module.css"



export function LogsInfo () {

    const { logs, isLogVisible } = useContext(Context)


    return(
        <div className={styles.logs} style={{
            translate: isLogVisible ? "" : "150%"
        }}>
            {
                logs.map((log: TLog) => {
                    return(
                        <div className={styles.log} key={log.timeStamp}>
                            <h5 style={{
                                color: log.status === "start" ? "var(--pomodoro-color)" : "var(--break-color)",
                                textAlign: "center"
                            }}>
                                {`Pomodoro ${log.curr} ${log.status}ed at ${getLogTime(log.timeStamp)}`}
                            </h5>
                        </div>
                    )
                })
            }
        </div>
    )
}