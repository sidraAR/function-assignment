


var count = 0;

function updateCounter() {
    document.getElementById('counter').innertext = count;
    }
function increase() {
    count++;
    updateCounter();
} 
function decrease() {
    count--;
    updateCounter();
}

    