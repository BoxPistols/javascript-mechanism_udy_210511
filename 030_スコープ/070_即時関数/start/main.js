{
    function a() {
        console.log("aaa");
    }
    a()

    let b = function (bVal) {
        console.log("bbb" + bVal)
        return 100
    }("Hoge")
    b
}
// ...
{
    (function () {
        console.log("fast")
        return 222
    })("234")

    let c = (function () {
        console.log("Call");

        let privateVal = 12
        let publicVal = 77

        function privateFn() {
            console.log("privateFn Call");
        }

        function publicFn() {
            console.log("publicFn Call" + (publicVal + privateVal++));
        }

        return {
            publicVal,
            publicFn
        }
    })()

    c.publicVal

    c.publicFn()
    c.publicFn()
    c.publicFn()
}