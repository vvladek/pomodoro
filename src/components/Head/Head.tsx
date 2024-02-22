"use client"

import { useContext } from "react"
import { Context } from "@/context/ContextProvider"
import { getMinFromMs, getSecFromMs } from "@/helpers"




export function Head () {

    const { curr, ms } = useContext(Context)

    return(
        <head>
            <title>{`${getMinFromMs(ms)}:${getSecFromMs(ms)}`}</title>
            <meta name="description" content="Pomodoro tracker"></meta>
            <link 
                rel="shortcut icon"
                href={curr % 2 ? "/break-icon.svg" : "/pomodoro-icon.svg"}
                type="image/x-icon"
            />
        </head>
    )
}