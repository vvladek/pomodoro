"use client"

import { TLog, TPomodoroState, getCurrentPomodoro, isPomodoroState } from "@/helpers"
import { createContext, useEffect, useState } from "react"



export const Context = createContext<any>(null)



const initialState: TPomodoroState = {
    pomodoros: [50, 10, 50, 10, 50, 10, 50, 20, 50, 10, 50, 10, 50, 10, 50, 20],
    curr: 0,
    ms: 50 * 60000,
    isPause: true,
    startTime: Date.now()
}



export function ContextProvider ({ children }: Readonly<{ children: React.ReactNode }>) {


    const [state, setState] = useState<TPomodoroState>(initialState)
    const [logs, setLogs] = useState<TLog[]>([])
    const [isLogVisible, setIsLogVisible] = useState<boolean>(false)


    useEffect(() => {
        const localStorageData = localStorage.getItem("POMODORO_TRACKER_FOR_MAYO")
        if (localStorageData) {
            const data = JSON.parse(localStorageData)
            if (isPomodoroState(data)) {
                setState({
                    pomodoros: data.pomodoros,
                    curr: data.curr,
                    ms: data.ms,
                    isPause: false,
                    startTime: Date.now()
                })
            }
            const currentPomodoro = getCurrentPomodoro(data.curr)
            const lastLog = data.logs[data.logs.length - 1]
            if (!lastLog || currentPomodoro !== lastLog.curr) {
                setLogs([...data.logs, { curr: currentPomodoro, status: "start", timeStamp: Date() }])
            } else {
                setLogs([...data.logs])
            }
        }
    }, [])



    function setMs (milliseconds: number): void {
        setState(state => ({ ...state, ms: milliseconds }))
    }
    
    function finishPomodoro (): void {
        const next = state.curr + 1 < state.pomodoros.length ? state.curr + 1 : 0;
        setState(state => ({
            ...state,
            curr: next,
            ms: state.pomodoros[next] * 60000,
            isPause: state.curr % 2 ? true : false,
            startTime: Date.now(),
        }))
        if (!(state.curr % 2)) {
            setLogs([...logs, { curr: getCurrentPomodoro(state.curr), status: "finish", timeStamp: Date() }])
        }
    }

    function toggleStartPomodoro (): void {
        setState(state => ({
            ...state,
            isPause: !state.isPause,
            startTime: Date.now()
        }))
        const currentPomodoro = getCurrentPomodoro(state.curr)
        const lastLog = logs[logs.length - 1]
        if (!lastLog || currentPomodoro !== lastLog.curr) {
            setLogs([...logs, { curr: currentPomodoro, status: "start", timeStamp: Date() }])
        }
    }

    function reloadPomodoro (): void {
        setState(initialState)
        setLogs([])
    }


    return(
        <Context.Provider value={{
            ...state,
            setMs,
            finishPomodoro,
            toggleStartPomodoro,
            reloadPomodoro,
            state,
            logs,
            isLogVisible,
            setIsLogVisible
        }}>
            { children }
        </Context.Provider>
    )
}