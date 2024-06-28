

export function getLogTime (timeStamp: string | number | null): string {

    if (!timeStamp) return `Error getting time`

    const date = new Date(timeStamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}