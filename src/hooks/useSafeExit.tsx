"use client"

import { Context } from "@/context/ContextProvider"
import { useContext, useEffect } from "react"



export function useSafeExit () {

    const { db, state } = useContext(Context)


    function handleBeforeUnload (e: BeforeUnloadEvent): void {
        e.preventDefault()
        e.returnValue = ""
        localStorage.setItem("POMODORO_TRACKER_FOR_MAYO", JSON.stringify({
            state: state,
            db: db
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