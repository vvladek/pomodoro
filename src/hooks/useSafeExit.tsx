"use client"

import { Context } from "@/context/ContextProvider"
import { useContext, useEffect } from "react"



export function useSafeExit () {

    const { state, logs } = useContext(Context)


    function handleBeforeUnload (e: BeforeUnloadEvent): void {
        e.preventDefault()
        e.returnValue = ""
        localStorage.setItem("POMODORO_TRACKER_FOR_MAYO", JSON.stringify({
            pomodoros: state.pomodoros,
            curr: state.curr,
            ms: state.ms,
            isPause: false,
            startTime: 0,
            logs: logs
        }))
    }


    useEffect(() => {

        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }

    }, [state])


    return null
}