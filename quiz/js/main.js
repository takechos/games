//-----------------------------------------Timer
var start = new Date();

// Init
var hour = 0;
var min = 0;
var sec = 0;
var now = 0;
var datet = 0;

disp();

function disp(){

	now = new Date();

	datet = parseInt((now.getTime() - start.getTime()) / 1000);

	hour = parseInt(datet / 3600);
	min = parseInt((datet / 60) % 60);
	sec = datet % 60;

	// 数値が1桁の場合、頭に0を付けて2桁で表示する指定
	if(hour < 10) { hour = "0" + hour; }
	if(min < 10) { min = "0" + min; }
	if(sec < 10) { sec = "0" + sec; }

	// フォーマットを指定（不要な行を削除する）
	var timer = hour + ':' + min + ':' + sec;

	// テキストフィールドにデータを渡す処理（不要な行を削除する）
	document.form1.field1.value = timer; // パターン1

	setTimeout("disp()", 1000);

}

//-----------------------------------------
//メイン処理-----------------------------------------
let quizData = [];
let currentQuizNo = 0;
let num = 5;
let passCount = 0;
let passLimit = 2;

let point = 0;

const spare = 10;
const head = 30;
const tail = 100;

const msec =180; //文字送りの時間間隔




initProcess();

function initProcess() {
  //問題データを取りに行く
  let xhr = new XMLHttpRequest();
  xhr.open('GET', './json/quiz.json');
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    //取れたら突っ込む
    quizData = xhr.response;
    //メイン処理開始
    controller()
  }
}


function controller(){
  //問題数の取得
  getNum();
  //クイズの取得
  setQuestions();
  //問題作成
  makeQuestion();
}

function getNum() {
  // URLを取得
  var url = new URL(window.location.href);
  // URLSearchParamsオブジェクトを取得
  var params = url.searchParams;

  // getメソッド
  num = params.get('num')

  //set passLimit
  passLimit = Math.ceil( num/2 );
}

function setQuestions() {
  let questions = [];
  questions = randomSelect(quizData.slice(), Number(num) + Number(spare));

  //qの、先頭30〜length-100までのどこかの時点から最後までを切り抜く
  let rand = 0;
  questions.forEach(function(str, i) {
    //先頭30文字からお尻の100文字までの間で乱数を生成
    //randam * (max - min) + min
    rand = Math.floor( Math.random() * ((str['q'].length - tail) - head) + Number(head));
    console.log("str['q'].length =" + str['q'].length + "rand=" + rand);
    //rand以前を切り捨てる
    str['q'] = str['q'].substr( rand );
  });

  quizData = questions;
}

// 配列arrayからランダムにn個の要素を取り出す
function randomSelect(array, n){
  let newArray = [];
  
  while(newArray.length < n && array.length > 0)
  {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length);
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand]);
    // もとの配列からは削除する
    array.splice(rand, 1);
  }
  
  return newArray;
}

function makeQuestion() {
  var ins = '<div class = "header">'
  ins += '<div id="questionTitle" class = "p-quiz-ttl">何の曲でしょう？</div>'
  ins += '<div id="questionTitleSub" class = "p-quiz-ttl">ランダムな位置から歌詞を流します。</div>'
  ins += '</div>'
  ins += '<div id="currentQNo">第' + (currentQuizNo - passCount + 1) + '問</div><div id="allQNo">（' + num + '問中）</div>';
  ins += '<div><br></div>';
  ins += '<div class = "p-quiz-contents" id = "output_space">'
  //ins += quizData[currentQuizNo]['q']
  ins += '</div>'

  //contents
  ins += '<div class = "cp_iptxt">'
  ins += '<form name = "answer" class="ef">'
  ins += '<input type = "text" name = "input" placeholder="曲名を入力">'
  ins += '<br><br>'
  ins += '<input type = "button" value = "回答" onclick = "judge()" class = "c-btn">'
  ins += '<br><br><br>'
  ins += '<input id = "passBtn" type = "button" value = "パス（残り' + (passLimit-passCount) + '回）" onclick = "pass()" class = "c-btn">'
  ins += '<br><br>'
  ins += '</div>'

  ins += '<div class = "p-quiz-choices">'
  ins += '<div class = "p-quiz-choices__item">'
  ins += '<ul>'
  ins += '<li>正式名称、または全部ひらがな（もしくはカタカナ）で記入ください。</li>'
  ins += '<li>省略語も指定できます。例：猛烈、PJ、コントラ、など</li>'
  ins += '<li>大/小文字、全/半角、ひらがな/カタカナ、は区別する必要ありません。</li>'
  ins += '<li>「-ZZ ver.-」の記載はあってもなくても大丈夫です。空白や記号（「-」「・」など）も同様です。</li>'
  ins += '</ul>'
  ins += '</div>'
  ins += '</div>'
  ins += '<a href="top.html">トップに戻る</a>'

  document.querySelector('.js-quiz-content').innerHTML = ins;

  if(passCount >= passLimit){
    var passBtn = document.getElementById("passBtn");
    passBtn.setAttribute("disabled", true);
    passBtn.style.color="gray";
    passBtn.style.background="white";
  }

  //一文字ずつ流す
  startTimer();
}

function judge() {
  let qBaseAnswers = [];

  for(str of quizData[currentQuizNo]['a']){
    qBaseAnswers.push(formatChar(str));
  }
  let userAnswer = formatChar(answer.input.value);

  console.log("userAnswer=" + userAnswer + ",qBaseAnswers=" + qBaseAnswers);
  
  if (qBaseAnswers.includes(userAnswer)) {
    document.answer.reset();
    point++;
    makeAnswer(true);
  } else {
    document.answer.reset();
    makeAnswer(false);
  }
}

function formatChar(str){
  //Delete 全角半角空白、「-」、「'」、「 -ZZ ver.-」、「、」、「・」「「」」、「.」、「…」、「☆」、「:」、「!?！？」
  var delTarget = [' -ZZ ver.-',' ','　','\'',',','.','、','。','･','・','「','」','…','☆',':','：','!','?','！','？','"','[',']','〜','ー'];
  for (const element of delTarget) {
    if(str == null || str == ''){
      break;
    }
    if (str.indexOf(element) != -1) {
      //strにelementを含む場合の処理
      str = str.split(element).join('');
    }
  }

  if(str != null || str != ''){
    //Replace　ひらがな→カタカナ、全角→半角（ローマ字）、大文字→小文字、φ→O

    str = str.replace(/[ぁ-ん]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });

    str = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });

    str = str.toLowerCase();

    str = str.split('φ').join('O');
  }
  
  return str;
}

function pass() {
  //文字送りを止める
  clearInterval(intervalId);

  passCount++;
  currentQuizNo++;

  if(passCount <= passLimit){
    makeQuestion();
  }
}

function makeAnswer(boolean) {
  //文字送りを止める
  clearInterval(intervalId);

  var ins = '';
  //ins += '<p class="p-quiz-ttl">' + quizData[currentQuizNo]['q'] + '</p>';
  // 正解の場合
  if (boolean === true) {
    ins += '<div id="correctA">正解!</div>';
    // 不正解の場合
  } else {
    ins += '<div id="incorrectA">不正解!</div>';
  }

  ins += '<p class="p-quiz-answer">答え：' + quizData[currentQuizNo]['title'] + '</p>';

  // 未回答の問題がある場合
  if (currentQuizNo - passCount + 1 < num) {
    currentQuizNo++;
    ins += '<div class="p-quiz-next">';
    ins += '<button class="c-btn js-quiz-next" onClick="makeQuestion()">次の問題</button>';
    ins += '</div>';
    // 全て回答済の場合
  } else {
    ins += '<div class="p-quiz-next">';
    ins += '<button class="c-btn js-quiz-result" onClick="toResult()">結果を見る</button>';
    ins += '</div>';
  }
  document.querySelector('.js-quiz-content').innerHTML = ins;
}

function toResult() {
  var stop = new Date();
// 経過時間をミリ秒で取得
var ms = stop.getTime() - start.getTime();
var sec = ms / 1000
  location.href = 'result.html?num=' + encodeURIComponent(num) + '&point=' + encodeURIComponent(point) + '&sec=' + encodeURIComponent(sec);
}


//-----------------------------------------
//-----------------------------------------文字送り処理
var n; //文字を増やす処理の回数を数える変数nの宣言
//↓関数の宣言↓
function word() {
  var s = quizData[currentQuizNo]['q']
  var len = s.length; //入力された文字の変数sの文字数をカウントする変数lenの宣言
  document.getElementById('output_space').innerHTML = s.slice(0, n); //HTMLのoutput_spaceというidの要素に、変数sの０文字目からn文字までのテキストを表示する
  if (n < len) { //文字を増やす処理の回数が入力された文字数を超えるまで繰り返す
    //常に一番下を追いかける
    scrollBottom();
    n++;
  } else { //文字を増やす処理の回数が入力された文字数を超えた時の処理
    clearInterval(intervalId); //タイマーをリセットする
    s = null; //変数sを空にする
  }
}
//↓関数の宣言↓
function startTimer() {
  n = 1; //nの初期値を1とする
  intervalId = setInterval(word, msec); //msecミリ秒ごとにword()関数の処理を実行する
}

function scrollBottom() {
  let target = document.getElementById('output_space');
  //target.scrollIntoView(false);
  target.scrollTo(0, target.scrollHeight);
}