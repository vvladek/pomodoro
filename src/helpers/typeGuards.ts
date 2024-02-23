

export type TLog = {
    curr: number;
    status: "start" | "finish";
    timeStamp: string;
}


export type TPomodoroState = {
    pomodoros: number[];
    curr: number;
    ms: number;
    isPause: boolean;
    startTime: number;
}


export function isLogType(obj: any): obj is TLog {
    return (
        typeof obj === "object" &&
        "curr" in obj && typeof obj.curr === "number" &&
        "status" in obj && (obj.status === "start" || obj.status === "finish") &&
        "timeStamp" in obj && typeof obj.timeStamp === "string"
    );
}


export function isPomodoroState(obj: any): obj is TPomodoroState {
    return (
        typeof obj === "object" &&
        "pomodoros" in obj && Array.isArray(obj.pomodoros) &&
        "curr" in obj && typeof obj.curr === "number" &&
        "ms" in obj && typeof obj.ms === "number" &&
        "isPause" in obj && typeof obj.isPause === "boolean" &&
        "startTime" in obj && typeof obj.startTime === "number"
    )
}