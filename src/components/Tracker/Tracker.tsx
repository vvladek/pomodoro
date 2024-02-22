"use client"

import { Context } from "@/context/ContextProvider"
import { getStringWithTime } from "@/helpers/getStringWithTime"
import { useContext } from "react"



export function Tracker () {

    const { state, setState } = useContext(Context)



    return(
        <div className="tracker">
            <h1>{getStringWithTime(state.seconds)}</h1>
            {/* <h2>{`It's ${Math.floor(state.curr / 2) + 1} pomodoro`}</h2> */}
            <button onClick={() => {
                setState((state: any) => ({ ...state, isPause: !state.isPause, startTime: Date.now() }))
            }}>{state.isPause ? "START" : "PAUSE"}</button>
            <button onClick={() => {
                setState((state: any) => ({ ...state, startTime: Date.now(), curr: state.curr + 1, seconds: state.pomodors[state.curr + 1] * 60000 }))
                if (state.curr % 2) {
                    setState((state: any) => ({ ...state, isPause: true }))
                } else {
                    setState((state: any) => ({ ...state, isPause: false }))
                }
            }}>SKIP</button>
        </div>
    )
}