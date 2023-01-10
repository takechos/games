let num = 5;
let point = 0;
let sec = 0;
let dev = 58;

getArg();
calc();
replaceText();

function getArg() {
    // URLを取得
    var url = new URL(window.location.href);
    // URLSearchParamsオブジェクトを取得
    var params = url.searchParams;

    // getメソッド
    num = params.get('num')
    point = params.get('point')
    sec = params.get('sec')
}

function calc(){
    let perPoint = Math.floor((point/num)*10);
    if(perPoint <= 0){
        dev = 33.0;
        dev = dev - (sec/40);
        dev = (Math.round(dev * 100))/100
    }else if(perPoint <= 5){
        dev = dev - Number(10 - perPoint) - (sec/40);
        dev = (Math.round(dev * 100))/100
    }else if(perPoint <= 7){
        dev = dev + Number(Math.ceil(perPoint/2)) - (sec/40);
        dev = (Math.round(dev * 100))/100
    }else if(num == 10 && point == 10 && sec <= 80){
        dev = 517.0;
    }else{
        let bonus = ((num * num) + Number(point * point))/10;
        dev = dev + Number(bonus) + Number(perPoint) - (sec/100);
        dev = (Math.round(dev * 100))/100
    }
}


function replaceText() {

    var str = document.getElementById("result").innerHTML;

    let roundSec = (Math.round(sec * 10))/10
    str = str.replace("%s0", roundSec);
    str = str.replace("%s1", num);
    str = str.replace("%s2", point);
    str = str.replace("%s3", dev);

    document.getElementById("result").innerHTML = str;

    var tweet = document.getElementById("tweet").innerHTML;
    tweet = tweet.replace("%s0", roundSec);
    tweet = tweet.replace("%s1", num);
    tweet = tweet.replace("%s2", point);
    tweet = tweet.replace("%s3", dev);
    document.getElementById("tweet").innerHTML = tweet;
}


function toTop(){
    location.href = 'top.html?num=' +  encodeURIComponent(num);
}

