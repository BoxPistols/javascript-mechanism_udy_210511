/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */


/* ------------------------------------------------------ */
/*                        エラー要員の特定                        */
/* ------------------------------------------------------ */
/**
 * 宣言がifの外に無い ブロックスコープ => 最初に置く
 * if内の宣言をトル =>  代入だけにする
 */

function fn() {
    let a
    if (true) {
        a = 'fn called';
    }
    return a // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */

/* ------------------------------------------------------ */
/*                           対応                           */
/* ------------------------------------------------------ */
/**
 * val1 => 再宣言をさせない
 */
let val = 'val1';

function fn2() {
    console.log(val); // 期待値->'val1'

    if (true) {
        let val = 'val2';
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

function incrementFactory() {
    let inc = 0 // 初期値

    function increment() { // かう
        inc = inc + 1
        console.log(inc);
    }
    return increment
}
const count = incrementFactory()
count()
count()
count()

/* ------------------------------------------------------ */
/*                     シンプルにブロックスコープで                     */
/* ------------------------------------------------------ */

{
    let num = 0

    function increment() {
        num = num + 1
        console.log(num);
    }
}
increment()
increment()
increment()