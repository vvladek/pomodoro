



export function getMinFromMs (ms: number): string {
    const minutes: number = Math.floor(ms / 1000 / 60)
    return `${minutes < 10 ? "0" : ""}${minutes}`
}