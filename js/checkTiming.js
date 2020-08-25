window.onload = function() {
    // 実行したい処理
    console.log('ページの読み込みが完了したよ！');
 }

// htmlの読み込みのみが終了したとき
document.addEventListener("DOMContentLoaded", function() {
    console.log("start DOMContentLoaded");
});

let strObj = {
    "str" : "#tId"
}

function str2code(str) {
    let funcStr = "$('"+str+"').text('できました')";
    Function(funcStr)();
}

str2code(strObj.str);

