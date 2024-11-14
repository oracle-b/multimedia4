
//document.getElementById("count-el").innerText = 115;
//my first love
let count = 0;
let countEl = document.getElementById("count-el"); // get element by id

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

let message = document.getElementById("saved-count-el");
log_entries = message.innerHTML;

function save() {
    let countStr = count + " - ";
    log_entries = log_entries + countStr; // concatenate new count string to existing string
    message.innerHTML = log_entries;
    count = 0; // reset count to 0 after save
    countEl.innerText = count;
}
