"use client"

import { Tracker } from "@/components";
import { Context } from "@/context/ContextProvider";
import { getStringWithTime } from "@/helpers/getStringWithTime";
import { useContext, useEffect } from "react";



export default function Home () {

    const { state, setState } = useContext(Context)

    useEffect(() => {
        const data = localStorage.getItem("gg")
        if (data) {
            console.log(data)
        }
    }, [])


    useEffect(() => {
        let timer: NodeJS.Timeout

        if (!state.isPause) {
            timer = setInterval(() => {
                const now = Date.now()
                const elapsedTime = now - state.startTime
                const newRemainingTime = Math.ceil((state.seconds - elapsedTime) / 1000) * 1000
                if (newRemainingTime < 100) {
                    setState((state: any) => ({ ...state, startTime: Date.now(), curr: state.curr + 1, seconds: state.pomodors[state.curr + 1] * 60000 }))
                    if (state.curr % 2) {
                        setState((state: any) => ({ ...state, isPause: true}))
                    }
                    return
                }
                setState((state: any) => ({ ...state, seconds: newRemainingTime }))
            }, 1000)
        }

        return () => clearInterval(timer)

    }, [state.curr, state.isPause, state.startTime])


    useEffect(() => {
        window.addEventListener("unload", (e) => {
            localStorage.setItem("gg", JSON.stringify(getStringWithTime(state.seconds)))
        })

        window.addEventListener("beforeunload", (e) => {
            e.preventDefault()
            e.returnValue = "";
        })

    }, [state.seconds])

    

    return (
        <main style={{
            backgroundColor: state.curr % 2 ? "var(--break-color)" : "var(--pomodoro-color)"
        }}>
            <Tracker />
        </main>
    );
}
