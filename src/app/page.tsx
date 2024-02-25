"use client"

import { LogsInfo, Tracker, UISettings } from "@/components";
import { Context } from "@/context/ContextProvider";
import { useSafeExit } from "@/hooks/useSafeExit";
import { useContext } from "react";



export default function Home () {

    const { db, pointer, isSound } = useContext(Context)

    useSafeExit()


    return (
        <main style={{
            backgroundColor: pointer % 2 ? "var(--break-color)" : "var(--pomodoro-color)"
        }}>
            <h2>{db[pointer].round}</h2>
            <Tracker />
            <LogsInfo />
            <UISettings />
            <audio src="audio/meow.mp3" preload="auto" ref={meow => isSound && meow?.play()} />
        </main>
    );
}
