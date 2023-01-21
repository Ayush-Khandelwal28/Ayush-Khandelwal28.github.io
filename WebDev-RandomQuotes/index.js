let quote = document.getElementById("txtquote");
let author = document.getElementById("txtauthor");
let tags = document.getElementById("txttags");
function generateQuote(){
    let i = Math.floor(Math.random()*172);
    quote.textContent = `"${arr[i].quote}"`;
    author.textContent =   `Author: ` + `${arr[i].author}`;
    tags.textContent =   `Tags: ` + `${arr[i].topics}`;
}
