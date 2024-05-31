let bg = document.querySelector('.bg');
let waiter = document.querySelector('.waiter');

document.onmousemove = (e) => {
    var screen = window.innerWidth;
    console.log(screen);
    if (screen<780){ 
        bg.style.transform = "translate(0, 0)";
        waiter.style.transform = "translate(0, 0)";
        return;}
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    setXY(x, y);
};

const setXY = (x, y) => {
    bg.style.transform = "translate(-" + x*50 + "px, -" + y*30 + "px)";
    waiter.style.transform = "translate(-" + x *70 + "px, -" + y*50+"px)";
}