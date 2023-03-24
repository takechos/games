// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;
var spotList = [];

// 行きたい場所を配列にぶち込む
spotList = [
    '<span>たける</span><br>たけるが出ました。飲んでください。',
    '<span>かすみ</span>',
    '<span>りよこ</span>',
    '<span>中村ゆうき</span>',
    '<span>かずさ</span>',
    '<span>はやお</span>',
    '<span>福岡なお</span>',
    '<span>りんご</span>',
    '<span>やまじ</span>',
    '<span>よしの</span>',
    '<span>かずま</span>',
    '<span>あつし</span>',
    '<span>マルコ</span>',
    '<span>えーすけ</span>',
    '<span>あしかわなお</span>',
    '<span>ミルク</span>',
    '<span>杉野</span>',
    '<span>JOJO</span>',
    '<span>しゅーま</span>',
    '<span>古幡ゆうこ</span>',
    '<span>まつたくん</span>',
    '<span>なんもゆか</span>',
    '<span>へいす</span>',
    '<span>なるピン</span>',
    '<span>ダンベル</span><br>ダンベルが出ました。全員で飲んでください。',
    '<span>ザファイ</span><br>ザファイが出ました。全員で飲んでください。',
    '<span>あいちゃん</span>',
    '<span>あおちん</span>',
    '<span>せう</span>',
    '<span>こーちゃん</span>',
    '<span>あかね</span>',
    '<span>なおや</span>',
    '<span>しゅんすけ</span>',
    '<span>あつき</span>',
    '<span>大樹</span>',
    '<span>ふせ</span>',
    '<span>りかちゃん</span>',
    '<span>ひらりん</span>',
    '<span>ゆーだい</span>',
    '<span>まりちゃん</span>',
    '<span>なつみ</span>',
    '<span>とし</span>',
    '<span>アッコ</span>',
    '<span>北郷</span>',
    '<span>ゆうま</span>',
    '<span>ちひろ</span>',
    '<span>たくや</span>',
    '<span>末廣ゆうき</span>',
    '<span>たすく</span>',
    '<span>ゆうな<br>',
    '<span>りの</span>',
    '<span>のがわ</span>',
    '<span>ひるかわ</span>',
    '<span>なみこ</span>',
    '<span>えみ</span>',
    '<span>あおい</span>',
    '<span>すずり</span>',
    '<span>はるまき</span>',
    '<span>鏡淵</span>',
    '<span>たいち</span>',
    '<span>せな</span>',
    '<span>ゆう</span>',
    '<span>メグ</span>',
    '<span>しょーた</span>',
    '<span>りょうこ</span>',
    '<span>ながディ</span>',
    '<span>スワン</span>',
    '<span>れん</span>',
    '<span>全員で乾杯</span>',
    '<span>あなたは1杯</span>',
    '<span>あなたは2杯</span>',
    '<span>全員で乾杯</span>',
    '<span>あなたは1杯</span>',
    '<span>あなたは2杯</span>',
    '<span>あなたは3杯</span>'
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
