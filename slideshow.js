let _marginLeft = -100;
    const totalMargin = -500;
    let animationFrame;

    function moveContainer() {
        document.getElementById("slideContainer").style.marginLeft = _marginLeft + 'vw';
    }

    function moveleft() {
        if (_marginLeft > totalMargin) {
            _marginLeft -= 2; // Adjust the increment for a slower animation
            moveContainer();
            animationFrame = requestAnimationFrame(moveleft);
        } else {
            _marginLeft = -100;
            moveContainer();
            cancelAnimationFrame(animationFrame);
        }
    }

    function moveRight() {
        if (_marginLeft >= totalMargin && _marginLeft < -100) {
            _marginLeft += 2; // Adjust the increment for a slower animation
            moveContainer();
            animationFrame = requestAnimationFrame(moveRight);
        } else if (_marginLeft >= -100) {
            _marginLeft = -500;
            moveContainer();
            cancelAnimationFrame(animationFrame);
        }
    }