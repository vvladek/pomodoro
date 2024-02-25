import { IState, IPomodoro } from "@/context/initialContextData"



export function isPomodoroInterface(obj: any): obj is IPomodoro {
    return (
        typeof obj === 'object' &&
        'round' in obj && typeof obj.round === 'number' &&
        'type' in obj && (obj.type === 'pomodoro' || obj.type === 'break') &&
        'duration' in obj && typeof obj.duration === 'number' &&
        'status' in obj && (obj.status === 'ready' || obj.status === 'started' || obj.status === 'finished') &&
        'startTime' in obj && (typeof obj.startTime === 'string' || obj.startTime === null) &&
        'finishTime' in obj && (typeof obj.finishTime === 'string' || obj.finishTime === null)
    );
}



export function isIPomodoroArray(obj: any): obj is IPomodoro[] {
    if (!Array.isArray(obj)) return false
    for (const item of obj) {
        if (!isPomodoroInterface(item)) {
            return false;
        }
    }
    return true;
}



export function isStateInterface(obj: any): obj is IState {
    return (
        typeof obj === "object" &&
        "pointer" in obj && typeof obj.pointer === "number" &&
        "startTime" in obj && typeof obj.startTime === "number" &&
        "ms" in obj && typeof obj.ms === "number" &&
        "isPause" in obj && typeof obj.isPause === "boolean" &&
        "isSound" in obj && typeof obj.isSound === "boolean"
    )
}