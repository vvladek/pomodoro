"use client"

import { FormEvent, useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { IPomodoro } from "@/context/initialContextData"
import styles from "./UISettings.module.css"



export function UISettings () {

    const { db, setNewDb } = useContext(Context)


    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formElements = event.currentTarget.elements
        setNewDb(formElements)
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement
            if (element.tagName === "INPUT") element.value = ""
        }
    }


    return(
        <div className={styles.settings}>
            <form onSubmit={handleSubmit}>
                {
                    db.map((item: IPomodoro, i: number) => {
                        return(
                            <div className={styles.inputContainer} key={i + item.status}>
                                <p>{`${item.type === "break" ? "Break" : "Pomodoro"} ${item.round} duration`}</p>
                                <input
                                    name={`${item.type}-${item.round}`}
                                    type="text"
                                    placeholder={`${item.duration / 60000}`}
                                />
                            </div>
                        )
                    })
                }
                <button type="submit">SET</button>
            </form>
            <h5>
                Timers and all progress will be reset.
                To restore default settings, keep the
                fields blank or enter incorrect data.
            </h5>
        </div>
    )
}