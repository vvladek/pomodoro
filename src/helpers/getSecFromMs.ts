



export function getSecFromMs (ms: number): string {
    const seconds: number = Math.floor(ms / 1000 % 60)
    return `${seconds < 10 ? "0" : ""}${seconds}`
}