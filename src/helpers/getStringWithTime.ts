



export function getStringWithTime (milliseconds: number): string {

    const minutes: number = Math.floor(milliseconds / 1000 / 60)
    const seconds: number = Math.floor(milliseconds / 1000 % 60)

    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}