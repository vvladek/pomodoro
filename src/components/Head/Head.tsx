"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getMinFromMs, getSecFromMs } from "@/helpers"




export function Head () {

    const { pointer, ms } = useContext(Context)

    return(
        <head>
            <title>{`${getMinFromMs(ms)}:${getSecFromMs(ms)}`}</title>
            <meta name="description" content="Pomodoro tracker"></meta>
            <link 
                rel="shortcut icon"
                href={pointer % 2 ? "/break-icon.svg" : "/pomodoro-icon.svg"}
                type="image/x-icon"
            />
            <meta name="theme-color" content={pointer % 2 ? "#36a36a" : "#d04643"} />
        </head>
    )
}