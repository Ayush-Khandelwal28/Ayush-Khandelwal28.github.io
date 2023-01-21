let string = "";
let buttons = document.querySelectorAll('.num');
function show(event) {
    console.log(event.textContent);
    if(event.textContent == '×')
    {
        string = string + '*';
    }
    else
    {
        string = string + event.textContent;
    }
    document.querySelector("input").value = string;
}

function Del(event) {
    console.log(string);
    string = string.slice(0,-1);
    document.querySelector("input").value = string;
}

function Clr(event) {
    console.log(event.textContent);
    string = "";
    document.querySelector("input").value = string;
}

function solve(event) {
    console.log(event.textContent);
    let ans = eval(string)
    document.querySelector("input").value = ans;
    string = ans.toString();
}