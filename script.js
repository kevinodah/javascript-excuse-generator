function excuseGenerator(){
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Randomly select who, action, what and when
//who
let selectRandomWho = Math.floor(Math.random() * who.length);
let selectedWho = who[selectRandomWho]
//action
let selectedRandomAction = Math.floor(Math.random() * action.length);
let selectedAction = action[selectedRandomAction]
//what
let selectedRandomWhat = Math.floor(Math.random() * what.length);
let selectedWhat = what[selectedRandomWhat]
//when
let selectedRandomWhen = Math.floor(Math.random() * when.length);
let selectedWhen = when[selectedRandomWhen]

let excuse = selectedWho + " " + selectedAction + " " + selectedWhat + " "+ selectedWhen
document.getElementById('excuse').innerHTML = excuse
}

window.onload = excuseGenerator;