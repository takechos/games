function transition() {
    var element = document.getElementById('elemlist').value;
    const elements = element.split(/\r\n|\n/);
    let len = elements.length;
    if(len <= 1){
        location.href = 'dice.html?transition=false'
    }

    var urltail = '?';
    
    for (let i = 0; i < len; i++) {
        if(i==0){
            urltail = urltail + 'arg' + i + '=' + encodeURIComponent(elements[i]);
        }else{
            urltail = urltail + '&arg' + i + '=' + encodeURIComponent(elements[i]);
        }
    }

    //console.log('main.html?' +  encodeURIComponent(urltail));
    //location.href = 'main.html?' +  encodeURIComponent(urltail);
    var urlIncludeParam = 'main.html' +  urltail;
    console.log(urlIncludeParam);
    location.href = urlIncludeParam;
}

function reset() {
    var textareaForm = document.getElementsByName('elemlist');
    textareaForm.value = '';
}

