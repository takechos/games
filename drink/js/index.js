// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;
var spotList = [];

// 行きたい場所を配列にぶち込む
spotList = [
    '<span>たける</span><br>飲んでなくない？',
    '<span>れん</span><br>飲んでなくない？',
    '<span>しゅーま</span><br>飲んでなくない？',
    '<span>なおちゃん</span><br>飲んでなくない？',
    '<span>ゆうな</span><br>飲んでなくない？',
    '<span>全員</span><br>飲んでなくない？'
                ];

// スタートボタンを押したときの処理
function clickedStart() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            place = spotList[Math.floor( Math.random() * spotList.length )];
            roulette.className = 'name';
            document.getElementById("isPlace").innerHTML = place;
        }
    }, 10);
}

// ストップボタンを押した時の処理
function clickedStop() {
    'use strict';
    clearTimeout(intervalID);
    startBtn.disabled = "";
    isStart = false;
    if(place === '') {
        alert("スタートボタンを押してからストップボタンを押してね！");
    } else {
// 結果を画面に表示
    roulette.className = 'name';
    document.getElementById("isPlace").innerHTML = place;
    }
}
