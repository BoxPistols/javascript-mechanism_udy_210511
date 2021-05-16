function addNumFactory(num) {

    function addNum(val, val2) {
        return num + val + val2
    }
    return addNum
}

/*
 ** @addNumFactory = addNumFactory
 ** @addNumFactory( ) = addNum = add5
 ** @add5 = addNum
 ** @res = addNum(v, v2){ ...this }
 */

addNumFactory()

// 引数も持ちながら中の関数も内包する
const add5 = addNumFactory(100)
add5

const res = add5(5, 4)
res
add5

const add10 = addNumFactory(1000)
const res2 = add10(12, 13)
add10
res2

const all = res + res2
all