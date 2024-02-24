export interface IState {
    pointer: number;
    startTime: number;
    ms: number;
    isPause: boolean;
    isLogVisible: boolean;
    isSound: boolean;
    isSettingsVisible: boolean;
}


export interface IPomodoro {
    round: number;
    type: "pomodoro" | "break";
    duration: number;
    status: "ready" | "started" | "finished";
    startTime: string | null;
    finishTime: string | null;
}


export const initialState: IState = {
    pointer: 0,
    startTime: Date.now(),
    ms: 50 * 60000,
    isPause: true,
    isLogVisible: false,
    isSound: false,
    isSettingsVisible: true
}


export const pomodoros: IPomodoro[] = [
    { round: 1, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 1, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 2, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 2, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 3, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 3, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 4, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 4, type: "break", duration: 20 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 5, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 5, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 6, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 6, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 7, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 7, type: "break", duration: 10 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 8, type: "pomodoro", duration: 50 * 60000, status: "ready", startTime: null, finishTime: null },
    { round: 8, type: "break", duration: 20 * 60000, status: "ready", startTime: null, finishTime: null }
]