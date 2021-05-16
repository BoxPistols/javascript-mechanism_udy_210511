incrementFactory = () => {
    let n = 0

    increment = () => {
        n = n + 1
    }
    return increment
}

const factory = incrementFactory()
factory()
factory()
factory()