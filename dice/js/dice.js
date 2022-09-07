function transition() {
    var element = document.getElementById('elemlist').value;
    const elements = element.split(/\r\n|\n/);
    let len = elements.length;
    if(len < 1){
        location.href = 'dice.html?transition=false'
    }

    var urltail='len=' + len;
    
    for (let i = 0; i < len; i++) {
        console.log('&arg' + i + '=' + elements[i]);
        urltail = urltail + '&arg' + i + '=' + elements[i];
    }

    console.log('main.html?' +  encodeURIComponent(urltail));
    location.href = 'main.html?' +  encodeURIComponent(urltail);
}

function reset() {
    var textareaForm = document.getElementsByName('elemlist');
    textareaForm.value = '';
}

