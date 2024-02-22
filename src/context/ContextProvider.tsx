"use client"

import { createContext, useState } from "react"


export const Context = createContext<any>(null)



export function ContextProvider ({ children }: Readonly<{ children: React.ReactNode }>) {

    const [state, setState] = useState({
        pomodors: [50, 10, 50, 10, 50, 10, 50, 20, 50, 10, 50, 10, 50, 10, 50, 20],
        curr: 0,
        seconds: 50 * 60000,
        isPause: true,
        startTime: Date.now()
    })

    return(
        <Context.Provider value={{
            state,
            setState
        }}>
            { children }
        </Context.Provider>
    )
}