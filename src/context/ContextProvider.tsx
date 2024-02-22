"use client"

import { createContext, useEffect, useState } from "react"



export const Context = createContext<any>(null)



const initialState = {
    pomodoros: [50, 10, 50, 10, 50, 10, 50, 20, 50, 10, 50, 10, 50, 10, 50, 20],
    curr: 0,
    ms: 50 * 60000,
    isPause: true,
    startTime: Date.now()
}



export function ContextProvider ({ children }: Readonly<{ children: React.ReactNode }>) {


    const [state, setState] = useState(initialState)


    useEffect(() => {
        const localStorageData = localStorage.getItem("POMODORO_TRACKER_FOR_MAYO")
        if (localStorageData) {
            const data = JSON.parse(localStorageData)
            setState({
                pomodoros: data.pomodoros,
                curr: data.curr,
                ms: data.ms,
                isPause: false,
                startTime: Date.now()
            })
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
            startTime: Date.now()
        }))
    }

    function toggleStartPomodoro (): void {
        setState(state => ({
            ...state,
            isPause: !state.isPause,
            startTime: Date.now()
        }))
    }

    function reloadPomodoro (): void {
        setState(initialState)
    }



    return(
        <Context.Provider value={{
            ...state,
            setMs,
            finishPomodoro,
            toggleStartPomodoro,
            reloadPomodoro,
            state
        }}>
            { children }
        </Context.Provider>
    )
}