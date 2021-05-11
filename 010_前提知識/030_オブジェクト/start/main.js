/* use Quokka */
let obj = {
    p1: "v1",
    p2: "v2",
    //  無名関数
    p3: function () {
        console.log("v3")
    },
    p4: {
        p5: "v5"
    }
}

obj.p3()
console.log(obj.p4.p5)

obj.p6 = "v6"

console.log(obj) 