/*
getNum()
function getNum() {
    // URLを取得
    var url = new URL(window.location.href);
    // URLSearchParamsオブジェクトを取得
    var params = url.searchParams;
  
    // getメソッド
    if(params.get('num')){
        initNum = params.get('num')
    }
}


function url_query_param() {
    var search = location.search;
    search = search.replace('?', '');
    var ar_search = search.split('&');
    var param = new Array();
    ar_search.forEach(function (val) {
        var sep_val = val.split('=');
        param[sep_val[0]] = sep_val[1];
    });
    return param;
}
*/


// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;
var spotList = [];

// URLパラメータを"&"で分離する
var url_search = location.search.substr(1).split('&');
 // パラメータ連想配列エリア初期化
var spotList = [];
// キーエリア初期化（今回はValueだけしか使わないが）
var key = null;
for(var i = 0 ; i < url_search.length ; i++)
{
	// "&"で分離したパラメータを"="で再分離
	key = url_search[i].split("=");
	// パラメータをPUSH
    spotList.push(decodeURIComponent(key[1]));
}

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
