var initNum = 5;

getNum();

checkRadio();

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

function checkRadio(){
    // form要素を取得
    var element = document.getElementById( "numRadio" ) ;
    var elements = element.num ;
    
    // numつ目の要素を選択状態にする
    if(initNum<=3){
        elements[0].checked = true;
    }else if(initNum<=5){
        elements[1].checked = true;
    }else if(initNum<=7){
        elements[2].checked = true;
    }else if(initNum<=10){
        elements[3].checked = true;
    }
}


function transition() {
    let elements = document.getElementsByName('num');
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
        }
    }

    location.href = 'main.html?num=' +  encodeURIComponent(checkValue);
}