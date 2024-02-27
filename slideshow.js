let _marginLeft = -100;
const totalMargin = -500;
setTimeout(function(){
    document.getElementById('slideContainer').style.visibility = "visible";
    },6000);


function moveleft() {
    if (_marginLeft > totalMargin) {
        document.getElementById("slideContainer").style.marginLeft = _marginLeft + 'vw';
        _marginLeft -= 100; 
    }else {
        document.getElementById("slideContainer").style.marginLeft = 0 + 'vw';
        _marginLeft = -100;
    }
}

function moveRight(){
    if (_marginLeft >= totalMargin && _marginLeft < -100) {
        document.getElementById("slideContainer").style.marginLeft = 200 + _marginLeft + 'vw';
        _marginLeft += 100; 
        
    }else if(_marginLeft >= -100){
        document.getElementById("slideContainer").style.marginLeft = -400 + 'vw';
        _marginLeft = -500;
    }
}

