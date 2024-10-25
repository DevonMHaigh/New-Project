const ball = document.getElementById('ball');
document.addEventListener('keydown',handleKeyPress);
let position = 0;
let vertical = 0;


function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    position -= 10;
  }
  if (e.code === 'ArrowRight') {
    position += 10;
  } if (e.code === 'ArrowUp') {
    vertical -=10;
  } if( e.code === 'ArrowDown') {
    vertical += 10;
  }
  if (position < 0) {
    position = 0;
  }

  refresh();
  refresh2();
}
function refresh() {
  ball.style.left = position + 'px';
}
function refresh2() {
  ball.style.top = vertical +'px'
}