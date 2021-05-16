let a = 2;
// window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        console.log(a);
        a
        if (true) {
            var a = 3;
        }
        a
    }
    fn2();
    a
}
fn1();
a