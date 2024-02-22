"use client"

import { Tracker } from "@/components";
import { Context } from "@/context/ContextProvider";
import { useSafeExit } from "@/hooks/useSafeExit";
import { useContext } from "react";



export default function Home () {

    const { curr } = useContext(Context)

    useSafeExit()


    return (
        <main style={{
            backgroundColor: curr % 2 ? "var(--break-color)" : "var(--pomodoro-color)"
        }}>
            <Tracker />
        </main>
    );
}
