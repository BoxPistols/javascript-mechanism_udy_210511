let a = 0

function b() {
    console.log(a, arguments);
}
b()

function c() {
    console.log(a, this);
}
c()