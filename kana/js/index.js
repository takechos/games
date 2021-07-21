// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;
var spotList = [];

// 行きたい場所を配列にぶち込む
spotList = [
    '<span>プレミアム</span>',
'<span>シンプル</span>',
'<span>スマート</span>',
'<span>スムーズ</span>',
'<span>オリジナル</span>',
'<span>カスタマイズ</span>',
'<span>コラボレーション</span>',
'<span>コミュニケーション</span>',
'<span>プロデュース</span>',
'<span>エンターテインメント</span>',
'<span>パフォーマンス</span>',
'<span>ネットワーク</span>',
'<span>スパイシースパイシー</span>',
'<span>ジューシー</span>',
'<span>トロピカル</span>',
'<span>カロリー</span>',
'<span>ビタミン</span>',
'<span>アジア</span>',
'<span>ハワイ</span>',
'<span>アフリカ</span>',
'<span>ヨーロッパ</span>',
'<span>ピラミッド</span>',
'<span>アルプス</span>',
'<span>ロビー</span>',
'<span>エレベーター</span>',
'<span>アーケード</span>',
'<span>テラス</span>',
'<span>ベランダ</span>',
'<span>タワー</span>',
'<span>ボクサー</span>',
'<span>バトミントン</span>',
'<span>ボウリング</span>',
'<span>カーリング</span>',
'<span>アイスホッケー</span>',
'<span>カヌー</span>',
'<span>イベント</span>',
'<span>コンテスト</span>',
'<span>トークショー</span>',
'<span>セミナー</span>',
'<span>キャンペーン</span>',
'<span>サービス</span>',
'<span>コンセプト</span>',
'<span>アイデア</span>',
'<span>プロジェクト</span>',
'<span>スキル</span>',
'<span>マニュアル</span>',
'<span>ノウハウ</span>',
'<span>リキュール</span>',
'<span>ハイボール</span>',
'<span>ワイン</span>',
'<span>ビール</span>',
'<span>テキーラ</span>',
'<span>レモンサワー</span>',
'<span>ウォッカ</span>',
'<span>ジン</span>',
'<span>イベント発生！</span><br>次のお題を単語だけで',
'<span>イベント発生！</span><br>次のお題を濁音、半濁音なしで',
'<span>イベント発生！</span><br>次のお題を声を出さずに',
'<span>イベント発生！</span><br>次のお題を飲みながら',
'<span>イベント発生！</span><br>次のお題を単語だけで',
'<span>イベント発生！</span><br>次のお題を濁音、半濁音なしで',
'<span>イベント発生！</span><br>次のお題を声を出さずに',
'<span>イベント発生！</span><br>次のお題を飲みながら',
'<span>イベント発生！</span><br>次のお題をラップ調で',
'<span>イベント発生！</span><br>次のお題を単語だけで',
'<span>イベント発生！</span><br>次のお題を濁音、半濁音なしで',
'<span>イベント発生！</span><br>次のお題を声を出さずに',
'<span>イベント発生！</span><br>次のお題を飲みながら',
'<span>イベント発生！</span><br>次のお題を単語だけで',
'<span>イベント発生！</span><br>次のお題を濁音、半濁音なしで',
'<span>イベント発生！</span><br>次のお題を声を出さずに',
'<span>イベント発生！</span><br>次のお題を飲みながら',
'<span>イベント発生！</span><br>次のお題をラップ調で',
'<span>アリス</span>',
'<span>カナサシ</span>',
'<span>スペランサ</span>',
'<span>サニーイン</span>',
'<span>ジョイフル</span>',
'<span>エル</span>',
'<span>エレウテリア</span>',
'<span>ハーミッツ</span>',
'<span>ジューン</span>',
'<span>レッツ</span>',
'<span>パンプキン</span>',
'<span>ログイン</span>',
'<span>ダウンロード</span>',
'<span>アクセス</span>',
'<span>ゴール</span>',
'<span>スマッシュ</span>',
'<span>サービス</span>',
'<span>アウト</span>',
'<span>ゾンビ</span>',
'<span>モンスター</span>',
'<span>マスコット</span>',
'<span>カウボーイ</span>',
'<span>ピエロ</span>',
'<span>ヒーロー</span>',
'<span>オモロー</span>',
'<span>クリコン</span>',
'<span>ディズニー</span>',
'<span>チンジャオロース</span>',
'<span>ホイコーロー</span>',
'<span>ミネストローネ</span>',
'<span>クリームシチュー</span>',
'<span>カレー</span>',
'<span>デミグラス</span>',
'<span>ケチャップ</span>',
'<span>マヨネーズ</span>',
'<span>タルタルソース</span>',
'<span>コンソメ</span>',
'<span>マスタード</span>',
'<span>モチベーション</span>',
'<span>プライド</span>',
'<span>ジレンマ</span>',
'<span>ストレス</span>',
'<span>ケア</span>',
'<span>マイペース</span>',
'<span>レディース</span>',
'<span>メンリ</span>',
'<span>ボレスト</span>',
'<span>ショートラリー</span>',
'<span>ボレーボレー</span>',
'<span>ストレートラリー</span>',
'<span>クロスラリー</span>',
'<span>ビーム</span>',
'<span>オーラ</span>',
'<span>ハイパー</span>',
'<span>テレパシー</span>',
'<span>ジンクス</span>',
'<span>ガッツポーズ</span>',
'<span>ドイツ</span>',
'<span>スペイン</span>',
'<span>モンゴル</span>',
'<span>アメリカ</span>',
'<span>イギリス</span>',
'<span>ウーロンハイ</span>',
'<span>レッドブルウォッカ</span>',
'<span>シャンパン</span>'
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