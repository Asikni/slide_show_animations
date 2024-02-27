let _marginLeft = -100;
const totalMargin = -500;

function moveRight() {
    if (_marginLeft > totalMargin) {
        document.getElementById("slideContainer").style.marginLeft = _marginLeft + 'vw';
        console.log("moveright", _marginLeft);
        _marginLeft += 100;
    } else if (_marginLeft >= 0) {
        document.getElementById("slideContainer").style.marginLeft = totalMargin + 'vw';
        _marginLeft = -100; // Reset to initial state
    }
}
