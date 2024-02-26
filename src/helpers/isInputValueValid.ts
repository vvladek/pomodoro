



export function isInputValueValid (value: string): boolean {
    if (!/[0-9]/g.test(value)) return false
    return Number(value) > 0 && Number(value) < 100
}