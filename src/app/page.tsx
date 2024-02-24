"use client"

import { LogsInfo, Tracker } from "@/components";
import { Context } from "@/context/ContextProvider";
import { useSafeExit } from "@/hooks/useSafeExit";
import { useContext } from "react";



export default function Home () {

    const { pointer, isSound } = useContext(Context)

    useSafeExit()


    return (
        <main style={{
            backgroundColor: pointer % 2 ? "var(--break-color)" : "var(--pomodoro-color)"
        }}>
            <Tracker />
            <LogsInfo />
            <audio src="audio/meow.mp3" preload="auto" ref={meow => isSound && meow?.play()} />
        </main>
    );
}
