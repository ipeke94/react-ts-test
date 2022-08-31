export const validation = (input) => {
    if (input < 1) {
        return 'Minumum value should be 1 -_-'
    }

    if (input > 5) {
        return 'max value should be 5 -_-'
    }

    return false
}