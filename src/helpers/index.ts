import { getCurrentPomodoro } from "./getCurrentPomodoro"
import { getLogTime } from "./getLogTime"
import { getMinFromMs } from "./getMinFromMs"
import { getSecFromMs } from "./getSecFromMs"
import { TLog, TPomodoroState, isLogType, isPomodoroState } from "./typeGuards"




export {
    getMinFromMs,
    getSecFromMs,
    isLogType,
    isPomodoroState,
    getCurrentPomodoro,
    getLogTime
}

export type { TLog, TPomodoroState }