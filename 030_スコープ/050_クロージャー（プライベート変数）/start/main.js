function incrementFactory() {
    let num = 0

    function increment() {
        num += 10
        num
    }
    return increment
}

const increment = incrementFactory()

increment()
increment()
increment()