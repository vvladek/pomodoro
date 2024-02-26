"use client"

import { createContext, useEffect, useState } from "react"
import { IPomodoro, pomodoros, IState, initialState } from "./initialContextData"
import { isIPomodoroArray, isInputValueValid, isStateInterface } from "@/helpers"



export const Context = createContext<any>(null)



export function ContextProvider ({ children }: Readonly<{ children: React.ReactNode }>) {

    const [db, setDb] = useState<IPomodoro[]>(pomodoros)
    const [state, setState] = useState<IState>(initialState)


    useEffect(() => {
        const localStorageData = localStorage.getItem("POMODORO_TRACKER_FOR_MAYO")
        if (localStorageData) {
            const data = JSON.parse(localStorageData)
            if (isStateInterface(data.state)) setState({ ...data.state, isPause: false, startTime: Date.now() })
            if (isIPomodoroArray(data.db)) setDb(data.db.map((item: IPomodoro, i: number) => {
                if (i === data.state.pointer && item.status != "started") return {
                    ...item,
                    status: "started",
                    startTime: Date()
                }
                return item
            }))
        }
    }, [])


    function setMs (milliseconds: number): void {
        setState(state => ({ ...state, ms: milliseconds }))
    }


    function reloadProgress (): void {
        setState({ ...initialState, ms: db[0].duration})
        setDb(db.map(item => ({ ...item, status: "ready", startTime: null, finishTime: null })))
        setTimeout(() => {
            setState(state => ({ ...state, isSound: false }))
        }, 100)
    }
    

    function finishPomodoro (): void {
        const pointer = state.pointer
        const nextPointer = pointer + 1 < db.length ? pointer + 1 : 0
        if (nextPointer === 0 && db[pointer].type === "break") {
            reloadProgress()
            return
        }
        setState(state => ({
            ...state,
            pointer: nextPointer,
            ms: db[nextPointer].duration,
            isPause: db[pointer].type === "break" ? true : false,
            startTime: Date.now(),
            isSound: true
        }))
        setDb(db.map((item, i) => {
            if (i === pointer) return {
                ...item,
                status: "finished",
                startTime: item.startTime ? item.startTime : Date(),
                finishTime: Date()
            }
            if (i === pointer + 1 && item.type === "break") return { ...item, status: "started", startTime: Date() }
            return item
        }))
        setTimeout(() => {
            setState(state => ({ ...state, isSound: false }))
        }, 100)
    }


    function toggleStartPomodoro (): void {
        setState(state => ({ ...state, isPause: !state.isPause, startTime: Date.now() }))
        if (db[state.pointer].status === "ready") {
            setDb(db.map((item, i) => {
                if (i === state.pointer) return { ...item, status: "started", startTime: Date() }
                return item
            }))
        }
    }


    function setNewDb (elements: any): void {
        setDb(pomodoros.map((item: IPomodoro, i: number) => {
            if (isInputValueValid(elements[i].value)) return { ...item, duration: Number(elements[i].value) * 60000 }
            return item
        }))
        setState({ ...initialState, ms: (isInputValueValid(elements[0].value) ? Number(elements[0].value) : 50) * 60000 })
    }



    return(
        <Context.Provider value={{ db, ...state, state, setMs, finishPomodoro, toggleStartPomodoro, reloadProgress, setNewDb }}>
            { children }
        </Context.Provider>
    )
}